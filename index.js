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

  function relative(val, min, size) {
    var rel = (val - min) / size;
    // Only allow negative and values > max if unconstrained
    if (rel > 1) rel = 1;
    if (rel < 0) rel = 0;
    return rel * max;
  }

  function pack(vec) {
    var relX = relative(vec[0], minX, width);
    var relY = relative(vec[1], minY, height);
    return [relX | 0, relY | 0];
  }

  function unpack(vec) {
    return [
      ((vec[0] / max * width) | 0),
      ((vec[1] / max * height) | 0)
    ];
  }

  function offset(vec) {
    return [ vec[0] + minX, vec[1] + minY];
  }

  // initialise max to the default value if not provided
  max = max || (Math.pow(2, 16) - 1);

  // patch the unpack and offset functions
  pack.unpack = unpack;
  pack.offset = offset;

  return pack;
};
