"use strict";

var _exports = {};
zn.overwrite(_exports, require('./global/index.js'));
zn.overwrite(_exports, require('./basic/index.js'));
zn.overwrite(_exports, require('./input/index.js'));
zn.overwrite(_exports, require('./model/index.js'));

_exports.getToken = function () {
  return zn.react.session.jsonKeyValue("WEB_LOGIN_SESSION");
};

module.exports = _exports;