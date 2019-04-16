zn.define(function () {

    return zn.Model("zn_plugin_admin_project_bug", {
        mixins: [
            zn.db.common.model.Base,
            zn.db.common.model.Tag,
            zn.db.common.model.Rights
        ],
        properties: {
            project_id: {
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
            owner: {
                value: null,
                type: ['int', 11],
                default: 0
            },
            state: {
                value: null,
                type: ['int', 11],
                default: 0
            },
            type: {
                value: null,
                type: ['int', 11],
                default: 0
            },
            module: {
                value: null,
                type: ['varchar', 100],
                default: ''
            },
            description: {
                value: null,
                type: ['longtext']
            },
            solution: {
                value: null,
                type: ['longtext']
            },
            files: {
                value: null,
                type: ['varchar', 3000],
                default: ','
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
