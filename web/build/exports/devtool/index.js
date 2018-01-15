module.exports = zn.arrayValueToObject(['DataModelManager', 'PageDebugger', 'ServerManager'], function (value, index) {
    return require('./' + value + '.js');
});