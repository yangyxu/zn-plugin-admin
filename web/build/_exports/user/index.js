module.exports = zn.arrayValueToObject(['Info', 'InfoEdit', 'List', 'LoginLog'], function (value, index) {
    return require('./' + value + '.js');
});