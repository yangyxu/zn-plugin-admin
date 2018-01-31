zn.define(['node:chinese-to-pinyin'],function (pinyin) {

    return zn.Controller('user',{
        methods: {
            logout: {
                method: 'GET/POST',
                value: function (request, response, chain){
                    var _user = request.getSession();
                    if(_user){
                        this.collection('ZNPluginAdminUserLog').insert({
                            user_id: _user.id,
                            type: 1
                        }).then(function (){
                            request.session.clear();
                            response.success('注销成功');
                        }, function (){
                            response.error('注销失败');
                        });
                    }else {
                        response.success('注销成功');
                    }
                }
            },
            login: {
                method: 'GET/POST',
                argv: {
                    name: null,
                    password: null
                },
                value: function (request, response, chain){
                    var _user = null;
                    this.beginTransaction()
                        .query("select * from zn_plugin_admin_user where (name='{0}' or email='{0}' or phone='{0}') and password='{1}';".format(request.getValue('name'), request.getValue('password')))
                        .query('update login time', function (sql, rows){
                            if(rows.length){
                                _user = rows[0];
                                if(_user.status==0){
                                    return response.error('账户还未激活'), false;
                                }
                                if(_user.status==-1){
                                    return response.error('账户被锁定, 请联系系统管理员'), false;
                                }
                                if(_user.status==1){
                                    return "update zn_plugin_admin_user set last_login_time=now() where id={0};".format(_user.id);
                                }
                            }else {
                                return response.error('用户名或密码错误'), false;
                            }
                        }, function (err){
                            if(err){
                                response.error(err);
                            }else {
                                _user.password = null;
                                delete _user.password;
                                request.setSession(_user);
                                response.success(_user);
                            }
                        }).commit();
                }
            },
            exchange: {
                method: 'GET/POST',
                argv: {
                    uid: null
                },
                value: function (request, response, chain){
                    var _user = null;
                    this.beginTransaction()
                        .query("select * from zn_plugin_admin_user where id={0};".format(request.getValue('uid')))
                        .query('update login time', function (sql, rows){
                            if(rows.length){
                                _user = rows[0];
                                return "update zn_plugin_admin_user set last_login_time=now() where id={0};".format(_user.id);
                            }else {
                                return response.error('用户名或密码错误'), -1;
                            }
                        }, function (err){
                            if(err){
                                response.error(err);
                            }else {
                                _user.password = null;
                                delete _user.password;
                                request.setSession(_user);
                                response.success(_user);
                            }
                        }).commit();
                }
            },
            getUserRightsMenus: {
                method: 'GET/POST',
                value: function (request, response, chain){
                    var _pid = 2;
                    if(!!!request.getSessionValueByKey('id')){
                        return response.error('Session过期, 请重新登录!');
                    }
                    this.collection('ZNPluginAdminMenu').select({
                        fields: ['id', 'zn_tree_pid','zn_title','url','icon'],
                        order: {
                            zn_tree_order: 'asc'
                        },
                        where: [
                            "locate('," + _pid + ",', zn_tree_parent_path)<>0",
                            " and " + zn.sql.rights()
                        ]
                    }).then(function (data){
                        response.success(zn.data.arrayToTree(data, { pid: 'zn_tree_pid' }));
                    }, function (err){
                        response.error(err);
                    });
                }
            },
            getSession: {
                method: 'GET',
                value: function (request, response, chain){
                    response.success(request.getSession());
                }
            },
            updateUser: {
                method: 'GET/POST',
                argv: {
                    data: null,
                    userId: null
                },
                value: function (request, response, chain){
                    this.collection('ZNPluginAdminUser')
                        .update(request.getValue('data'), {
                            id: request.getValue('userId')
                        }).then(function (){
                            response.success('update success');
                        }, function (err){
                            response.error(err);
                        });
                }
            },
            getUserAvatar: {
                method: 'GET/POST',
                argv: {
                    userId: null
                },
                value: function (request, response, chain){
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: "zn_plugin_admin_user",
                            fields: 'avatar_img',
                            where: {
                                id: request.getValue('userId')
                            }
                        }), null, function (err, rows){
                            if(err){
                                response.error('未查到该用户');
                            }else {
                                response.success(_user);
                            }
                        })
                        .commit();
                }
            },
            getAllUser: {
                method: 'GET/POST',
                value: function (request, response, chain){
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: "zn_plugin_admin_user",
                            fields: 'id as value, name as text, first_char, avatar_img',
                            where: 'zn_deleted=0'
                        }), null, function (err, rows){
                            if(err){
                                response.error(err);
                            }else {
                                response.success(rows);
                            }
                        })
                        .commit();
                }
            },
            findUserById: {
                method: 'GET/POST',
                argv: {
                    userId: null
                },
                value: function (request, response, chain){
                    var _user = null;
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: "zn_plugin_admin_user",
                            fields: 'id, name, agents, zn_plugin_admin_convert_users(agents) as agents_convert, role_ids, pin_yin, pin_yin_first_char, first_char, email, phone, address, avatar_img, last_login_time, zn_create_time',
                            where: {
                                id: request.getValue('userId')
                            }
                        }))
                        .query("select role info", function (sql, rows){
                            if(rows.length){
                                _user = rows[0];
                                var _roleId = _user.role_ids;
                                if(_roleId[0] == ','){
                                    _roleId = '0' + _roleId;
                                }
                                if(_roleId[_roleId.length-1] == ','){
                                    _roleId = _roleId + '0';
                                }
                                return "select type, zn_title from zn_plugin_admin_role where id in (" + _roleId + ")";
                            }else {
                                return response.error('未查到该用户'), false;
                            }
                        }, function (err, rows){
                            if(err){
                                response.error('未查到该用户');
                            }else {
                                _user.roles = rows;
                                response.success(_user);
                            }
                        })
                        .commit();
                }
            },
            findUsersByChars: {
                method: 'GET/POST',
                argv: {
                    chars: null
                },
                value: function (request, response, chain){
                    var _chars = request.getValue("chars").split(','), _temps = [];
                    _chars.map(function (char){
                        if(char){
                            _temps.push("'"+char+"'");
                        }
                    });
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: "zn_plugin_admin_user",
                            fields: 'id as value, name as text, avatar_img, first_char',
                            where: "first_char in ("+_temps.join(',')+")"
                        }), null, function (err, rows){
                            if(err){
                                response.error(err);
                            }else {
                                response.success(rows);
                            }
                        })
                        .commit();
                }
            }
        }
    });

});
