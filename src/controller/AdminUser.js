zn.define(['node:chinese-to-pinyin'],function (pinyin) {

    return zn.Controller('user',{
        methods: {
            logout: {
                method: 'GET/POST',
                value: function (request, response, chain){
                    var _user = request.session.getItem('@AdminUser');
                    this.collection('AdminUserLog').insert({
                        userId: _user.id,
                        actionType: 1
                    }).then(function (){
                        request.session.clear();
                        request.success('注销成功');
                    }, function (){
                        request.error('注销失败');
                    });
                }
            },
            login: {
                method: 'GET/POST',
                argv: {
                    name: null,
                    password: null
                },
                value: function (request, response, chain){
                    this.collection('AdminUser').selectOne({
                        where: request.getValue()
                    }).then(function (user){
                        if(user){
                            request.session.setItem('@AdminUser', user);
                            response.success(user);
                            this.collection('AdminUser').update({
                                updates: {
                                    lastLoginTime: '{now()}'
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
                    this.collection('AdminUser').update({
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
                    this.collection('AdminUser').update({
                        updates: request.getValue('data'),
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
