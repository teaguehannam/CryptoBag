<!-- Data in IndexedDB, CRUD spreadsheet -->
<script>
	import { onMount } from 'svelte';
	import { url } from '@roxi/routify';
	import { get, del } from 'idb-keyval';

	import Fmt from '#classes/Formatter.js';
	import { Trades } from '#stores/Trades.js';
	import { DataReady } from '#stores/DataReady.js';

	onMount(() => {
		get('Trades').then((trades) => {
			Trades.set(trades)
			console.log($Trades);
		})
	})

	function deleteData() {
		if (confirm('Delete all trades?')) {
			del('Trades');
			DataReady.set('no')
		}
	}
</script>


<div class="ShowData">
	<div class="Contain">

		<div class="Actions">
			<button on:click={() => deleteData()}>
				Delete data
			</button>
		</div>

		<table>
			<thead>
				<tr>
					<th>Recieve</th>
					<th>Amount</th>
					<th>USD Price</th>
					<th>Give</th>
					<th>Amount</th>
				</tr>
			</thead>
			<tbody>
				{#each $Trades as trade}
					<tr title={`Trade ID: ${trade['trade id']}`}>
						<td>{ Fmt.product1(trade['product']) }</td>
						<td>{ Fmt.crypto(trade['size']) }</td>
						<td class="Price">{ Fmt.money(trade['price']) }</td>
						<td>{ Fmt.product2(trade['product']) }</td>
						{#if Fmt.product2(trade['product']) === 'USD'}
							<td>{ Fmt.money(trade['total']) }</td>
						{:else}
							<td>{ Fmt.crypto(trade['total']) }</td>
						{/if}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<style lang=scss>
	.ShowData {
		background: rgba(19,19,19,0.35);
		backdrop-filter: blur(12px);
		padding-top: 0.5em;
		min-height: calc(100vh - 4.5em);

		.Contain {
			padding-bottom: 80vh;

			.Actions {
				display: flex;
				justify-content: flex-end;
				max-width: 800px;
				margin: 0 auto;

				button {
					font-size: 1.3em;
					cursor: pointer;
					&:hover {
						background: rgba(255,242,246,1);
					}
				} // button
			} // Actions

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
				}

				tbody {
					tr {
						font-size: 1.65em;
						line-height: 2em;
						cursor: cell;
						&:hover {
							background: rgba(252,252,252,0.2);
						}
						td {

							&.Price {
								border-left: 2px solid rgba(133,187,101,0.2);
								border-right: 2px solid rgba(133,187,101,0.2);
							}
						}
					}
				} // tbody
			} // table

		} // Contain
	}
</style>
