zn.define([
    './src/service/index.js',
    './src/util/index.js'
], function (services, utils){

    zn.plugin.admin = {};
    zn.plugin.admin.util = utils;
    zn.plugin.admin.service = services;

    return {
        deploy: 'znadmin',
        models: '/src/model/',
        controllers: '/src/controller/'
    }
});
