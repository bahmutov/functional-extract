/* global la */
if (typeof fe === 'undefined') {
  var fe = require('..');
}
if (typeof fp === 'undefined') {
  var fp = require('functional-pipeline');
}
if (typeof la === 'undefined') {
  require('lazy-ass');
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
});
