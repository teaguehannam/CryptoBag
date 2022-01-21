<script>
	import { metatags, url } from '@roxi/routify'; 

	const coinbasePro = 'https://pro.coinbase.com/';
	const coinbaseProStatements = 'https://pro.coinbase.com/profile/statements';

	metatags.title = 'CryptoBag - Help';
</script>

<div class="Help">
	<div class="Contain">
		<a href={$url(coinbasePro)} target="_blank">
			Login to Coinbase Pro
		</a> 
		<a href={$url(coinbaseProStatements)} target="_blank">
			Go to statements
		</a> 
		<img src="./img/help/1.png" alt="Step 1"/>
		<p>Under "GENERATE", select "Fills"</p>
		<img src="./img/help/2.png" alt="Step 2"/>
		<p>Set desired settings, format must be "CSV"</p>
		<img src="./img/help/3.png" alt="Step 3"/>
		<p>Download once "Completed"</p>
		<a href={$url('./data')}>Import trades data</a> 
	</div>
</div>

<style lang=scss>
	.Help {
		min-height: 100vh;
		display: flex;
		align-items: center;

		.Contain {			
			text-align: center;
			display: grid;
			grid-gap: 1em;
			width: 100%;
			margin: 0 auto;
			padding: 1em 0;
			max-width: 720px;
			background: rgba(32,36,42,1);

			a {
				display: block;
				font-size: 1.3em;
				color: rgba(122,232,252,1);
				margin: 0 auto;
				width: 80%;
				border-radius: 3px;
				border: 1px solid rgba(87,87,87,0.5);
				transition: 0.1s border ease-in;
				padding: 1em;

				&:hover {
					border: 1px solid rgba(92,92,92,1);
				}
			} // a

			p {
				margin: 0;
				color: rgba(252,252,252,1);
				font-size: 1.5em;
			}

			img {
				width: 80%;
				margin: 0 auto;
			}

		} // Contain
	}
</style>
