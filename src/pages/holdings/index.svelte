<script>
	import { onMount } from 'svelte';
	import { metatags } from '@roxi/routify';
	import { get } from 'idb-keyval';

	import { DataReady } from '#stores/DataReady.js';
	import { DbName } from '#stores/DbName.js';
	import { Products } from '#stores/Products.js';

	onMount(() => {
		get($DbName).then((trades) => {
			calcHoldings(trades);
		})
	})

	function calcHoldings(data) {
		const pairs = new Set (data.map((t) => t.product));
		console.log('Browser DB', data)
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
