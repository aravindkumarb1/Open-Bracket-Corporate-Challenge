var configurator = require('./js/configurator.js'),
    panorama = require('./js/panorama.js');

window.addEventListener('load', function() {
   var img = '/assets/pan_2.jpg';
   panorama(configurator('vp-l', window, img, 'left'));
   panorama(configurator('vp-r', window, img, 'right'));
});