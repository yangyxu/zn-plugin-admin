module.exports = zn.arrayValueToObject(['BaseModelView', 'TreeModelView', 'BaseBusinessView', 'MasterSlave', 'Slave'], function (value, index) {
    return require('./' + value + '.js');
});