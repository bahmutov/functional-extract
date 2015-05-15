// @generated from index.js
(function (%ROOT%, factory) {
  var m;
  if (typeof global === 'object') {
    // Node, assumes that the factory exports something
    %CJS_REQUIRES%
    factory(module);
    m = module;
  }
  /* global window */
  if (typeof window === 'object') {
    // Browser globals (root is window), give it fake
    // module and then register whatever the factory
    // the function put there
    m = {};
    factory(m);
    window.fe = m.exports;
  }
  if (typeof m.exports === 'object' ||
    typeof m.exports === 'function') {
    m.exports.VERSION = '%VERSION%';
    m.exports.GITREV = '%GITREV%';
  }
}(this, function(module) {
  %SRC%
}));
