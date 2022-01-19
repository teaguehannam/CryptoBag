<script>
	import { url, isActive } from '@roxi/routify'

	const links = [
		['./index', 'Index'],
		['./dashboard', 'Dashboard'],
		['./holdings', 'Holdings'],
		['./trades', 'Trades'],
	]
</script>


<header>
	<nav>
		{#each links as [link, name]}
			<a href={$url(link)} class:Active={$isActive(link)}>
				{name}
			</a>
		{/each}
	</nav>
</header>


<style lang=scss>
	header {
		background: rgba(20,21,23,1);
		box-shadow: 0 0 2px 3px rgba(30,31,33,1);

		nav {
			display: flex;
			justify-content: space-evenly;
		
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
