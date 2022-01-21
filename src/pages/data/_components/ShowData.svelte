<!-- Data in IndexedDB, CRUD spreadsheet -->
<script>
	import { onMount } from 'svelte';
	import { get, del } from 'idb-keyval';

	import { DataReady } from '#stores/DataReady.js';
	import { DbName } from '#stores/DbName.js';
	
	import jspreadsheet from "jspreadsheet-ce";
	import { TradeSchema } from '#stores/TradeSchema.js';

	onMount(() => {
		// Get Data
		get($DbName).then((trades) => {
			renderView(trades);
		})
	})

	function renderView(trades) {
		// Setup header
		const header = [];
		$TradeSchema.forEach(col => {
			header.push({
				type: col.type,
				title: col.name,
				width: col.width
			})
		})
		// Create Spreadsheet
		jspreadsheet(document.getElementById('DataSpreadsheet'), {
			data: trades,
			columns: header,
			columnSorting: false,
		})
	}

	function deleteDB() {
		// you know what it is
		del($DbName);
		DataReady.set('no')
	}
</script>


<div class="ShowData">
	<div class="Contain">
		<div class="Actions">
			<button on:click={() => deleteDB()}
				title="Click to clear Database">
				Delete All
			</button>
		</div>
		<div id="DataSpreadsheet"></div>
	</div>
</div>

<style lang=scss>
	.ShowData {
		min-height: 100vh;
		display: flex;
		align-items: center;

		.Contain {
			margin: 1em auto;

			.Actions {
				text-align: right;
				button {
					background: rgba(240,229,236,0.8);
					padding: 0.75em 2em;
					&:hover {
						background: rgba(250,239,246,1);
					}
				} // button
			} // Actions
		} // Contain
	}
</style>
