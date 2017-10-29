zn.define(function () {

    return zn.Controller('menu',{
        methods: {
            getMenuForm: {
                method: 'GET/POST',
                argv: {
                    menuId: null
                },
                value: function (request, response, chain){
                    var _menuId = request.getValue('menuId');
                    this.beginTransaction()
                        .query('select table fields', function (sql, rows){
                            return zn.sql.select({
                                table: 'zn_plugin_admin_menu_table',
                                where: {
                                    menu_id: _menuId
                                }
                            }) + zn.sql.select({
                                table: 'zn_plugin_admin_menu_table_field',
                                where: {
                                    menu_id: _menuId
                                }
                            });
                        }, function (err, rows){
                            if(err){
                                response.error(err);
                            }else {
                                response.success(rows);
                            }
                        }).commit();
                }
            },
            generateTable: {
                method: 'GET/POST',
                argv: {
                    tableId: null
                },
                value: function (request, response, chain){
                    var _tableId = request.getValue('tableId');
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: 'zn_plugin_admin_menu_table',
                            where: {
                                id: _tableId
                            }
                        }) + zn.sql.select({
                            table: 'zn_plugin_admin_menu_table_field',
                            where: {
                                table_id: _tableId
                            }
                        }))
                        .query('create table', function (sql, rows){
                            var _table = rows[0][0];
                            if(_table){
                                var _fields = rows[1], __fields = {};
                                var _mixins = _table.mixins.split(','), __mixins = [];
                                if(_table.parent_id){
                                    __fields['zn_plugin_admin_primary_id'] = {
                                        type: ["int", 11],
                                        default: 0
                                    };
                                }
                                __fields['zn_plugin_admin_menu_id'] = __fields['zn_plugin_admin_instance_id'] = {
                                    type: ["int", 11],
                                    default: 0
                                };
                                _mixins.forEach(function (value){
                                    if(!!value){
                                        __mixins.push(zn.path(global, value));
                                    }
                                });
                                _fields.map(function(field){
                                    __fields[field.name] = {
                                        type: JSON.parse(field.field_type),
                                        default: field.field_default
                                    };
                                });
                                return zn.Model(_table.table_name, {
                                    mixins: __mixins,
                                    properties: __fields
                                }).getCreateSql() + zn.sql.update({
                                    table: 'zn_plugin_admin_menu_table',
                                    where: { id: _tableId },
                                    updates: { has_generated: 1 }
                                });
                            }else {
                                return response.error('表存在'), false;
                            }
                        }, function (err, rows){
                            if(err){
                                response.error(err);
                            }else {
                                response.success(rows);
                            }
                        }).commit();
                }
            }
        }
    });

});
