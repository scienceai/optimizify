
var assert = require('assert')
  , join = require('path').join
  , browserify = require('browserify')
  , optimizify = require('..')
;

describe('Transformation', function () {
  var expected;
  before('prepare the expected output', function (done) {
    var b = browserify();
    b.add(join(__dirname, 'fixtures/transformed.js'));
    b.bundle(function (err, bundled) {
      expected = bundled.toString('utf8');
      done();
    });
  })
  it('transforms simple code', function (done) {
    var b = browserify();
    b.add(join(__dirname, 'fixtures/untransformed.js'));
    b.transform(optimizify);
    b.bundle(function (err, bundled) {
      assert.ifError(err);
      assert.equal(bundled.toString('utf8'), expected, 'transform was applied');
      done();
    });
  });
});
