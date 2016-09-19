
# optimizify

Browserify transform for [optimize-js](https://github.com/nolanlawson/optimize-js).

This is just a simple transformation that applies optimize-js. See the documentation there about
what it does and how you should check whether this would be useful to you or not.

This is used as any browserify transform, apply it with `browserify.transform` in your
`package.json`, with the `-t` or `-g` flag on the CLI, with `b.transform()`…

_*IMPORTANT NOTE*_: in order for this to actually work, it needs to run _after_ Uglify.
