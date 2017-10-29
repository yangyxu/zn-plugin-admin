module.exports = zn.arrayValueToObject([
    'FormDesigner',
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
