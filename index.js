var panorama = require('./js/panorama.js');

window.addEventListener('load', function() {
   panorama({
      elementId: 'vp-l',
      width: window.innerWidth/2,
      height: window.innerHeight,
      position: {
         top: 0,
         left: 0
      }
   });
   panorama({
      elementId: 'vp-r',
      width: window.innerWidth/2,
      height: window.innerHeight,
      position: {
         top: 0,
         left: window.innerWidth/2
      }
   });
});