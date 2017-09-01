module.exports = zn.arrayValueToObject(['Info', 'List', 'LoginLog'], function (value, index) {
    return require('./' + value + '.js');
});