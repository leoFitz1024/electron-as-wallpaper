
/**
 * 计算显示器位置x偏移
 */
exports.getBoundXOffset = function getBoundXOffset(allDisplays) {
    let minX = 0;
    let minY = 0;
    allDisplays.forEach(display => {
        const bounds = display.bounds
        if (bounds.x < minX) {
            minX = bounds.x;
        }
        if (bounds.y < minY) {
            minY = bounds.y;
        }
    })
    return {
        offsetX: Math.abs(minX),
        offsetY: Math.abs(minY)
    }
}
