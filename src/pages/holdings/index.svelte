<script>
	import { onMount } from 'svelte';
	import { metatags } from '@roxi/routify';
	import { get } from 'idb-keyval';

	import Handsontable from 'handsontable';
	import 'handsontable/dist/handsontable.full.css';

	import { DataReady } from '#stores/DataReady.js';
	import { DbName } from '#stores/DbName.js';
	import { Products } from '#stores/Products.js';

	onMount(() => {
		get($DbName).then((trades) => {
			calcHoldings(trades);
		})
	})

	function calcHoldings(data) {
		const uniqueProducts = new Set (data.map((t) => t.product));
		const totals = [];
		uniqueProducts.forEach(val => {
			totals.push({
				name: val,
				fee: 0,
				holdings: 0,
				usd: 0,
				buySum: 0,
				buyQty: 0,
				buyAvg: 0,
				sellSum: 0,
				sellQty: 0,
				sellAvg: 0,
			});
		})
		// Totals
		data.forEach(trade => {
			let index = totals.findIndex(p => p.name === trade.product);
			if (trade.side === 'BUY') {
				totals[index].holdings += parseFloat(trade.size);
				totals[index].buySum += parseFloat(trade.price);
				totals[index].buyQty += 1;
			} else if (trade.side === 'SELL') {
				totals[index].holdings -= parseFloat(trade.size);
				totals[index].sellSum += parseFloat(trade.price);
				totals[index].sellQty += 1;
			} else {
				console.log('Error', trade)
			}
			totals[index].usd += parseFloat(trade.total);
			totals[index].fee += parseFloat(trade.fee);
		})
		// Averages
		totals.forEach(p => {
			if (p.buyQty) {
				p.buyAvg = p.buySum / p.buyQty; 
			} else {
				p.buyAvg = 0; 
			}
			if (p.sellQty > 0) {
				p.sellAvg =  p.sellSum / p.sellQty;
			} else {
				p.sellAvg = 0; 
			}
		})
		renderTable(totals);
	}

	let table;
	function renderTable(totals) {
		const buffer = [];
		console.log(totals);
		totals.forEach(item => {
			buffer.push({
				name: item.name,
				holdings: item.holdings,
				fee: usdStyle(item.fee),
				usd: usdStyle(item.usd),
				avg_buy: item.buyAvg,
				avg_sell: item.sellAvg,
			});
		})
		Products.set(buffer);

		let hotTable = new Handsontable(table, {
			data: $Products,
			columnSorting: true,
			colHeaders: [
				'Product',
				'Holdings',
				'Fee',
				'USD',
				'Avg Buy',
				'Avg Sell'
			],
			licenseKey: 'non-commercial-and-evaluation'
		})
	}

	function usdStyle(num) {
		return num.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD'
		});
	}

	metatags.title = 'CryptoBag - Holdings'
	metatags.description = '~ View holdings based on trading data ~'
</script>


<div class="Holdings">
	<div bind:this={table}></div>
</div>


<style lang=scss>
	.Holdings {
		max-width: 720px;
		margin: 0 auto;
	}
</style>
