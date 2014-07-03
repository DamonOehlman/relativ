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

test('unpack [0, 0]', function(t) {
  t.plan(1);
  t.deepEqual(transform.unpack([0, 0]), [100, 100]);
});

test('unpack [MAXVAL, MAXVAL]', function(t) {
  t.plan(1);
  t.deepEqual(transform.unpack([MAXVAL, MAXVAL]), [900, 700]);
});

test('unpack [MAXVAL / 2, MAXVAL / 2]', function(t) {
  t.plan(1);
  t.deepEqual(transform.unpack([MAXVAL/2, MAXVAL/2]), [500, 400]);
});
