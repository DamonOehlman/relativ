var test = require('tape');
var relativ = require('../');
var transform;
var MAXVAL = Math.pow(2, 16) - 1;

test('create our transformer using [0, 0, 800, 600]', function(t) {
  t.plan(1);
  transform = relativ([0, 0, 800, 600], MAXVAL);
  t.equal(typeof transform, 'function');
});

test('transform [0,0]', function(t) {
  t.plan(1);
  t.deepEqual(transform([0, 0]), [0, 0]);
});

test('transform [800,600]', function(t) {
  t.plan(1);
  t.deepEqual(transform([800, 600]), [MAXVAL, MAXVAL]);
});

test('transform [400,300]', function(t) {
  t.plan(1);
  t.deepEqual(transform([400, 300]), [MAXVAL >> 1, MAXVAL >> 1]);
});
