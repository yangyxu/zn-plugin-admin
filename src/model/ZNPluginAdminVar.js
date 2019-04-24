zn.define(function () {

    var model = zn.db.common.model;

    return zn.Model("zn_plugin_admin_var", {
        mixins: [
            model.Base,
            model.Tag,
            model.Tree,
            model.Rights
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
            menu_id: {
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
