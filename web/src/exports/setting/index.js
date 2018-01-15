module.exports = zn.arrayValueToObject([
    'Base',
    'Config',
    'ConfigManager',
    'Menu',
    'MenuPage',
    'Role',
    'Var',
    'UsersForRoles'
], function (value, index){
    return require('./'+value+'.js');
});
