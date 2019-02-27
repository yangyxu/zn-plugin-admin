"use strict";

module.exports = zn.arrayValueToObject(['Base', 'Config', 'Menu', 'MenuPage', 'Role', 'Var', 'UsersForRoles'], function (value, index) {
  return require('./' + value + '.js');
});