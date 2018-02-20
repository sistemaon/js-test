
// const index = require('../src/index.js');
// const expect = require('chai').expect;
// import index from '../src/index';

import { expect } from 'chai';
import { sum, sub, div, mul, fizzBuzz } from '../src/index';

describe('Index', ( ) => {

	describe('Smoke Tests', ( ) => {


		// it('should exist index lib', ( ) => {
		// 	expect(index).to.exist
		// });

		it('should exist method sum', ( ) => {
			// const sum = index.sum;
			expect(sum).to.exist
			expect(sum).to.be.a('function')

		})

		it('should exist method sub', ( ) => {
			// const sub = index.sub;
			expect(sub).to.exist
			expect(sub).to.be.a('function')

		})

		it('should exist method div', ( ) => {
			// const div = index.div;
			expect(div).to.exist
			expect(div).to.be.a('function')

		})

		it('should exist method mul', ( ) => {
			// const mul = index.mul;
			expect(mul).to.exist
			expect(mul).to.be.a('function')

		})

		it('should exist method fizzBuzz', ( ) => {
			// const fizzBuzz = index.fizzBuzz;
			expect(fizzBuzz).to.exist
			expect(fizzBuzz).to.be.a('function')

		})

	})

	describe('Sum', ( ) => {
		it('should return 9 when sum( 3, 6 )', ( ) => {
			// const sum = index.sum;
			expect(sum(3, 6)).to.be.equal(9)
		})
	})
	describe('Subtract', ( ) => {
		it('should return 3 when sub( 6, 3 )', ( ) => {
			// const sub = index.sub;
			expect(sub( 6, 3 )).to.be.equal(3)
		})
	})
	describe('Subtract', ( ) => {
		it('should return -3 when sub( 3, 6 )', ( ) => {
			// const sub = index.sub;
			expect(sub( 3, 6 )).to.be.equal(-3)
		})
	})
	describe('Divide', ( ) => {
		it('should return 2 when div( 6, 3 )', ( ) => {
			// const div = index.div;
			expect(div(6, 3)).to.be.equal(2)
		})
	})
	describe('Multiply', ( ) => {
		it('should return 18 when mul( 6, 3 )', ( ) => {
			// const mul = index.mul;
			expect(mul(6, 3)).to.be.equal(18)
		})
	})
	describe('FizzBuzz', ( ) => {
		it('should return multiple of 3 Fizz', ( ) => {
			// const fizzBuzz = index.fizzBuzz;
			expect(fizzBuzz(9)).to.be.equal('Fizz')
		})
		it('should return multiple of 5 Buzz', ( ) => {
			// const fizzBuzz = index.fizzBuzz;
			expect(fizzBuzz(10)).to.be.equal('Buzz')
		})
		it('should return multiple of 5 and 3 FizzBuzz', ( ) => {
			// const fizzBuzz = index.fizzBuzz;
			expect(fizzBuzz(15)).to.be.equal('FizzBuzz')
		})
	})

})
