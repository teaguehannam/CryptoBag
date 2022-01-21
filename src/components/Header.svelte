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
			background: rgba(20,21,23,1);
		
			a {
				display: block;
				width: 100%;
				text-align: center;
				color: rgba(252,252,252,0.9);
				line-height: 3em;
				font-size: 1.15em;
				border: 2px solid rgba(192,193,195,0);
		
				&:hover {
					color: rgba(252,252,252,1);
					border: 2px solid rgba(192,193,195,1);
				}

				&.Active {
					background: rgba(252,252,252,0.24);
				}
			} // a
		} // nav
	} // header
</style>
