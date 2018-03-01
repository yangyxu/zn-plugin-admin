zn.define(function () {

    var model = zn.db.common.model;

    return zn.Model("zn_plugin_admin_user_message", {
        mixins: [
            model.Base
        ],
        properties: {
            from_user_id: {
                value: null,
                type: ['int', 11],
                default: 0
            },
            to_user_id: {
                value: null,
                type: ['int', 11],
                default: 0
            },
            level: {
                value: null,
                type: ['int', 11],
                default: 0
            },
            title: {
                value: null,
                type: ['varchar', 100],
                default: ''
            },
            content: {
                value: null,
                type: ['varchar', 500],
                default: ''
            },
            attachments: {
                value: null,
                type: ['varchar', 5000],
                default: ','
            },
            has_read: {
                value: null,
                type: ['int', 4],
                default: 0
            }
        }
    });

})
