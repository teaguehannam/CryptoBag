<!-- Data in IndexedDB -->
<script>
	import { onMount } from 'svelte';
	import { get, del } from 'idb-keyval';

	import { DataReady } from '#stores/DataReady.js';
	import { DbName } from '#stores/DbName.js';
	
	import jspreadsheet from "jspreadsheet-ce";
	import { TradeSchema } from '#stores/TradeSchema.js';

	onMount(() => {
		get($DbName).then((trades) => {
			renderView(trades)
		})
	})

	/* TABLE VIEW DATA*/
	function renderView(trades) { 
		const schema = [
		];
		jspreadsheet(document.getElementById('DataSpreadsheet'), {
			data: trades,
			columns: schema
		})
	}

	function deleteDB() {
		del($DbName);
		DataReady.set('no')
	}
</script>


<div class="ShowData">
	<div class="Contain">
		<div class="Actions">
			<button on:click={() => deleteDB()}>Clear Data</button>
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
			border: 1px solid orange;
			max-width: 800px;
			margin: 0 auto 50vh auto;
		}
	}
</style>
