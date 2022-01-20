<script>
	import { metatags } from '@roxi/routify'

	import { DataReady } from '#stores/DataReady.js';
	import ShowData from './_components/ShowData.svelte';
	import NoData from './_components/NoData.svelte';

	metatags.title = 'CryptoBag - Trades'
	metatags.description = '~ View or upload trading data ~'

	console.log("data ready?", $DataReady);

</script>

{#if $DataReady}
	<ShowData />
{:else}
	<NoData />
{/if}
