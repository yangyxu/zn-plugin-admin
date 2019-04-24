zn.define(function () {

    var model = zn.db.common.model;

    return zn.Model("zn_plugin_admin_menu_table_field", {
        mixins: [
            model.Base,
            model.Rights
        ],
        properties: {
            field_type: {
                value: null,
                type: ['varchar', 100],
                default: ''
            },
            field_convert: {
                value: null,
                type: ['varchar', 50],
                default: ''
            },
            field_default: {
                value: null,
                type: ['varchar', 200],
                default: ''
            },
            field_detail: {
                value: null,
                type: ['varchar', 200],
                default: ''
            },
            is_hidden: {
                value: null,
                type: ['int', 11],
                default: 0
            },
            var_id: {
                value: null,
                type: ['int', 11],
                default: 0
            },
            menu_id: {
                value: null,
                type: ['int', 11],
                default: 0
            },
            table_id: {
                value: null,
                type: ['int', 11],
                default: 0
            },
            title: {
                value: null,
                type: ['varchar', 100],
                default: ''
            },
            name: {
                value: null,
                type: ['varchar', 100],
                default: ''
            },
            type: {
                value: null,
                type: ['varchar', 100],
                default: ''
            },
            width: {
                value: null,
                type: ['int', 11],
                default: null
            },
            required: {
                value: null,
                type: ['int', 4],
                default: 0
            },
            data: {
                value: null,
                type: ['varchar', 2000],
                default: ''
            },
            props: {
                value: null,
                type: ['varchar', 2000],
                default: ''
            },
            attrs: {
                value: null,
                type: ['varchar', 2000],
                default: ''
            }
        }
    });

})
