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

                    this.query(_sqls.join(';'))
                        .then(function (){
                            response.success(_result);
                        }, function (err){
                            response.error('Import Error: ' + err.message);
                        });
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
                            if(_model == index || _model == model.getMeta('table')){
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
            selectAllChildByPid: {
                method: 'GET/POST',
                argv: {
                    model: null,
                    pid: null
                },
                value: function (request, response, chain){
                    var _values = request.getValue(),
                        _collection = this.collection(_values.model),
                        _pid = _values.pid;
                    _values.where = [
                        "locate('," + _pid + ",',parentPath)<>0"
                    ];

                    if(_collection){
                        _collection.select(_values)
                                    .then(function(data){
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
                },
                value: function (request, response, chain){
                    var _values = request.getValue(),
                        _collection = this.collection(_values.model);

                    if(_collection){
                        _collection.select(_values)
                                    .then(function(data){
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
                    ifRights: 0
                },
                value: function (request, response, chain){
                    var _values = request.getValue(),
                        _collection = this.collection(_values.model);

                    if(_collection){
                        console.log('Value: ', _values);
                        _collection.select(_values)
                                    .then(function(data){
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
                    model: null
                },
                value: function (request, response, chain){
                    var _values = request.getValue(),
                        _collection = this.collection(_values.model);

                    if(_collection){
                        _collection.paging(_values)
                                    .then(function(data){
                                        response.success(data);
                                    }, function (data){
                                        response.error(data);
                                    });
                    }else {
                        response.error('Model is not exist!');
                    }
                }
            },
            insert: {
                method: 'GET/POST',
                argv: {
                    model: null,
                    values: null
                },
                value: function (request, response, chain){
                    var _values = request.getValue(),
                        _collection = this.collection(_values.model);

                    if(_collection){
                        _collection.insert(_values.values)
                                    .then(function(data){
                                        response.success(data);
                                    }, function (data){
                                        response.error(data);
                                    });
                    }else {
                        response.error('Model is not exist!');
                    }
                }
            },
            update: {
                method: 'GET/POST',
                argv: {
                    model: null,
                    updates: null,
                    where: null
                },
                value: function (request, response, chain){
                    var _values = request.getValue(),
                        _collection = this.collection(_values.model);

                    if(_collection){
                        _collection.update(_values.updates, _values.where)
                                    .then(function(data){
                                        response.success(data);
                                    }, function (data){
                                        response.error(data);
                                    });
                    }else {
                        response.error('Model is not exist!');
                    }
                }
            },
            delete: {
                method: 'GET/POST',
                argv: {
                    model: null,
                    where: null
                },
                value: function (request, response, chain){
                    var _values = request.getValue(),
                        _collection = this.collection(_values.model);

                    if(_collection){
                        _collection.delete(_values.where)
                                    .then(function(data){
                                        response.success(data);
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
