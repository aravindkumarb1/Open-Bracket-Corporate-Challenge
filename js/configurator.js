module.exports = function (elementId, viewport, img, position) {
    return {
        elementId: elementId,
        width: viewport.innerWidth / 2,
        height: viewport.innerHeight,
        position: {
            top: 0,
            left: position === 'left' ? 0 : viewport.innerWidth / 2
        },
        image: img
    };
};