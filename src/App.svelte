<script>
	import { onMount } from 'svelte';
	import { Router } from "@roxi/routify";
	import { routes } from "../.routify/routes";

	import { get } from 'idb-keyval';
	import { DataReady } from '#stores/DataReady.js';

	onMount(() => {
		get('Trades').then((trades) => {
			if (trades && trades.length > 0) {
				DataReady.set('yes');
			} else {
				DataReady.set('no');
			}
		})
	});
</script>

<Router {routes} />