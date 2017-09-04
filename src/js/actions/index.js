'use strict';

const {obj} = require('iblokz-data');

const pools = require('./pools');

// initial
const initial = {
	number: 0,
	addPoolForm: false
};

// actions
const set = (key, value) => state => obj.patch(state, key, value);
const toggle = key => state => obj.patch(state, key, !obj.sub(state, key));

module.exports = {
	initial,
	pools,
	set,
	toggle
};
