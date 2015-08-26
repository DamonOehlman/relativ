module.exports = function(el) {
  var rect = el && el.getBoundingClientRect();
  var targetX = 0;
  var targetY = 0;
  var targetWidth = 0;
  var targetHeight = 0;
  var scaleX = 1;
  var scaleY = 1;

  // get the width and height from the client bounding rect
  targetWidth = rect ? rect.width : 0;
  targetHeight = rect ? rect.height : 0;

  // Use the bounding rects left & top
  targetX = rect ? rect.left : 0;
  targetY = rect ? rect.top : 0;

  // Calculate the scale factors
  scaleX = el ? targetWidth / el.offsetWidth : 0;
  scaleY = el ? targetHeight / el.offsetHeight : 0;

  return [targetX, targetY, targetWidth, targetHeight, scaleX, scaleY];
};