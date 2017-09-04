'use strict';

// dom
const {
	section, button, span, header,
	form, h1, input, a, ul, li, i
} = require('iblokz-snabbdom-helpers');

// lib
const Sortable = require('sortablejs');
// util
const formUtil = require('../../util/form');

module.exports = ({state, actions}) => ul('.pools', {
	hook: {
		insert: vnode =>
			new Sortable(vnode.elm, {
				draggable: 'li',
				ghostClass: "placeholder"
			})
	}
}, state.pools.list.map(pool =>
	li('.pool', [
		span('.avatar', i('.fa.fa-user-circle')),
		' ',
		span('.pool-title', pool.title)
	])
));
