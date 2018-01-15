module.exports = zn.arrayValueToObject([
    'PageDebugger',
    'ServerManager'
], function (value, index){
    return require('./'+value+'.js');
});
