zn.define(function () {

    return zn.Model("zn_plugin_admin_menu_table_field", {
        mixins: [
            zn.db.common.model.Base,
            zn.db.common.model.Rights,
            zn.db.common.model.DefineTableField
        ],
        properties: {
            zn_plugin_admin_menu_id: {
                value: null,
                type: ['int', 11],
                default: 0
            }
        }
    });

})
