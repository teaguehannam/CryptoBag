<!-- routify:options preload="proximity" -->
<script>
	
	import Header from '#cmp/header/index.svelte';


	import { onMount } from 'svelte';
	import { DataReady } from '#stores/DataReady.js';
	import { get } from 'idb-keyval';
	onMount(() => {
		get('Trades').then((trades) => {
			if (trades.length > 0) {
				DataReady.set('yes');
			} else {
				DataReady.set('no');
			}
		})
	});
</script>

<Header />
<slot />

