/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Complex64 } from '@stdlib/types/complex';
import { Collection } from '@stdlib/types/array';

/**
* Interface describing `cpolarf`.
*/
interface Cpolar {
	/**
	* Computes the absolute value and the phase of a single-precision complex floating-point number.
	*
	* @param z - complex number
	* @returns absolute value and phase, respectively
	*
	* @example
	* var Complex64 = require( '@stdlib/complex-float32-ctor' );
	*
	* var v = cpolarf( new Complex64( 5.0, 3.0 ) );
	* // returns [ ~5.83, ~0.5404 ]
	*/
	( z: Complex64 ): [ number, number ];

	/**
	* Computes the absolute value and the phase of a single-precision complex floating-point number and assigns results to a provided output array.
	*
	* @param z - complex number
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array index offset
	* @returns output array
	*
	* @example
	* var Complex64 = require( '@stdlib/complex-float32-ctor' );
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var out = new Float32Array( 2 );
	*
	* var v = cpolarf.assign( new Complex64( 5.0, 3.0 ), out, 1, 0 );
	* // returns <Float32Array>[ ~5.83, ~0.5404 ]
	*
	* var bool = ( v === out );
	* // returns true
	*/
	assign<T = unknown>( z: Complex64, out: Collection<T>, stride: number, offset: number ): Collection<T | number>;
}

/**
* Computes the absolute value and the phase of a single-precision complex floating-point number.
*
* @param z - complex number
* @returns absolute value and phase, respectively
*
* @example
* var Complex64 = require( '@stdlib/complex-float32-ctor' );
*
* var v = cpolarf( new Complex64( 5.0, 3.0 ) );
* // returns [ ~5.83, ~0.5404 ]
*/
declare var cpolarf: Cpolar;


// EXPORTS //

export = cpolarf;
