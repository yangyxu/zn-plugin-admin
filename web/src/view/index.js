module.exports = zn.arrayValueToObject([
    'Menu',
    'MyInfo',
    'Project',
    'Role',
    'User',
    'UserInfo',
    'UserLog',
    'Var'
], function (value, index){
    return require('./'+value+'.js');
});
