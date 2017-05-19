'use strict';

module.exports = zn.deepEachObject({
    'BaseModelView': './BaseModelView.js',
    'TreeModelView': './TreeModelView.js',
    'BaseBusinessView': './BaseBusinessView.js',
    'MasterSlave': './MasterSlave.js',
    'Slave': './Slave.js'
}, function (value) {
    return require(value);
});