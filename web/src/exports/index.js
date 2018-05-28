var _exports = {},
    _subs = {},
    _path = null,
    _export = null;

['devtool', 'my', 'project','setting','user'].forEach(function (path){
    _path = './' + path + '/index.js';
    _export = require(_path);
    for(var key in _export){
        _subs[('/znpluginadmin.' + path + '.' + key).toLowerCase()] = _export[key];
    }
});

['Login', 'Main', 'UserActive'].forEach(function (path){
    _path = './' + path;
    _exports[('/znpluginadmin.' + path).toLowerCase()] = require(_path);
});

//_subs['/'] = require('./Main.js');
//_exports['/main'] = _subs;

module.exports = [_subs, _exports];
