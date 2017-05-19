var EXPORTS = {
    component: './component/index.js',
    view: './view/index.js',
    model: './model/index.js',
}, _EXPORTS = {};

var _temp = null;
for(var key in EXPORTS) {
    _temp = require(EXPORTS[key]);
    _EXPORTS[key] =_temp;
    for(var _tkey in _temp){
        _EXPORTS[_tkey] = _temp[_tkey];
    }
}

_EXPORTS.router = require('./router.js');
_EXPORTS.tools = require('./tools.js');

module.exports = _EXPORTS;
