<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# cpolarf

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [absolute value][@stdlib/math/base/special/cabsf] and [phase][@stdlib/math/base/special/cphasef] of a single-precision complex floating-point number.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
cpolarf = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cpolarf@v0.1.1-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var cpolarf = require( 'path/to/vendor/umd/math-base-special-cpolarf/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cpolarf@v0.1.1-umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.cpolarf;
})();
</script>
```

#### cpolarf( z )

Computes the [absolute value][@stdlib/math/base/special/cabsf] and [phase][@stdlib/math/base/special/cphasef] of a single-precision complex floating-point number.

```javascript
var Complex64 = require( '@stdlib/complex-float32-ctor' );

var o = cpolarf( new Complex64( 5.0, 3.0 ) );
// returns [ ~5.83, ~0.5404 ]
```

#### cpolarf.assign( z, out, stride, offset )

Computes the [absolute value][@stdlib/math/base/special/cabsf] and [phase][@stdlib/math/base/special/cphasef] of a single-precision complex floating-point number and assigns results to a provided output array.

```javascript
var Complex64 = require( '@stdlib/complex-float32-ctor' );
var Float32Array = require( '@stdlib/array-float32' );

var out = new Float32Array( 2 );

var v = cpolarf.assign( new Complex64( 5.0, 3.0 ), out, 1, 0 );
// returns <Float32Array>[ ~5.83, ~0.5404 ]

var bool = ( v === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-array-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each-map@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cpolarf@v0.1.1-umd/browser.js"></script>
<script type="text/javascript">
(function () {

// Create an array of random numbers:
var opts = {
    'dtype': 'float32'
};
var arr = new Complex64Array( uniform( 200, -100.0, 100.0, opts ) );

// Compute the polar form of each number in the array:
logEachMap( 'cpolarf(%s) = [%s]', arr, cpolarf );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-cpolarf.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-cpolarf

[test-image]: https://github.com/stdlib-js/math-base-special-cpolarf/actions/workflows/test.yml/badge.svg?branch=v0.1.1
[test-url]: https://github.com/stdlib-js/math-base-special-cpolarf/actions/workflows/test.yml?query=branch:v0.1.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-cpolarf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-cpolarf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-cpolarf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-cpolarf/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-cpolarf/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-cpolarf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-cpolarf/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-cpolarf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-cpolarf/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-cpolarf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-cpolarf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-cpolarf/main/LICENSE

[@stdlib/math/base/special/cabsf]: https://github.com/stdlib-js/math-base-special-cabsf/tree/umd

[@stdlib/math/base/special/cphasef]: https://github.com/stdlib-js/math-base-special-cphasef/tree/umd

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
