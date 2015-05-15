/* global la */
if (typeof fe === 'undefined') {
  var fe = require('../index');
}
if (typeof fp === 'undefined') {
  var fp = require('functional-pipeline');
}
if (typeof la === 'undefined') {
  require('lazy-ass');
}
if (typeof _ === 'undefined') {
  var _ = require('lodash');
}

describe('functional-extract', function () {
  var joe = {
    name: {
      first: 'joe',
      last: 'smith'
    },
    age: 20
  };

  it('extracts deep property', function () {
    var simple = {
      name: fp('name', 'first')
    };
    var result = fe(simple, joe);
    la(result.name === joe.name.first, 'name', result);
  });

  it('extracts simple property', function () {
    var simple = {
      age: fp('age')
    };
    var result = fe(simple, joe);
    la(result.age === joe.age, 'age', result);
  });

  it('gives defaults', function () {
    var simple = {
      age: 40,
      gender: 'male'
    };
    var result = fe(simple, joe);
    la(result.age === 40, 'age', result);
    la(result.gender === 'male', 'gender', result);
  });

  it('does everything', function () {
    var simple = {
      name: fp('name', 'first'),
      age: fp('age'),
      gender: 'male'
    };
    var result = fe(simple, joe);
    la(result.name === joe.name.first, 'name', result);
    la(result.age === joe.age, 'age', result);
    la(result.gender === 'male', 'gender', result);
  });

  describe('lodash _.get compatible', function () {
    function _get(path) {
      return function (obj) {
        return _.get(obj, path);
      };
    }

    it('works with _.get', function () {
      var simple = {
        name: _get('name.first'),
        age: _get('age')
      };
      var result = fe(simple, joe);
      la(result.name === joe.name.first, 'name', result);
      la(result.age === joe.age, 'age', result);
    });

    it('supports array indices', function () {
      var obj = {
        foo: [{
          bar: 'baz'
        }]
      };
      var simple = {
        name: _get('foo[0].bar')
      };
      var result = fe(simple, obj);
      la(result.name === 'baz', 'name', result);
    });
  });

});
