'use strict';

// dom
const {
	section, button, span,
	form, h1, input, a, ul, li
} = require('iblokz-snabbdom-helpers');

const formToData = form => Array.from(form.elements)
    // .map(el => (console.log(el.name), el))
    .filter(el => el.name !== undefined)
    .reduce((o, el) => ((o[el.name] = el.value), o), {});

const clearForm = form => Array.from(form.elements)
    .forEach(el => (el.value = null));

module.exports = ({state, actions}) => section('#ui', [
	h1('Code Pool'),
	form('.add-pool', {
		on: {
			submit: ev => {
				ev.preventDefault();
				const data = formToData(ev.target);
				actions.pools.add(data);
				clearForm(ev.target);
			}
		}
	}, [
		input('[type="text"][name="title"]')
	]),
	ul('.pools', state.pools.list.map(pool =>
        li('.pool', pool.title)
    ))
]);
