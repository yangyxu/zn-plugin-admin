zn.define(function () {

    return zn.Model("zn_plugin_admin_menu_table", {
        mixins: [
            zn.db.common.model.Base,
            zn.db.common.model.Rights,
            zn.db.common.model.DefineTable
        ],
        properties: {
            zn_plugin_workflow_instance_id: {
                value: null,
                type: ['int', 11],
                default: 0
            },
            zn_plugin_admin_menu_id: {
                value: null,
                type: ['int', 11],
                default: 0
            }
        }
    });

})
