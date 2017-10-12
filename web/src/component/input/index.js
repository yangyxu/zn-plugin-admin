module.exports = zn.arrayValueToObject([
    'FontAwesomeIcons'
], function (value, index){
    return require('./'+value+'.js');
});
