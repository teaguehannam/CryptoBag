<script>
	import { metatags, redirect, url } from '@roxi/routify'
	import { DataReady } from '#stores/DataReady.js';
	import { onMount } from 'svelte';
	
	metatags.title = 'CryptoBag - Welcome';
	metatags.description = 'Crypto trades data management';
</script>

{#if $DataReady === 'no'}
	<div id="Index">
		<div class="Contain">
			<p>Do you have a CSV trading file?</p>
			<div class="Choices">
				<a href={$url('./data')}>Yes</a>
				<a href={$url('./help')}>No</a>
			</div>
		</div>
	</div>
{/if}


<style lang=scss>
	#Index {
		min-height: 80vh;
		display: flex;
		align-items: center;

		.Contain {
			background: rgba(32,36,42,1);
			text-align: center;
			display: grid;
			grid-gap: 2em;
			max-width: 400px;
			width: 90%;
			margin: 0 auto;
			border-radius: 1.2em 2.1em;
			border: 2px solid rgba(192,194,193,0.9);
			box-shadow: 0 0 3px 0 rgba(93,95,94,1);
			padding: 1em;

			p {
				margin: 0;
				font-size: 1.5em;
				color: rgba(252,252,252,1);
			}
			.Choices {
				display: flex;
				justify-content: space-evenly;
				a {
					color: rgba(252,252,252,0.6);
					width: 100%;
					letter-spacing: 1.2px;
					font-size: 1.65em;
					line-height: 2em;
					border-radius: 12px;
					border: 3px solid rgba(216,222,232,0);
					&:hover {
						background: rgba(64,72,84,1);;
						color: rgba(252,252,252,1);
						border: 3px solid rgba(216,232,232,0.6);
					}
				} // a
			} // Choices
		} // Contain
	}
</style>
