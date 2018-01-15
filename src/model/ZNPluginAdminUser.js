zn.define(['node:chinese-to-pinyin'], function (pinyin) {

    var model = zn.db.common.model;

    return zn.Model("zn_plugin_admin_user", {
        mixins: [
            model.Base
        ],
        properties: {
            _id: {
                value: null,
                type: ['varchar', 100],
                default: ''
            },
            zn_plugin_wechat_open_id: {
                value: null,
                type: ['varchar', 100],
                default: ''
            },
            name: {
                value: null,
                type: ['varchar', 100],
                default: ''
            },
            password: {
                value: null,
                type: ['varchar', 100],
                default: ''
            },
            pin_yin: {
                value: null,
                type: ['varchar', 20],
                get: function (name, prop, values){
                    if(values.name){
                        return pinyin(values.name, { noTone: true, filterChinese: true });
                    }else {
                        return '';
                    }
                }
            },
            pin_yin_first_char: {
                value: null,
                type: ['varchar', 20],
                get: function (name, prop, values){
                    if(values.name){
                        var _firsts = [];
                        zn.each(pinyin(values.name, {
                            noTone: true,
                            filterChinese: true
                        }).split(' '), function (value, index){
                            _firsts.push(value[0].toUpperCase());
                        });

                        return _firsts.join('');
                    }else {
                        return '';
                    }
                }
            },
            first_char: {
                value: null,
                type: ['varchar', 2],
                get: function (name, prop, values){
                    if(values.name){
                        return pinyin(values.name, {
                            noTone: true, filterChinese: true
                        })[0].toUpperCase();
                    }else {
                        return '';
                    }
                }
            },
            role_ids: {
                value: null,
                type: ['varchar', 500],
                convert: 'zn_plugin_admin_convert_roles({})',
                default: ','
            },
            agents: {
                value: null,
                type: ['varchar', 500],
                convert: 'zn_plugin_admin_convert_users({})',
                default: ','
            },
            email: {
                value: null,
                type: ['varchar', 50],
                default: ''
            },
            phone: {
                value: null,
                type: ['varchar', 20],
                default: ''
            },
            address: {
                value: null,
                type: ['varchar', 250],
                default: ''
            },
            avatar_img: {
                value: null,
                type: ['varchar', 250],
                default: ''
            },
            attachments: {
                value: null,
                type: ['varchar', 5000],
                default: ','
            },
            last_login_time: {
                value: null,
                type: ['datetime'],
                format: "date_format({},'%Y-%c-%d %h:%i:%s')",
                default: null
            }
        }
    });

})
