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
			<code>Fills</code>
		</div>
		<p title="(for data accuracy)">Set date range around all trades</p>
		<p class="Alert" title="(why parse a PDF?)">Format must be "CSV"</p>
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
			max-width: 720px;
			border-radius: 1em;
			padding: 0 1em;

			.DoubleRow {
				text-align: left;
				background: rgba(23,28,36,1);
				padding: 0 1em;
				margin: 0 auto;
				border: 2px solid rgba(65,71,77,1);
				code {
					color: white;
					font-size: 1.5em;
					line-height: 2em;
					border: 1px solid green;
					border-radius: 1em;
					padding: 3px 9px;
				}
			}

			img {
				width: 60%;
				margin: 0 auto;
			} // help img

			a {
				display: block;
				font-size: 1.3em;
				line-height: 2.6em;
				margin: 1em auto;
				width: 100%;
				max-width: 600px;
				border-radius: 3px;
				// hover stuff
				border: 1px solid rgba(87,87,87,0.5);
				background: rgba(32,36,42,1);
				color: rgba(122,232,252,1);
				transition: 0.1s border ease-in;
				transition: 0.2s background ease-in;
				transition: 0.43s color ease-in;

				&:hover {
					background: rgba(37,41,47,1);
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
