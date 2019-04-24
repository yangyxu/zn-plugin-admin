module.exports = zn.arrayValueToObject([
    'FontAwesomeIcons',
    'ColorPicker'
], function (value, index){
    return require('./'+value+'.js');
});
