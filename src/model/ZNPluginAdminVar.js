zn.define(function () {

    return zn.Model("zn_plugin_admin_var", {
        mixins: [
            zn.db.common.model.Base,
            zn.db.common.model.Tag,
            zn.db.common.model.Tree,
            zn.db.common.model.Rights
        ],
        properties: {
            _id: {
                value: null,
                type: ['varchar', 50],
                default: ''
            },
            _key: {
                value: null,
                type: ['varchar', 200],
                default: ''
            },
            _value: {
                value: null,
                type: ['varchar', 2000],
                default: ''
            },
            zn_plugin_admin_menu_id: {
                value: null,
                type: ['int', 11],
                default: 0
            },
            type: {
                value: null,
                type: ['int', 11],
                default: 0    //0: 分类, 1: 常量 const, 2: 标签 tag, 3: 按钮 button
            },
            icon: {
                value: null,
                type: ['varchar', 100],
                default: ''
            },
            img: {
                value: null,
                type: ['varchar', 100],
                default: ''
            },
            url: {
                value: null,
                type: ['varchar', 100],
                default: ''
            },
            path: {
                value: null,
                type: ['varchar', 100],
                default: ''
            }
        }
    });

})
