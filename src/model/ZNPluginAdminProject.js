zn.define(function () {

    return zn.Model("zn_plugin_admin_project", {
        mixins: [
            zn.db.common.model.Base,
            zn.db.common.model.Tree,
            zn.db.common.model.Rights
        ],
        properties: {
            type: {
                value: null,
                type: ['int', 11],
                default: 0
            },
            status: {
                value: null,
                type: ['int', 11],
                default: 0
            },
            version: {
                value: null,
                type: ['varchar', 50],
                default: ''
            },
            priority: {
                value: null,
                type: ['int', 11],
                default: 0    //0: 分类、目录, 1: 文件
            },
            module: {
                value: null,
                type: ['varchar', 200],
                default: ''
            },
            files: {
                value: null,
                type: ['varchar', 2000],
                default: ','
            },
            description: {
                value: null,
                type: ['longtext']
            },
            begin_time: {
                value: null,
                type: ['datetime'],
                default: null
            },
            end_time: {
                value: null,
                type: ['datetime'],
                default: null
            },
            finished_time: {
                value: null,
                type: ['datetime'],
                default: null
            },
            workload: {
                value: null,
                type: ['float', 4],
                default: 0
            }
        }
    });
})
