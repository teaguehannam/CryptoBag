<script>
	import { onMount } from 'svelte';
	import { metatags } from '@roxi/routify';
	import { get } from 'idb-keyval';

	import { DataReady } from '#stores/DataReady.js';
	import { Products } from '#stores/Products.js';

	onMount(() => {
		get('Trades').then((trades) => {
			calcHoldings(trades);
		})
	})

	function calcHoldings(data) {
		const totals = [];
		const uniqueProducts = new Set (data.map((t) => t.product));

		// Totals schema
		uniqueProducts.forEach(productPair => {
			totals.push({
				'name': productPair,
				'buy_count': 0,
				'buy_avg': 0,
				'buy_size': 0,
				'sell_count': 0,
				'sell_avg': 0,
				'sell_size': 0
			});
		})


		let i;
		data.forEach(trade => {
			i = totals.findIndex(p => p.name === trade.product)
			if (trade.side === 'BUY') {
				totals[i].buy_count++;
				totals[i].buy_avg += parseFloat(trade.price);
				totals[i].buy_size += parseFloat(trade.size)
			} else {
				totals[i].sell_count++;
				totals[i].sell_avg += parseFloat(trade.price);
				totals[i].sell_size += parseFloat(trade.size)
			}
		})

		// Avg Buy/Sell for each unique pair
		totals.forEach(pair => {
			pair.buy_avg = pair.buy_avg / pair.buy_count;
			pair.sell_avg = pair.sell_avg / pair.sell_count;
		})

		return totals;
	}

	metatags.title = 'CryptoBag - Holdings'
	metatags.description = '~ View holdings based on trading data ~'
</script>


<div class="Holdings">
	<p>Holdings here</p>
</div>


<style lang=scss>
	.Holdings {
		max-width: 720px;
		text-align: center;
		margin: 0 auto;
		p {
			font-size: 2em;
		}
	}
</style>
