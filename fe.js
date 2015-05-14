(function initFunctionalExtract() {

  function assemble() {

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

    return extract;
  }

  function register(value, name) {
    if (typeof window === 'object') {
      /* global window */
      window[name] = value;
    } else if (typeof module === 'object') {
      module.exports = value;
    } else {
      throw new Error('Do not know how to register ' + name);
    }
  }

  var fe = assemble();
  register(fe, 'fe');

}());
