'use strict';

// dom
const {
	section, button, span,
	form, h1, input, a, ul, li, i
} = require('iblokz-snabbdom-helpers');

// comp
const header = require('./header');
const pools = require('./pools');

module.exports = ({state, actions}) => section('#ui', [
	header({state, actions}),
	section('.content', [
		pools({state, actions})
	])
]);
