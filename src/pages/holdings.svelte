<script>
	import { onMount } from 'svelte' 
	import { metatags } from '@roxi/routify'
	import { get } from 'idb-keyval';

	import { DataReady } from '#stores/DataReady.js'
	import { Hdls } from '#stores/Hdls.js' // coin data

	onMount(() => {
		if ($DataReady === 'yes') {
			calcHoldings();
		} else {
			alert('website confused');
		}
	})

	function calcHoldings() {

	}

	metatags.title = 'CryptoBag - Holdings'
	metatags.description = '~ View holdings based on trading data ~'
</script>


<div class="Holdings">
	<div class="Contain">
		<p>[Hdls here]</p>
	</div>
</div>


<style lang=scss>
	.Holdings {
		min-height: 100vh;
		display: flex;
		align-items: center;

		.Contain {
			margin: 0 auto 50vh auto;

			p {
				font-size: 3em;
				color: rgba(20,21,24,0.6);
			}
		} // Contain
	}
</style>
