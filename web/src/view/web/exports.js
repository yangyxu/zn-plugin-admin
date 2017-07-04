module.exports = zn.arrayValueToObject([
    'Menu',
    'MyInfo',
    'Project',
    'Role',
    'User',
    'UserInfo',
    'UserLog',
    'UsersForRoles',
    'Var'
], function (value, index){
    return require('./'+value+'.js');
});
