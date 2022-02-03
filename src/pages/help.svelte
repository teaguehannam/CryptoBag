<script>
	import { metatags, url } from '@roxi/routify'; 

	const coinbasePro = 'https://pro.coinbase.com/';
	const coinbaseProStatements = 'https://pro.coinbase.com/profile/statements';

	metatags.title = 'CryptoBag - Help';
</script>

<div class="Help">
	<div class="Contain">
		<a href={$url(coinbaseProStatements)} target="_blank">
			Go to Coinbase Pro statements
		</a> 
		<img src="./img/help/1.png" alt="Step 1"/>
		<p>Under GENERATE, select Fills</p>
		<p>Set date range to include all trades</p>
		<p class="Alert">Format must be "CSV"</p>
		<a href={$url('./data')}>Bring 'fills.csv' here</a>
	</div>
</div>

<style lang=scss>
	.Help {
		min-height: 80vh;
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
				span {
					background: rgba(92,191,24,0.5);
					padding: 0.25em 0.5em;
					margin: 0 0.5em;
					color: rgba(142,252,148,1);
				}
			}

			img {
				width: 80%;
				margin: 0 auto;
			}

		} // Contain
	}
</style>
