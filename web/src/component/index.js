module.exports = zn.arrayValueToObject([
    'LetterSelector',
    'RightsSetting',
    'RoleSearcher',
    'UserSearcher',
    'BaseModelView',
    'TreeModelView',
    'BaseBusinessView',
    'MasterSlave',
    'Slave'
], function (value, index){
    return require('./'+value+'.js');
});
