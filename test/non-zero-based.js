var test = require('tape');
var relativ = require('../');
var transform;
var MAXVAL = Math.pow(2, 16) - 1;

test('create our transformer using [100, 100, 800, 600]', function(t) {
  t.plan(1);
  transform = relativ([100, 100, 800, 600], MAXVAL);
  t.equal(typeof transform, 'function');
});

test('transform [100,100]', function(t) {
  t.plan(1);
  t.deepEqual(transform([100, 100]), [0, 0]);
});

test('transform [900,700]', function(t) {
  t.plan(1);
  t.deepEqual(transform([900, 700]), [MAXVAL, MAXVAL]);
});

test('transform [500,400]', function(t) {
  t.plan(1);
  t.deepEqual(transform([500, 400]), [MAXVAL >> 1, MAXVAL >> 1]);
});
