zn.define(['node:fs'], function (node_fs) {

    return zn.Controller('config',{
        methods: {
            __select: function (_id){
                return this.collection('ZNPluginAdminConfig')
                            .select({
                                where: { _id: _id }
                            });
            },
            __insert: function (_id, values){
                return this.collection('ZNPluginAdminConfig')
                            .insert({

                            });
            },
            __delete: function (_id, values){
                return this.collection('ZNPluginAdminConfig')
                            .insert({

                            });
            },
            __update: function (_id, _updates){
                var _sqls = [], _value = null;
                for(var key in _updates){
                    _value = _updates[key];
                    _sqls.push("update zn_plugin_admin_config set _value = '{0}' where _id='{1}' and _key='{2}';".format(_value, _id, key));
                }
                return this.query(_sqls.join(''));
            },
            get_ids: {
                method: 'GET',
                value: function (request, response, chain){
                    this.query('select _id as value, _id as text from zn_plugin_admin_config group by _id;')
                        .then(function (data){
                            response.success(data);
                        }, function (err){
                            response.error(err);
                        });
                }
            },
            selectBy_id: {
                method: 'GET/POST',
                argv: {
                    _id: null
                },
                value: function (request, response, chain){
                    var _valueKey = request.getValue('valueKey');
                    this.__select(request.getValue('_id'))
                        .then(function (data){
                            var _data = {}
                            data.forEach(function (item){
                                if(_valueKey){
                                    _data[item._key] = item[_valueKey];
                                }else {
                                    _data[item._key] = item;
                                }
                            });
                            response.success(_data);
                        }, function (err){
                            response.error(err);
                        });
                }
            },
            updateBy_id: {
                method: 'GET/POST',
                argv: {
                    _id: null,
                    updates: null
                },
                value: function (request, response, chain){
                    this.__update(request.getValue('_id'), request.getValue('updates'))
                        .then(function (data){
                            response.success('保存成功');
                        }, function (err){
                            response.error(err);
                        });
                }
            },
            updateById: {
                method: 'GET/POST',
                argv: {
                    id: null,
                    updates: null
                },
                value: function (request, response, chain){
                    return this.collection('ZNPluginAdminConfig')
                                .update(request.getValue('updates'), {
                                    id: request.getValue('id')
                                })
                                .then(function (data){
                                    response.success('保存成功');
                                }, function (err){
                                    response.error(err);
                                });
                }
            },
            deleteBy_id: {
                method: 'GET/POST',
                argv: {
                    _id: null
                },
                value: function (request, response, chain){
                    return this.collection('ZNPluginAdminConfig')
                                .delete({
                                    _id: request.getValue('_id')
                                })
                                .then(function (data){
                                    response.success('删除成功');
                                }, function (err){
                                    response.error(err);
                                });
                }
            },
            deleteById: {
                method: 'GET/POST',
                argv: {
                    id: null
                },
                value: function (request, response, chain){
                    return this.collection('ZNPluginAdminConfig')
                                .delete({
                                    id: request.getValue('id')
                                })
                                .then(function (data){
                                    response.success('删除成功');
                                }, function (err){
                                    response.error(err);
                                });
                }
            }
        }
    });

});
