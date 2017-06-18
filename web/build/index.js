zn.react.znadmin = require('./component/index.js');
zn.deepEachObject({}, function (value) {
  return require(value);
});
module.exports = zn.react.extendPath('/znadmin/', require('./page/index.js'));