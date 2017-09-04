'use strict';

// dom
const {
	section, button, span, header,
	form, h1, input, a, ul, li, i
} = require('iblokz-snabbdom-helpers');

const formToData = form => Array.from(form.elements)
    // .map(el => (console.log(el.name), el))
    .filter(el => el.name !== undefined)
    .reduce((o, el) => ((o[el.name] = el.value), o), {});

const clearForm = form => Array.from(form.elements)
    .forEach(el => (el.value = null));

module.exports = ({state, actions}) => section('#ui', [
	header([
		h1('Code Pool'),
		form('.right.add-pool', {
			on: {
				submit: ev => {
					ev.preventDefault();
					const data = formToData(ev.target);
					actions.pools.add(data);
					clearForm(ev.target);
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
				? [i('.fa.fa-plus'), ' Start a project']
				: 'Cancel'
			)
		))
	]),
	section('.content', [
		ul('.pools', state.pools.list.map(pool =>
      li('.pool', pool.title)
    ))
	])
]);
