var pkg = require('./../package.json');
module.exports = function (elementId, viewport, img, position) {
    return function() {
        return {
            elementId: elementId,
            width: viewport.innerWidth / 2,
            height: viewport.innerHeight,
            position: {
                top: 0,
                left: position === 'left' ? 0 : viewport.innerWidth / 2
            },
            image: img,
            displayInfo: position === 'left',
            description: pkg.description + ' - ' + pkg.version
        };
    };
};