zn.define(function () {

    var model = zn.db.common.model;

    return zn.Model("zn_plugin_admin_menu_table", {
        mixins: [
            model.Base,
            model.Rights
        ],
        properties: {
            has_generated: {
                value: null,
                type: ['int', 4],
                default: 0
            },
            menu_id: {
                value: null,
                type: ['int', 11],
                default: 0
            },
            parent_id: {
                value: null,
                type: ['int', 11],
                default: 0
            },
            table_name: {
                value: null,
                type: ['varchar', 100],
                default: ''
            },
            mixins: {
                value: null,
                type: ['varchar', 100],
                default: 'zn.db.common.model.Base'
            },
            zn_plugin_workflow_instance_id: {
                value: null,
                type: ['int', 11],
                default: 0
            }
        }
    });

})
