var _exports = {},
    _subs = {},
    _path = null,
    _export = null;

['my', 'project', 'setting', 'user'].forEach(function (path) {
    _path = './' + path + '/index.js';
    _export = require(_path);
    for (var key in _export) {
        _subs[('/znpluginadmin.' + path + '.' + key).toLowerCase()] = _export[key];
    }
});

['Login'].forEach(function (path) {
    _path = './' + path;
    _exports[('/' + path).toLowerCase()] = require(_path);
});

_subs['/'] = require('./Main.js');
_exports['/main'] = _subs;

module.exports = _exports;