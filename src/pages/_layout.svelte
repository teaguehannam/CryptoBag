<!-- routify:options preload="proximity" -->
<script>
	import { onMount } from 'svelte';
	import { get } from 'idb-keyval';
	
	import Header from '#cmp/Header.svelte';

	import { DataReady } from '#stores/DataReady.js';
	import { DbName } from '#stores/DbName.js';

	onMount(() => {
		get($DbName).then((trades) => {
			if (trades) {
				DataReady.set('yes');
			} else {
				DataReady.set('no');
			}
		})
	});
</script>

<Header />
<slot />
