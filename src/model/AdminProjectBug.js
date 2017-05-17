zn.define(function () {

    var model = zn.db.common.model;

    return zn.Model("zn_admin_project_bug", {
        mixins: [
            model.Base,
            model.Tag,
            model.Rights
        ],
        properties: {
            projectId: {
                value: null,
                type: ['int', 11],
                default: '0'
            },
            title: {
                value: null,
                type: ['varchar', 500],
                default: ''
            },
            version: {
                value: null,
                type: ['varchar', 50],
                default: ''
            },
            priority: {
                value: null,
                type: ['int', 11],
                default: '0'    //0: 分类、目录, 1: 文件
            },
            owner: {
                value: null,
                type: ['int', 11],
                default: '0'
            },
            state: {
                value: null,
                type: ['int', 11],
                default: '0'
            },
            type: {
                value: null,
                type: ['int', 11],
                default: '0'
            },
            version: {
                value: null,
                type: ['varchar', 50],
                default: ''
            },
            module: {
                value: null,
                type: ['varchar', 100],
                default: ''
            },
            description: {
                value: null,
                type: ['LONGTEXT'],
                default: ''
            },
            solution: {
                value: null,
                type: ['LONGTEXT'],
                default: ''
            },
            files: {
                value: null,
                type: ['varchar', 3000],
                default: ','
            },
            beginTime: {
                value: null,
                type: ['datetime'],
                default: null
            },
            endTime: {
                value: null,
                type: ['datetime'],
                default: null
            },
            finishTime: {
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
