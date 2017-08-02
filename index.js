
var through2 = require('through2')
  , optimizeJS = require('optimize-js')
;

function optimizify (file, options) {
    options = options || {};
    var filter = options.filter;
    if (typeof filter === 'string') { filter = new RegExp(filter); }
    if (filter && !filter.test(file)) return through2();

    return through2(
      { objectMode: true },
      function (chunk, encoding, cb) {
        return cb(null, optimizeJS(chunk.toString()));
    });
}
optimizify.configure = function (options) {
    return function (file) {
        return optimizify(file, options);
    };
};
module.exports = optimizify;
