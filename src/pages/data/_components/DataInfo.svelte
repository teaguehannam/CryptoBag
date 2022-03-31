<script>
	const indexedDBLink = 'https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB';
	const githubLink = 'https://github.com/teaguehannam/CryptoBag';
	let modalState = true;

	function hdlModal() {
		modalState = !modalState;
	}
</script>


<div class="DataInfo" on:click={() => hdlModal()}>
	<img src="./img/data.png" alt="Data" />
	<p>Data Policy</p>
</div>

<div class="DataPolicy" class:Active={modalState}
	on:click={() => hdlModal()}
	title="Click to close">
	<div class="Contain">
		<h2>Data Policy</h2>
		<a href={indexedDBLink} title="Click to view tech" target="_blank">
			Bring and manage your own data
		</a>
		<code>No cookies, tracking, or data collection</code>
		<a href={githubLink} title="View deployment repository">
			View source code
		</a>
	</div>
</div>

<style lang=scss>
	.DataPolicy {
		display: none;
		top: 0;
		position: fixed;
		z-index: 5;
		height: 80vh;
		width: 100vw;
		
		&.Active {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		
		.Contain {
			background: rgba(20,22,28,1);
			width: 80vw;
			margin: calc(5em + 10vh) auto;
			border-radius: 1em;
			padding: 2em 0;
			border: 0.5em solid rgba(252,252,252,0.5);
			backdrop-filter: blur(3px);
			display: grid;
			text-align: center;
			height: 100%;
			max-height: 720px;
			max-width: 1024px;


			h2 {
				font-size: 3rem;
				line-height: 2.5rem;
				margin: 0.6rem 0 0 0;
				color: white;
			}
			a {
				color: white;
				font-size: 1.5rem;
				padding: 0 1.2rem;
				border: 1px solid rgba(252,252,252,0);
				max-width: 420px;
				margin: 0 auto;

				&:hover {
					border: 1px solid rgba(252,252,252,0.2);
				}
			}
			code {
				color: rgba(222,224,228,1);
				line-height: 2em;
				font-size: 1.25em;
				font-style: italic;
				cursor: no-drop;
			}
		}
	}

	.DataInfo {
		z-index: 1;
		position: fixed;
		display: flex;
		justify-content: center;
		bottom: 0;
		left: 1em;
		padding: 0.6em 0.5em;
		border-radius: 9px 9px 0 0;
		cursor: pointer;
		backdrop-filter: blur(24px);
		background: rgba(30,31,33,0.2);
		p {
			margin: 0;
			line-height: 40px;
			font-size: 1.3em;
			padding: 0 0.5em;
			color: rgba(212,216,219,1);
			text-shadow: 0 0 3px rgba(0,0,0,1);

		}
	} // DataPolicy
</style>
