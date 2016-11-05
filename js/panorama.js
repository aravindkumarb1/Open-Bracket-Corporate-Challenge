var THREE = require('three-js')();
require('./device-orientation-controls.js')(THREE);

module.exports = function (configurator) {

    var container, camera, scene, renderer, controls, config;

    config = configurator();

    var animate = function () {
        config = configurator();
        window.requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    };

    container = document.getElementById(config.elementId);

    camera = new THREE.PerspectiveCamera(75, config.height / config.height, 1, 1100);

    controls = new THREE.DeviceOrientationControls(camera);

    scene = new THREE.Scene();

    var geometry = new THREE.SphereGeometry(500, 16, 8);
    geometry.scale(-1, 1, 1);

    var material = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(config.image)
    });

    var mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(config.width, config.height);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = parseInt(config.position.top) + 'px';
    renderer.domElement.style.left = parseInt(config.position.left) + 'px';
    container.appendChild(renderer.domElement);

    if(config.displayInfo) {
        var logoElement = document.createElement('img');
        logoElement.src = '/assets/chcs.svg';
        logoElement.style.position = 'absolute';
        logoElement.style.top = 0;
        logoElement.style.left = parseInt(config.position.left) + 'px';
        logoElement.style.margin = '2px';
        container.appendChild(logoElement);
        var viewTitle = document.createElement('div');
        viewTitle.innerText = config.description;
        viewTitle.style.fontFamily = 'verdana';
        viewTitle.style.color = '#fff';
        viewTitle.style.position = 'absolute';
        viewTitle.style.bottom = 0;
        viewTitle.style.left = 0;
        container.appendChild(viewTitle);
    }

    window.addEventListener('resize', function () {
        config = configurator();
        camera.aspect = config.width / config.height;
        camera.updateProjectionMatrix();
        renderer.setSize(config.width, config.height);
        renderer.domElement.style.top = parseInt(config.position.top) + 'px';
        renderer.domElement.style.left = parseInt(config.position.left) + 'px';
    }, false);

    animate();

};