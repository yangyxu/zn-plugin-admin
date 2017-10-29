module.exports = zn.arrayValueToObject(['model'], function (value, index) {
    return require('./' + value + '.js');
});