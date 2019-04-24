zn.define(function () {

    var model = zn.db.common.model;

    return zn.Model("zn_plugin_admin_menu", {
        mixins: [
            model.Base,
            model.Tree,
            model.Rights
        ],
        properties: {
            icon: {
                value: null,
                type: ['varchar', 50],
                default: '',
                title: '图标',
                inputType: ''
            },
            img: {
                value: null,
                type: ['varchar', 200],
                default: '',
                title: '图片'
            },
            url: {
                value: null,
                type: ['varchar', 200],
                default: '',
                title: '链接'
            },
            path: {
                value: null,
                type: ['varchar', 200],
                default: '',
                title: '路径'
            }
        }
    });

})
