module.exports = zn.arrayValueToObject(['Info'], function (value, index) {
    return require('./' + value + '.js');
});