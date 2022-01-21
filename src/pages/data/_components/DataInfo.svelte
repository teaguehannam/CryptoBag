<script>
	let modalState = false;

	function hdlModal() {
		modalState = !modalState;
		console.log(modalState)
	}
</script>


<div class="DataInfo" on:click={() => hdlModal()}>
	<img src="./img/data.png" alt="Data" />
	<p>Data Policy</p>
</div>

<div class="DataPolicy" class:Active={modalState}
	on:click={() => hdlModal()}>
	<div class="Contain">
		<h2>Data Policy</h2>
		<p>Bring your own data</p>
	</div>
</div>

<style lang=scss>
	.DataPolicy {
		display: none;
		&.Active {
			display: grid;
		}
		top: 0;
		position: fixed;
		z-index: 5;
		height: 80vh;
		width: 100vw;
		.Contain {
			background: rgba(20,22,28,1);
			width: 80vw;
			margin: 5em auto;
			border-radius: 1em;
			border: 0.5em solid rgba(252,252,252,0.5);
			backdrop-filter: blur(3px);
			display: grid;
			text-align: center;

			h2 {
				font-size: 5em;
				color: white;
			}
			p {
				color: white;
				font-size: 2em;
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
