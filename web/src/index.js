zn.plugin.admin = require('./component/index.js');
zn.deepEachObject({}, function (value){ return require(value); });
module.exports = require('./exports/index.js');
