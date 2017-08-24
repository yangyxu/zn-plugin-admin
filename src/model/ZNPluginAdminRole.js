zn.define(function () {

    var model = zn.db.common.model;

    return zn.Model("zn_plugin_admin_role", {
        mixins: [
            model.Base,
            model.Tag,
            model.Tree
        ],
        properties: {
            _id: {
                value: null,
                type: ['varchar', 100],
                default: ''
            },
            type: {
                value: null,
                type: ['int', 11],
                default: 0  //0: 分类, 1: 部门, 2: 角色, 3: 临时数据
            }
        }
    });

})
