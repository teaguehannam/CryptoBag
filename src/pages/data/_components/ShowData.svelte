<!-- Data in IndexedDB, CRUD spreadsheet -->
<script>
	import { onMount } from 'svelte';
	import { get, del } from 'idb-keyval';

	import { DataReady } from '#stores/DataReady.js';
	import { DbName } from '#stores/DbName.js';
	// import { TradeSchema } from '#stores/TradeSchema.js';

	onMount(() => {
		get($DbName).then((trades) => {
			console.log(trades);
		})
	})

	function deleteData() {
		if (confirm('Delete trades?')) {
			del($DbName);
			DataReady.set('no')
		}
	}
</script>


<div class="ShowData">
	<div class="Contain">
		<div class="Actions">
			<button on:click={() => deleteData()}>
				Clear Local data
			</button>
		</div>
	</div>
</div>

<style lang=scss>
	.ShowData {

		.Contain {

			.Actions {

				button {
					&:hover {
					}
				} // button
			} // Actions
		} // Contain
	}
</style>
