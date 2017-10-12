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
                        .query("select * from zn_plugin_admin_user where (name='{0}' or email='{0}') and password='{1}';".format(request.getValue('name'), request.getValue('password')))
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
                    this.collection('ZNPluginAdminUser').update({
                        updates: request.getValue('data'),
                        where: {
                            id: request.getValue('userId')
                        }
                    }).then(function (){
                        response.success('update success');
                    }, function (err){
                        response.error(err);
                    });
                }
            },
            findUserById: {
                method: 'GET/POST',
                argv: {
                    userId: null
                },
                value: function (request, response, chain){
                    this.collection('ZNPluginAdminUser').select({
                        where: {
                            id: request.getValue('userId')
                        }
                    }).then(function (data){
                        response.success(data[0]);
                    }, function (err){
                        response.error(err);
                    });
                }
            }
        }
    });

});
