zn.define(function () {

    return zn.Controller('model',{
        methods: {
            importXlsx: {
                method: 'POST',
                argv: {
                    start: 1,
                    model: null,
                    fields: [],
                    vars: '{}'
                },
                value: function (request, response, chain){
                    var _files = request.$files,
                        _result = [],
                        _sqls = [],
                        _store = this.store(),
                        _start = request.getInt('start'),
                        _model = request.getValue('model'),
                        _fields = request.getValue('fields'),
                        _vars = JSON.parse(request.getValue('vars')||'{}'),
                        _len = _fields.split(',').length;

                    var xlsx = require('xlsx');

                    zn.each(_files, function (file, key){
                        var _file = request.uploadFile(file);
                        var _worksheet = xlsx.readFile(_file.path);
                        Object.keys(_worksheet.Sheets).map((name)=>{
                            var _data = xlsx.utils.sheet_to_json(_worksheet.Sheets[name], {
                                header: 1,
                                raw: true
                            });

                            if(_data.length){
                                zn.each(_data, function (item, index){
                                    if(index > (_start-1)){
                                        if(item.length){
                                            var _values = [],
                                                _value = null;
                                            for(var i=0; i<_len; i++){
                                                _value = item[i]||'';

                                                if(_vars[i]){
                                                    _value = _vars[i][_value];
                                                }

                                                if(!zn.is(_value, 'number')){
                                                    _value = "\'" + _value + "\'";
                                                }
                                                _values.push(_value);
                                            }
                                            _sqls.push("insert into {0} ({1}) values ({2})".format(_model, _fields, _values.join(',')));
                                        }
                                    }
                                });
                            }

                            _result.push({
                                title: name,
                                data: _data
                            });
                        });
                    });

                    _store.query(_sqls.join(';')).then(function (){
                        response.success(_result);
                    }, function (err){
                        response.error('Import Error: ' + err.message);
                    });
                }
            },
            __getModelAction: function (request, name){
                var _apps = request.context._apps,
                    _app = null,
                    _actions = {},
                    _action = null;
                for(var key in _apps){
                    _app = _apps[key];
                    _actions = _app.getActions();
                    for(var _key in _actions){
                        if(_key==name){
                            _action = _actions[_key];
                            var _temp = new _action(this._store, _action.getMeta('model'));
                            if(request.getValue('model_alise')){
                                _temp.set('modelAlise', request.getValue('model_alise'));
                            }
                            return _temp;
                        }
                    }
                }
            },
            getAllModels: {
                method: 'GET/POST',
                value: function (request, response, chain){
                    var _appName = request.getValue('appName'),
                        _apps = request.context._apps,
                        _models = [];

                    if(_appName){
                        if(_apps[_appName]){
                            _apps = [_apps[_appName]];
                        }else {
                            _apps = [];
                        }
                    }

                    zn.each(_apps, function (app){
                        zn.each(app.getModels(), function (model, index){
                            _models.push({
                                name: index,
                                isTreeModel: !!model.getPropertie('pid'),
                                table: model.getTable(),
                                props: model.getMeta('properties')
                            });
                        });
                    });

                    response.success(_models);
                }
            },
            getModelProps: {
                method: 'GET/POST',
                argv: {
                    model: null
                },
                value: function (request, response, chain){
                    var _model = request.getValue('model'),
                        _apps = request.context._apps

                    zn.each(_apps, function (app){
                        zn.each(app.getModels(), function (model, index){
                            if(_model == index || _model == model.getTable()){
                                var _props = model.getMeta('properties'),
                                    _temp = [
                                        { type: 'text', name: 'title', title: 'title' }
                                    ],
                                    _prop = null;

                                for(var key in _props){
                                    _prop = _props[key];
                                    _prop.name = key;
                                    //var _type = _prop.type;
                                    //_prop.dataType = _type;
                                    _prop.title = key;
                                    _prop.type = 'text';
                                    _temp.push(_prop);
                                }
                                response.success(_temp);
                                return -1;
                            }
                        });
                    });
                }
            },
            getActionByName: {
                method: 'GET/POST',
                value: function (request, response, chain){
                    var _action = this.__getModelAction(request, request.getValue('name'));
                    response.success(_action);
                }
            },
            selectAllChildByPid: {
                method: 'GET/POST',
                argv: {
                    model: null,
                    fields: '*',
                    where: '',
                    pid: null,
                    order: ''
                },
                value: function (request, response, chain){
                    var _action = this.__getModelAction(request, request.getValue('model'));
                    var _pid = request.getValue('pid');
                    var _where = request.getValue('where');
                    var _whereSql = "locate('," + _pid + ",',parentPath)<>0";
                    if(_where){
                        _whereSql += ' and ' + _where;
                    }
                    if(_action){
                        _action.select(request.getValue('fields'), _whereSql, request.getJSON('order')).then(function(data){
                            response.success(data);
                        }, function (data){
                            response.error(data);
                        });
                    }else {
                        response.error('Model is not exist!');
                    }
                }
            },
            selectOne: {
                method: 'GET/POST',
                argv: {
                    model: null,
                    fields: '*',
                    where: ''
                },
                value: function (request, response, chain){
                    var _action = this.__getModelAction(request, request.getValue('model'));
                    if(_action){
                        _action.select(request.getValue('fields'), request.getValue('where'), request.getValue('order')).then(function(data){
                            response.success(data.length?data[0]:null);
                        }, function (data){
                            response.error(data);
                        });
                    }else {
                        response.error('Model is not exist!');
                    }
                }
            },
            select: {
                method: 'GET/POST',
                argv: {
                    model: null,
                    fields: '*',
                    where: '{}',
                    ifEnabledRights: 0,
                    order: '{}'
                },
                value: function (request, response, chain){
                    var _action = this.__getModelAction(request, request.getValue('model'));
                    if(_action){
                        var _where = request.getJSON('where');
                        if(+request.getValue('ifEnabledRights')){
                            if(request.session.hasItem()){
                                if(request.session.getItem('@AdminUser')){
                                    _where['0&<>'] = 'zn_user_exist(' + request.session.getItem('@AdminUser').id + ', users, roles)';
                                }else {
                                    return response.sessionTimeout('Login Session Timeout.');
                                }
                            }else {
                                return response.sessionTimeout('Login Session Timeout.');
                            }
                        }
                        _action.select(request.getValue('fields'), _where, request.getJSON('order')).then(function(data){
                            response.success(data);
                        }, function (data){
                            response.error(data);
                        });
                    }else {
                        response.error('Model is not exist!');
                    }
                }
            },
            paging: {
                method: 'GET/POST',
                argv: {
                    model: null,
                    fields: '*',
                    where: '{}',
                    order: '{}',
                    pageIndex: 1,
                    pageSize: 10,
                    ifEnabledRights: 0
                },
                value: function (request, response, chain){
                    var _action = this.__getModelAction(request, request.getValue('model'));
                    if(_action){
                        var _fields = request.getValue('fields');
                        var _where = request.getJSON('where');
                        if(_fields=='*'){
                            _fields = null;
                        }
                        if(+request.getValue('ifEnabledRights')){
                            if(request.session.hasItem()){
                                _where['0&<>'] = 'zn_user_exist(' + request.session.getItem('@AdminUser').id + ', users, roles)';
                            }else {
                                return response.sessionTimeout('Login Session Timeout.');
                            }
                        }

                        _action.paging(_fields, _where, request.getJSON('order'), request.getInt('pageIndex'), request.getInt('pageSize')).then(function(data){
                            response.success(data);
                        }, function (data){
                            response.error(data);
                        });
                    }else {
                        response.error('Model is not exist!');
                    }
                }
            },
            addNode: {
                method: 'GET/POST',
                argv: {
                    model: null,
                    data: null
                },
                value: function (request, response, chain){
                    var _action = this.__getModelAction(request, request.getValue('model'));
                    if(_action){
                        _action.addNode(request.getJSON('data')).then(function (data){
                            _action = null;
                            response.success(data);
                        }, function (data){
                            response.error(data);
                        });
                    }else {
                        response.error('Model is not exist!');
                    }
                }
            },
            updateNode: {
                method: 'GET/POST',
                argv: {
                    model: null,
                    data: null,
                    where: null
                },
                value: function (request, response, chain){
                    var _action = this.__getModelAction(request, request.getValue('model'));
                    if(_action){
                        _action.updateNode(request.getJSON('data'), request.getJSON('where')).then(function (data){
                            response.success(data);
                        }, function (data){
                            response.error(data);
                        });
                    }else {
                        response.error('Model is not exist!');
                    }
                }
            },
            deleteNode: {
                method: 'GET/POST',
                argv: {
                    model: null,
                    id: null
                },
                value: function (request, response, chain){
                    var _action = this.__getModelAction(request, request.getValue('model'));
                    if(_action){
                        _action.deleteNode({ id: request.getValue('id') }).then(function (){
                            response.success('删除成功');
                        }, function (data){
                            response.error(data);
                        });
                    }else {
                        response.error('Model is not exist!');
                    }
                }
            },
            deleteNodes: {
                method: 'GET/POST',
                argv: {
                    model: null,
                    ids: null
                },
                value: function (request, response, chain){
                    var _action = this.__getModelAction(request, request.getValue('model'));
                    if(_action){
                        var _ids = request.getValue('ids');
                        if(_ids[0]==','){
                            _ids = '0' + _ids + '0';
                        }
                        _action.deleteNode('id in (' + _ids + ')').then(function (){
                            response.success('删除成功');
                        }, function (data){
                            response.error(data);
                        });
                    }else {
                        response.error('Model is not exist!');
                    }
                }
            }
        }
    });
});
