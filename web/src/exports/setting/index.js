module.exports = zn.arrayValueToObject([
    'Base',
    'Menu',
    'Role',
    'Var',
    'UsersForRoles'
], function (value, index){
    return require('./'+value+'.js');
});
