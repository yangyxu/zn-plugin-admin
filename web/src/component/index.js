module.exports = zn.arrayValueToObject([
    'RightsSetting',
    'RoleSearcher',
    'UserSearcher'
], function (value, index){
    return require('./'+value+'.js');
});
