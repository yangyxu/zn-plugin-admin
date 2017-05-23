module.exports = zn.react.loadPaths({
    component: './component/index.js',
    view: './view/index.js',
    model: './model/index.js',
    routers: './routers.js',
    tools: './tools.js'
}, function (path){
    return require(path);
});
