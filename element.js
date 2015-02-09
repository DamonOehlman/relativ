module.exports = function(el) {
  return require('./')(require('./element-bounds')(el));
};
