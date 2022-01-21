<script>
	import { metatags } from '@roxi/routify'



	metatags.title = 'CryptoBag - Holdings'
	metatags.description = '~ View holdings based on trading data ~'
</script>


<div class="Holdings">
	<div class="Contain">
		<h1>This is <code>/holdings</code></h1>
	</div>
</div>


<style lang=scss>
	.Holdings {
		min-height: 100vh;
		display: flex;
		align-items: center;

		.Contain {
			margin: 0 auto 50vh auto;
			h1 {
				margin: 0;
				text-align: center;
				font-size: 3em;
			}
		} // Contain
	}
</style>
