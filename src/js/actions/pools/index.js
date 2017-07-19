const {obj, arr} = require('iblokz-data');

const initial = {
	list: [
		{
			title: 'Pool 1'
		},
		{
			title: 'Pool 2'
		}
	]
};

// actions
const add = data => state => obj.patch(state, 'pools', {list: arr.add(
	state.pools.list,
	data
)});

module.exports = {
	initial,
	add
};
