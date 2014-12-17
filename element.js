module.exports = function(el) {
  var rect = el && el.getBoundingClientRect();
  var targetX = 0;
  var targetY = 0;
  var targetWidth = 0;
  var targetHeight = 0;

  // get the width and height from the client bounding rect
  targetWidth = rect ? rect.width : 0;
  targetHeight = rect ? rect.height : 0;

  // get the offset from offsetLeft and offsetTop
  targetX = 0;
  targetY = 0;
  while (el) {
    targetX += el.offsetLeft;
    targetY += el.offsetTop;

    el = el.offsetParent;
  }

  return require('./')([targetX, targetY, targetWidth, targetHeight]);
};
