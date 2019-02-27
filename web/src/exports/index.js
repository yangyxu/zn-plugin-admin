var _exports = {},
    _subs = {},
    _path = null,
    _export = null;

var _data = {
    devtool: require('./devtool/index.js'),
    my: require('./my/index.js'),
    project: require('./project/index.js'),
    setting: require('./setting/index.js'),
    user: require('./user/index.js')
};

Object.keys(_data).map(function (path){
    _export = _data[path];
    for(var key in _export){
        _subs[('/znpluginadmin.' + path + '.' + key).toLowerCase()] = _export[key];
    }
});


_data = {
    Login: require('./Login.js'),
    Main: require('./Main.js'),
    UserActive: require('./UserActive.js'),
}

Object.keys(_data).map(function (path){
    _path = './' + path + '.js';
    _exports[('/znpluginadmin.' + path).toLowerCase()] = _data[path];
});

//_subs['/'] = require('./Main.js');
//_exports['/main'] = _subs;

module.exports = [_subs, _exports];
