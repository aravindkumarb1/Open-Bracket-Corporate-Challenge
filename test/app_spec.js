var chai = require('chai');

describe('app', function () {
    var configurator = require('../js/configurator.js');
    it('configures the left/right view ports', function () {
        var config = configurator('el-1', {
            innerHeight: 100,
            innerWidth: 100
        }, 'foo.png', 'left');
        chai.assert(config.image === 'foo.png');
    });
});