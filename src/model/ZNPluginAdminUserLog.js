zn.define(function () {

    var model = zn.db.common.model;

    return zn.Model("zn_plugin_admin_user_log", {
        mixins: [
            model.Base
        ],
        properties: {
            user_id: {
                value: null,
                type: ['int', 11],
                convert: 'zn_plugin_admin_convert_user({})'
            },
            ip_address: {
                value: null,
                type: ['varchar', 10],
                default: ''
            },
            address: {
                value: null,
                type: ['varchar', 250],
                default: ''
            },
            type: {
                value: null,
                type: ['int', 11],
                default: 0   //0: 登录， 1: 登出, 2: 系统内操作
            },
            _sql: {
                value: null,
                type: ['varchar', 250],
                default: ''
            }
        }
    });

})
