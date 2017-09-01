module.exports = zn.arrayValueToObject([
    'NavigationBar',
    'UserSessionInfo'
], function (value, index){
    return require('./'+value+'.js');
});
