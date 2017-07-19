'use strict';

const pools = require('./pools');

// initial
const initial = {
	number: 0
};

// actions
const set = number => state => Object.assign({}, state, {number});
const incr = () => state => Object.assign({}, state, {number: state.number + 1});
const decr = () => state => Object.assign({}, state, {number: state.number - 1});

module.exports = {
	initial,
	pools,
	set,
	incr,
	decr
};
