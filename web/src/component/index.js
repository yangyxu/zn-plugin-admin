var _exports = {};
['global', 'basic', 'input', 'model'].forEach(function (path, index){
    path = './' + path + '/index.js';
    zn.overwrite(_exports, require(path));
});

module.exports = _exports;
