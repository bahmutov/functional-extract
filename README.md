# functional-extract

> Quickly extracts property values nested deep inside an object.

[![NPM][functional-extract-icon] ][functional-extract-url]

[![Build status][functional-extract-ci-image] ][functional-extract-ci-url]
[![dependencies][functional-extract-dependencies-image] ][functional-extract-dependencies-url]
[![devdependencies][functional-extract-devdependencies-image] ][functional-extract-devdependencies-url]

Install and use under Node:

```
npm install functional-extract --save
var fe = require('functional-extract');
```

Install and use in browser using bower:

```
bower install functional-extract
<script src="bower_components/functional-extract/fe.js"></script>
// attaches as window.fe object
```

## Example

Imagine we need to extract first name, age and give a default gender value for the following object:

```js
var joe = {
  name: {
    first: 'joe',
    last: 'smith'
  },
  age: 20
};
```

Using `functional-extract` and [functional-pipeline](https://github.com/bahmutov/functional-pipeline)
we can do this quickly 

```
var fp = require('functional-pipeline');
var fe = require('functional-extract');
var simple = {
  name: fp('name', 'first'),
  age: fp('age'),
  gender: 'male'
};
var result = fe(simple, joe);
// result is
// { name: 'joe', age: 20, gender: 'male' }
```

### Small print

Author: Gleb Bahmutov &copy; 2015

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/functional-extract/issues) on Github

## MIT License

Copyright (c) 2015 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[functional-extract-icon]: https://nodei.co/npm/functional-extract.png?downloads=true
[functional-extract-url]: https://npmjs.org/package/functional-extract
[functional-extract-ci-image]: https://travis-ci.org/bahmutov/functional-extract.png?branch=master
[functional-extract-ci-url]: https://travis-ci.org/bahmutov/functional-extract
[functional-extract-dependencies-image]: https://david-dm.org/bahmutov/functional-extract.png
[functional-extract-dependencies-url]: https://david-dm.org/bahmutov/functional-extract
[functional-extract-devdependencies-image]: https://david-dm.org/bahmutov/functional-extract/dev-status.png
[functional-extract-devdependencies-url]: https://david-dm.org/bahmutov/functional-extract#info=devDependencies
