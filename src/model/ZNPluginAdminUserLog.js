zn.define(function () {

    return zn.Model("zn_plugin_admin_user_log", {
        mixins: [
            zn.db.common.model.Base
        ],
        properties: {
            user_id: {
                value: null,
                type: ['int', 11],
                convert: 'zn_plugin_admin_convert_user({})'
            },
            ip_address: {
                value: null,
                type: ['varchar', 20],
                default: ''
            },
            type: {
                value: null,
                type: ['varchar', 10],
                default: ''   //login: 登录， logout: 登出, system: 系统内操作
            }
        }
    });

})
