zn.plugin.admin = require('./component/index.js');
zn.deepEachObject({}, function (value) {
  return require(value);
});
module.exports = zn.react.extendPath('/zn.plugin.admin', require('./exports/index.js'));