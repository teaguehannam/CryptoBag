<script>
	import { onMount } from 'svelte';
	import { metatags } from '@roxi/routify';
	import { get } from 'idb-keyval';

	import Fmt from '#classes/Formatter.js';
	import { DataReady } from '#stores/DataReady.js';
	import { Products } from '#stores/Products.js';

	onMount(() => {
		get('Trades').then((trades) => {
			calcProducts(trades);
		})
	})

	function calcProducts(data) {
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
			if (pair.buy_count === 0) {
				pair.buy_avg = '-';
			} else {
				pair.buy_avg = pair.buy_avg / pair.buy_count;
			}
			if (pair.sell_count === 0) {
				pair.sell_avg = '-';
			} else {
				pair.sell_avg = pair.sell_avg / pair.sell_count;
			}
		})

		Products.set(totals);
		console.log($Products)
	}

	metatags.title = 'CryptoBag - Holdings'
	metatags.description = '~ View holdings based on trading data ~'
</script>


<div class="Products">
	<div class="Contain">
		<table>
			<thead>
				<tr>
					<th>Pair</th>
					<th>Buy avg</th>
					<th>Sell avg</th>
				</tr>
			</thead>
				{#each $Products as pair}
				<tbody>
					<tr>
						<td>{ pair['name'] }</td>
						<td>{ Fmt.money(pair['buy_avg']) }</td>
						<td>{ Fmt.money(pair['sell_avg']) }</td>
					</tr>
				</tbody>
			{/each}
		</table>
	</div>
</div>


<style lang=scss>
	.Products {
		background: rgba(19,19,19,0.35);
		backdrop-filter: blur(12px);
		padding-top: 0.5em;
		min-height: calc(100vh - 4.5em);

		.Contain {
			padding: 3.4em 0 80vh 0;

			table {
				width: 100%;
				max-width: 800px;
				background: rgba(20,21,23,1);
				color: rgba(252,252,252,1);
				text-align: center;
				margin: 0 auto;
				border-collapse: collapse;

				thead {
					background: rgba(60,61,63,1);
					position: sticky;
					top: 0;
					th {
						line-height: 3em;
						font-size: 1.5em;
					}
				} // thead

				tbody {
					tr {
						font-size: 1.65em;
						line-height: 2em;
						cursor: cell;
						&:hover {
							background: rgba(252,252,252,0.2);
						}
						td {
						}
					}
				} // tbody

			} // table

		} // Contain
	} // Products
</style>
