import { writable } from 'svelte/store';

const initSchema = [
	{
		name: 'trade_id',
		width: 100
	},
	{
		name: 'product',
		width: 100
	},
	{
		name: 'action',
		width: 100
	},
	{
		name: 'timestamp',
		width: 100
	},
	{
		name: 'purchased',
		width: 100
	},
	{
		name: 'price',
		width: 100
	},
	{
		name: 'fee',
		width: 100
	},
	{
		name: 'paid',
		width: 100
	}
]

export const TradeSchema = writable(initSchema);