var _exports = {};
['global', 'basic', 'input', 'model'].forEach(function (path, index) {
    path = './' + path + '/index.js';
    zn.overwrite(_exports, require(path));
});

_exports.getToken = function () {
    return zn.react.session.jsonKeyValue("WEB_LOGIN_SESSION");
};

module.exports = _exports;