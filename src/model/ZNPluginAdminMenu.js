zn.define(function () {

    return zn.Model("zn_plugin_admin_menu", {
        mixins: [
            zn.db.common.model.Base,
            zn.db.common.model.Tree,
            zn.db.common.model.Rights
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
