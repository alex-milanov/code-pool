'use strict';

// dom
const {
	section, button, span, header,
	form, h1, input, a, ul, li, i
} = require('iblokz-snabbdom-helpers');

const formUtil = require('../../util/form');

module.exports = ({state, actions}) => header([
	h1([
		i('.fa.fa-handshake-o'),
		' Code Pool'
	]),
	form('.right.add-pool', {
		on: {
			submit: ev => {
				ev.preventDefault();
				const data = formUtil.toData(ev.target);
				actions.pools.add(data);
				formUtil.clear(ev.target);
			}
		}
	}, [].concat(
		state.addPoolForm && [
			input('[type="text"][name="title"]'),
			button('[type="submit"]', 'Save')
		] || [],
		button('[type="button"]', {
			on: {
				click: () => actions.toggle('addPoolForm')
			}
		}, !state.addPoolForm
			? [i('.fa.fa-plus'), ' Start a new Code Pool']
			: 'Cancel'
		)
	))
]);
