import { writable } from 'svelte/store';

const initSchema = [
	{
		type: 'text',
		id: 1,
		name: 'trade id',
		width: 100
	},
	{
		type: 'numeric',
		id: 2,
		name: 'product',
		width: 120,
	},
	{
		type: 'text',
		id: 3,
		name: 'side',
		width: 60
	},
	{
		type: 'numeric',
		id: 5,
		name: 'size',
		width: 200
	},
	{
		type: 'numeric',
		id: 7,
		name: 'price',
		width: 200
	},
	{
		type: 'numeric',
		id: 8,
		name: 'fee',
		width: 120
	},
	{
		type: 'numeric',
		id: 9,
		name: 'total',
		width: 100
	}
]

export const TradeSchema = writable(initSchema);