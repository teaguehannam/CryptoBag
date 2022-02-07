<script>
	import { DataReady } from '#stores/DataReady.js';
	import NoData from './NoData.svelte'
	import YesData from './YesData.svelte'
</script>

{#if $DataReady === 'yes'}
	<YesData />
{:else if $DataReady === 'no'}
	<NoData />
{/if}
