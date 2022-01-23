<script>
	import { url, isActive } from '@roxi/routify'
	import { DataReady } from '#stores/DataReady.js'
</script>

<header>
	<nav>
		{#if $DataReady === 'yes'}
			<a href={$url('./dashboard')} class:Active={$isActive('./dashboard')}>
				Dashboard
			</a>
			<a href={$url('./holdings')} class:Active={$isActive('./holdings')}>
				Holdings
			</a>
		{:else if $DataReady === 'no'}
			<a href={$url('./index')} class:Active={$isActive('./index')}>
				Home
			</a>
			<a href={$url('./help')} class:Active={$isActive('./help')}>
				Help
			</a>
		{/if}
		<a href={$url('./data')} class:Active={$isActive('./data')}>
			Data
		</a>
	</nav>
</header>


<style lang=scss>
	header {
		nav {
			display: flex;
			justify-content: space-evenly;
			max-width: 720px;
			margin: 0 auto;
			background: rgba(20,21,23,0.8);
		
			a {
				width: 25%;
				text-align: center;
				color: rgba(252,252,252,0.8);
				line-height: 2.6em;
				margin: 0.2em 0;
				font-size: 1.15em;
				border: 2px solid rgba(192,193,195,0);
		
				&:hover {
					color: rgba(252,252,252,1);
					border: 2px solid rgba(192,193,195,0.1);
				}

				&.Active {
					background: rgba(92,93,95,1);
					color: rgba(252,252,252,1);
				}
			} // a
		} // nav
	} // header
</style>
