"use strict";

module.exports = zn.arrayValueToObject(['Dashboard', 'Info'], function (value, index) {
  return require('./' + value + '.js');
});