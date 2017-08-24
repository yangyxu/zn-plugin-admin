zn.define(['node:chinese-to-pinyin'],function (pinyin) {

    return zn.Controller('user',{
        methods: {
            logout: {
                method: 'GET/POST',
                value: function (request, response, chain){
                    var _user = request.session.getItem('@AdminUser');
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
                    this.collection('ZNPluginAdminUser').selectOne({
                        where: request.getValue()
                    }).then(function (user){
                        if(user){
                            request.session.setItem('@AdminUser', user);
                            response.success(user);
                            this.collection('ZNPluginAdminUser').update({
                                updates: {
                                    last_login_time: '{now()}'
                                },
                                where: {
                                    id: user.id
                                }
                            });
                        } else {
                            response.error('用户名或密码不对');
                        }
                    }.bind(this), function (err){
                        response.error(JSON.stringify(err));
                    });
                }
            },
            getUserRightsMenus: {
                method: 'GET/POST',
                value: function (request, response, chain){
                    var _pid = 2;
                    this.collection('ZNPluginAdminMenu').select({
                        fields: ['id', 'zn_tree_pid','zn_title','url','icon'],
                        order: {
                            zn_tree_order: 'asc'
                        },
                        where: [
                            "locate('," + _pid + ",', zn_tree_parent_path)<>0"
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
                    response.success(request.session.getItem('@AdminUser'));
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
