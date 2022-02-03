<script>
	import { onMount } from 'svelte'
	import { metatags, redirect } from '@roxi/routify'
	import { DataReady } from '#stores/DataReady.js'

	metatags.title = 'CryptoBag - Dashboard'
	metatags.description = 'Analysis of your crypto trading skills'
</script>


<div class="Dashboard">
	<div class="Contain">
		<h1>This is <code>/dashboard</code></h1>
	</div>
</div>


<style lang=scss>
	.Dashboard {
		min-height: 90vh;
		display: flex;
		align-items: center;

		.Contain {
			margin: 0 auto 50vh auto;

			h1 {
				margin: 0;
				text-align: center;
				font-size: 3em;
			}
		}
	}
</style>
