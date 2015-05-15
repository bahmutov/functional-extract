// @generated
(function (root, factory) {
  /* global define */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  }
  if (typeof global === 'object') {
    // Node, assumes that the factory exports something
    
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
  
function extract(picks, from) {
  var result = {};
  Object.keys(picks).forEach(function (key) {
    if (typeof picks[key] === 'function') {
      result[key] = picks[key](from);
    } else {
      result[key] = picks[key]; // A
    }
  });
  return result;
}

module.exports = extract;

}));
