// @generated
(function (%ROOT%, factory) {
  /* global define */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([%AMD_REQUIRES%], factory);
  }
  if (typeof global === 'object') {
    // Node, assumes that the factory exports something
    %CJS_REQUIRES%
    factory(module);
  }
  /* global window */
  if (typeof window === 'object') {
    // Browser globals (root is window), give it fake
    // module and then register whatever the factory
    // the function put there
    var m = {};
    factory(m);
    window.fe = m.exports;
  }
}(this, function(module) {
  %SRC%
}));
