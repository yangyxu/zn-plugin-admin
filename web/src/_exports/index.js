var _exports = {},
    _subs = {},
    _path = null,
    _export = null;

var _data = ['devtool', 'my', 'project','setting','user'];
for(var i = 0, _len = _data.length; i < _len; i++){
    _path = './' + _data[i] + '/index.js';
    _export = require(_path);
    for(var key in _export){
        _subs[('/znpluginadmin.' + path + '.' + key).toLowerCase()] = _export[key];
    }
}


['Login'].forEach(function (path){
    _path = './' + path;
    _exports[('/' + path).toLowerCase()] = require(_path);
}.bind(this));

_subs['/'] = require('./Main.js');
_exports['/main'] = _subs;

module.exports = _exports;
