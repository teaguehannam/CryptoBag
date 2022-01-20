<script>
	let files;
	let uploadData = [];
	function StartUpload() {
		var reader = new FileReader();
		reader.addEventListener('load', function (e) {
			for (let row of parseCSV(e.target.result)) {
				uploadData.push(row);
			}
			// after parsed data into uploadData;
			console.log(uploadData);
		})
		reader.readAsText(files[0]);
	}

	function * parseCSV(str) {
		for (var quote = 0, arr = [], row = 0, col = 0, c = 0; c < str.length; c++) {
			var cc = str[c], nc = str[c+1];
			arr[col] = arr[col] || '';
			cc == '"' && quote && nc == '"' ? ( arr[col] += cc, ++c ) :
			cc == '"' ? ( quote = !quote ) :
			cc == ',' && !quote ? ( ++col ) :
			cc == '\r' && nc == '\n' && !quote ? ( yield arr, col = 0, arr = [], ++c ) :
			(cc == '\n' || cc == '\r') && !quote ? ( yield arr, col = 0, arr = [] ) :
			(arr[col] += cc)
		}
		arr.length && (yield arr)
	}
</script>


<div id="UploadTrades">
	<h2>Add trade data</h2>
	<input bind:files 
		type="file" accept=".csv" on:change={StartUpload} />
</div>
{#if files && files[0]}
	<p>Data loaded</p>
{/if}

<style lang=scss>
	#UploadTrades {
		max-width: 800px;
		margin: 2em auto;
		display: flex;
		justify-content: space-evenly;

		h2 {
			color: rgba(33,34,32,1);
			font-weight: 300;
			padding: 0 0.8em;
			margin: 0;
			font-size: 2em;
			line-height: 2em

		} // h2
		input {
			border: unset;
			line-height: 2em;
			cursor: pointer;
			box-shadow: 0 0 2px 0 rgba(19,19,19,0.1);
			transition: 0.15s box-shadow ease-out;
			&:hover {
				box-shadow: 0 0 2px 0 rgba(19,19,19,1);
			}

		} // input
	}
</style>
