zn.define(function () {

    var model = zn.db.common.model;

    return zn.Model("zn_plugin_admin_menu", {
        mixins: [
            model.Base,
            model.Tag,
            model.Tree,
            model.Rights
        ],
        properties: {
            icon: {
                value: null,
                type: ['varchar', 50],
                default: ''
            },
            img: {
                value: null,
                type: ['varchar', 200],
                default: ''
            },
            url: {
                value: null,
                type: ['varchar', 200],
                default: ''
            },
            path: {
                value: null,
                type: ['varchar', 200],
                default: ''
            }
        }
    });

})
