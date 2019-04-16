zn.define(function () {

    return zn.Model("zn_plugin_admin_role", {
        mixins: [
            zn.db.common.model.Base,
            zn.db.common.model.Tag,
            zn.db.common.model.Tree
        ],
        properties: {
            _id: {
                value: null,
                type: ['varchar', 100],
                default: ''
            },
            owners: {
                value: null,
                type: ['varchar', 100],
                default: ','
            },
            type: {
                value: null,
                type: ['int', 11],
                default: 0  //0: 分类, 1: 部门, 2: 角色, 3: 临时数据
            }
        }
    });

})
