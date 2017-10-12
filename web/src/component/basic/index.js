module.exports = zn.arrayValueToObject([
    'LetterSelector',
    'ModelEditor',
    'NavigationBar',
    'RoleSelector',
    'TreeEditor',
    'TreeSelector',
    'UserSelector',
    'UserSessionInfo'
], function (value, index){
    return require('./'+value+'.js');
});
