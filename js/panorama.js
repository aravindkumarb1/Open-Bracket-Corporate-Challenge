var THREE = require('three-js')();
require('./device-orientation-controls.js')(THREE);

module.exports = function(configurator) {

    var container, camera, scene, renderer, controls, config;

    config = configurator();

    var animate = function(){
        config = configurator();
        window.requestAnimationFrame( animate );
        controls.update();
        renderer.render(scene, camera);
    };

    container = document.getElementById( config.elementId );

    camera = new THREE.PerspectiveCamera(75, config.height / config.height, 1, 1100);

    controls = new THREE.DeviceOrientationControls( camera );

    scene = new THREE.Scene();

    var geometry = new THREE.SphereGeometry( 500, 16, 8 );
    geometry.scale( - 1, 1, 1 );

    var material = new THREE.MeshBasicMaterial( {
        map: new THREE.TextureLoader().load( config.image )
    } );

    var mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize(config.width, config.height);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = parseInt(config.position.top) + 'px';
    renderer.domElement.style.left = parseInt(config.position.left) + 'px';
    container.appendChild(renderer.domElement);

    var element = document.createElement( 'img' );
    element.src = '/assets/chcs.svg';
    element.style.position = 'absolute';
    element.style.top = 0;
    element.style.left = parseInt(config.position.left) + 'px';
    element.style.margin = '2px';
    container.appendChild(element);

    window.addEventListener('resize', function() {
        config = configurator();
        camera.aspect = config.width / config.height;
        camera.updateProjectionMatrix();
        renderer.setSize( config.width, config.height );
        renderer.domElement.style.top = parseInt(config.position.top) + 'px';
        renderer.domElement.style.left = parseInt(config.position.left) + 'px';
    }, false);

    animate();

};