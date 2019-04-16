"use strict";

module.exports = zn.arrayValueToObject(['TreeModelView'], function (value, index) {
  return require('./' + value + '.js');
});