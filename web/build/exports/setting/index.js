module.exports = zn.arrayValueToObject(['Base', 'Config', 'Menu', 'Role', 'Var', 'UsersForRoles'], function (value, index) {
    return require('./' + value + '.js');
});