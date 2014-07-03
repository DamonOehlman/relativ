/**
  # relativ

  Given a target bounds (provided in the format of `[x, y, width, height]`)
  provide a relative value based on an input value.  By default the relative
  coordinates are provided in the range of `0..65535` but this can be
  configured.

  ## Example Usage

  To be completed.

**/

module.exports = function(bounds, max) {
  var minX = bounds[0];
  var minY = bounds[1];
  var width = bounds[2];
  var height = bounds[3];
  var maxX = minX + width;
  var maxY = minY + height;

  // initialise max to the default value if not provided
  max = max || (Math.pow(2, 16) - 1);

  return function(vec) {
    var relX = vec[0] - minX;
    var relY = vec[1] - minY;

    return [((relX / width) * max) | 0, ((relY / height) * max) | 0];
  };
};
