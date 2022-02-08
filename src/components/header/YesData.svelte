<script>
	import { url, isActive } from '@roxi/routify'
</script>


<div class="YesData">
	<nav>
		<a href={$url('./dashboard')}
			class:Active={$isActive('./dashboard')}>
			Dashboard
		</a>
		<a href={$url('./holdings')}
			class:Active={$isActive('./holdings')}>
			Holdings
		</a>
		<a href={$url('./products')}
			class:Active={$isActive('./products')}>
			Products
		</a>
		<a href={$url('./data')} 
			class:Active={$isActive('./data')}>
			Data
		</a>
	</nav>
</div>


<style lang=scss>
	.YesData {
		background: rgba(30,31,33,1);
		nav {
			display: flex;
			justify-content: space-evenly;
			max-width: 720px;
			margin: 0 auto;
		
			a {
				width: 25%;
				text-align: center;
				color: rgba(252,252,252,0.68);
				line-height: 2.6em;
				margin: 2px 0;
				font-size: 1.4em;
				border-bottom: 2px solid rgba(192,193,252,0);
				transition: 0.2s all ease-in;

				&:hover {
					color: rgba(252,252,252,1);
					border-bottom: 2px solid rgba(102,143,212,0.8);
				}

				&.Active {
					background: rgba(92,93,95,0.5);
					color: rgba(252,252,252,1);
				}
			} // a
		} // nav
	} // YesData
</style>
