<script>
	import { onMount } from 'svelte';
	import { metatags } from '@roxi/routify'

	import { DataReady } from '#stores/DataReady.js';
	import ShowData from './_components/ShowData.svelte';
	import NoData from './_components/NoData.svelte';

	metatags.title = 'CryptoBag - Data'
	metatags.description = '~ View or upload trading data ~'
</script>

{#if $DataReady === 'yes'}
	<ShowData />
{:else if $DataReady === 'no'}
	<NoData />
{/if}
