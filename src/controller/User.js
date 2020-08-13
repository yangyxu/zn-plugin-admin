zn.define(['node:chinese-to-pinyin'],function (pinyin) {

    var getClientIP = function (req) {
        return '127.0.0.1';
        return req.headers['x-real-ip'] || req.headers['x-forwarded-for'] ||
            req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    }

    return zn.Controller('user',{
        methods: {
            logout: {
                method: 'GET/POST',
                value: function (request, response, chain){
                    var _user = request.getSession();
                    if(_user){
                        this.beginTransaction()
                            .query(zn.sql.insert({
                                table: 'zn_plugin_admin_user_log',
                                values: {
                                    zn_id: zn.uuid(),
                                    user_id: _user.id,
                                    ip_address: getClientIP(request),
                                    type: 'logout'
                                }
                            }), null, function (err){
                                if(err){
                                    response.error('注销失败');
                                }else {
                                    request.session.clear();
                                    response.success('注销成功');
                                }
                            })
                            .commit();
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
                                switch (_user.status) {
                                    case 0:
                                        return response.error('账户还未激活'), false;
                                    case -1:
                                        return response.error('账户被锁定, 请联系系统管理员'), false;
                                    case 1:
                                        return zn.sql.update({
                                            table: 'zn_plugin_admin_user',
                                            updates: 'last_login_time=now()',
                                            where: { id: _user.id }
                                        }) + zn.sql.insert({
                                            table: 'zn_plugin_admin_user_log',
                                            values: {
                                                zn_id: zn.uuid(),
                                                user_id: _user.id,
                                                ip_address: getClientIP(request),
                                                type: 'login'
                                            }
                                        });
                                    default:
                                        return response.error('账户未知状态'), false;
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
            emailActive: {
                method: 'GET/POST',
                argv: {
                    znid: null,
                    url: null
                },
                value: function (request, response, chain){
                    var _user = null,
                        _config = null,
                        _self = this,
                        _url = decodeURIComponent(request.getValue('url'));;
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: 'zn_plugin_admin_user',
                            where: { zn_id: request.getValue('znid') }
                        }) + zn.sql.select({
                            table: 'zn_plugin_admin_config',
                            where: {_key: 'company_title', _id: 'zn.plugin.admin.base'}
                        }))
                        .query('update user password', function (sql, rows){
                            _user = rows[0][0];
                            _config = rows[1][0];
                            if(_user){
                                if(_user.password&&_user.status==1){
                                    _user.actived = true;
                                    return response.success(_user), false;
                                }
                                var _password = zn.util.randomNumbers(8);
                                zn.plugin.admin.QQMailTransport.sendMail({
                                    from: 'jimxyy@foxmail.com',
                                    to: _user.email,
                                    subject: '【'+_config._value+'】系统账号激活通知',
                                    html: '您好，' + _user.name +
                                    ', <br /><br />欢迎使用<span style="color:#e27580;font-weight:bold;">'+_config._value+'</span>管理平台, 账号：'+_user.email+', 密码：'+_password+'。请单击<a href="' + _url + '#/zn.plugin.admin/login">登录</a>进行激活。<br /><br />系统管理员<br />'+_config._value
                                }, function (error, info){
                                    if (error) {
                                        zn.error('邮件发送失败：' + error.message);
                                    }else {
                                        zn.error('邮件发送成功');
                                    }
                                });
                                return zn.sql.update({
                                    table: 'zn_plugin_admin_user',
                                    updates: {
                                        status:1,
                                        password: _password
                                    },
                                    where: { id: _user.id }
                                });
                            }else {
                                return response.error('为查找到用户'), false;
                            }
                        }, function (err){
                            if(err){
                                response.error(err);
                            }else {
                                response.success(_user);
                            }
                        }).commit();
                }
            },
            active: {
                method: 'GET/POST',
                argv: {
                    type: null,
                    url: null,
                    znid: null
                },
                value: function (request, response, chain){
                    var _user = null,
                        _config = null,
                        _self = this,
                        _type = request.getValue('type'),
                        _url = decodeURIComponent(request.getValue('url'));
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: 'zn_plugin_admin_user',
                            where: { zn_id: request.getValue('znid') }
                        }) + zn.sql.select({
                            table: 'zn_plugin_admin_config',
                            where: {_key: 'company_title', _id: 'zn.plugin.admin.base'}
                        }))
                        .query('update login time', function (sql, rows){
                            _user = rows[0][0];
                            _config = rows[1][0];
                            if(_user){
                                if(_type=='email'){
                                    return zn.plugin.admin.QQMailTransport.sendMail({
                                        from: 'jimxyy@foxmail.com',
                                        to: _user.email,
                                        subject: '【'+_config._value+'】系统账号激活',
                                        html: '您好，' + _user.name +
                                        ', <br /><br />欢迎使用<span style="color:#e27580;font-weight:bold;">'+_config._value+'</span>系统管理平台, 您的账号还未激活。请单击<a href="' + _url + '#/zn.plugin.admin/useractive?znid='+
                                        _user.zn_id+'">激活链接</a>进行激活。<br /><br />系统管理员<br />' + _config._value
                                    }, function (error, info){
                                        if (error) {
                                            zn.error('邮件发送失败：' + error.message);
                                            response.error(error);
                                        }else {
                                            response.success(info);
                                        }
                                    }), false;
                                } else if(_type=='sms' && zn.smsClient){
                                    return zn.smsClient.sendSMS({
                                        PhoneNumbers: _user.phone,
                                        SignName: '腾麟传媒',
                                        TemplateCode: 'SMS_125029840',
                                        TemplateParam: '{"phone":"'+_user.phone+'", "password":"'+zn.util.randomNumbers(8)+'"}'
                                    }).then(function (res) {
                                        if (res.Code === 'OK') {
                                            //处理返回参数
                                            console.log(res);
                                            _self.query(zn.sql.update({
                                                table: 'zn_plugin_admin_user',
                                                updates: { status: 1 },
                                                where: {
                                                    zn_id: request.getValue('znid')
                                                }
                                            }));
                                            response.success('发送成功');
                                        }else {
                                            console.error(res);
                                            response.error('发送失败');
                                        }
                                    }.bind(this), function (err) {
                                        console.error(err);
                                        response.error('发送失败');
                                    }), false;
                                }
                            }else {
                                return response.error('为查找到用户'), false;
                            }
                        }, function (err){
                            if(err){
                                response.error(err);
                            }else {
                                response.success("发送成功");
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
            addUser: {
                method: 'GET/POST',
                argv: {
                    values: null
                },
                value: function (request, response, chain){
                    var _data = request.getValue('values');
                    _data.name = _data.name.trim();
                    this.beginTransaction()
                        .query(zn.sql.select({
                            table: "zn_plugin_admin_user",
                            fields: 'id',
                            where: "name='" + _data.name + "'"
                        }))
                        .query('insert user', function (sql, data){
                            if(data[0]){
                                return response.error('用户名已经存在, 请重新输入'), false;
                            }else{
                                return zn.sql.insert({
                                    table: 'zn_plugin_admin_user',
                                    values: _data
                                });
                            }
                        }, function (err, rows){
                            if(err){
                                response.error(err.message);
                            }else {
                                response.success(rows);
                            }
                        })
                        .commit();
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
                            fields: 'id, name, zn_plugin_wechat_open_id, agents, zn_plugin_admin_convert_users(agents) as agents_convert, role_ids, pin_yin, pin_yin_first_char, first_char, email, qq, wechat, phone, address, avatar_img, last_login_time, zn_create_time',
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
