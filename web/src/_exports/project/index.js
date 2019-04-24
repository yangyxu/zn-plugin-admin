module.exports = zn.arrayValueToObject([
    'Project'
], function (value, index){
    return require('./'+value+'.js');
});
