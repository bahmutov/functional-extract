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
