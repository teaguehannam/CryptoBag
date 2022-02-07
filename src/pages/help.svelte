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
		<div class="DoubleRow">
			<p>GENERATE</p>
			<p>Fills</p>
		</div>
		<p title="(for data accuracy)">Set date range to include all trades</p>
		<p class="Alert" title="(I don't want to parse PDFs)">Format must be "CSV"</p>
		<a href={$url('./data')}>Bring 'fills.csv' here</a>
	</div>
</div>

<style lang=scss>
	.Help {
		min-height: calc(100vh - 4em);
		display: flex;
		align-items: center;
		backdrop-filter: blur(24px);

		.Contain {			
			background: rgba(19,19,19,0.9);
			text-align: center;
			display: grid;
			grid-gap: 1em;
			width: 100%;
			margin: 0 auto;
			padding: 1em 0;
			max-width: 720px;
			// border-radius: 1em;

			.DoubleRow {
				background: rgba(23,28,36,1);
				width: 300px;
				padding: 0 50px;
				margin: 0 0 0 auto;
				border: 2px solid rgba(65,71,77,1);
			}

			img {
				width: 80%;
				margin: 0 auto;
			} // help img

			a {
				background: rgba(32,36,42,1);
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

		} // Contain
	}
</style>
