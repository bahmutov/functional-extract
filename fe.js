// @generated from index.js
(function (root, factory) {
  var m;
  if (typeof global === 'object') {
    // Node, assumes that the factory exports something
    
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
    m.exports.VERSION = '0.3.0';
    m.exports.GITREV = '';
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
