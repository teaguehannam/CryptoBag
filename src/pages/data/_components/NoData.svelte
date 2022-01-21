<!-- No data in IndexedDB -->
<script>
	import { metatags, goto } from '@roxi/routify'; 
	import { set } from 'idb-keyval';

	import { DataReady } from '#stores/DataReady.js';
	import { DbName } from '#stores/DbName.js';

	metatags.title = 'CryptoBag - Data';

	let files; // HTML input

	// Create table in IndexedDB
	function createDB(data) {
		const buffer = data;
		set($DbName, buffer).then(() => {
			DataReady.set('yes');
		}).catch((err) => {
			console.log('Data set error', err)
		});
	}

	// Turns file into array
	function StartUpload() {
		const uploadData = [];
		var reader = new FileReader();
		reader.addEventListener('load', function (e) {
			for (let row of parseCSV(e.target.result)) {
				uploadData.push(row);
			}
			createDB(uploadData); // Array to IndexedDB
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
	<div class="Contain">
		<input bind:files type="file" accept=".csv" on:change={StartUpload} />
	</div>
</div>


<style lang=scss>
	#UploadTrades {
		min-height: 100vh;
		display: flex;
		align-items: center;

		.Contain {
			display: grid;
			margin: 0 auto 40vh auto;

			h2 {
				color: rgba(233,234,232,0.3);
				font-weight: 300;
				padding: 0 0.8em;
				margin: 0;
				font-size: 1.25em;
				line-height: 2em;

			} // h2
			input[type=file] {
				background: rgba(29,39,44,1);
				transition: 0.1s background ease-out;
				cursor: pointer;
				color: rgb(249,249,249);
				border: unset;
				width: 80vw;
				max-width: 400px;
				font-size: 1.35em;
				line-height: 2em;
				letter-spacing: 1px;
				box-shadow: 0 0 2px 0 rgba(19,19,19,1);
				transition: 0.15s box-shadow ease-out;
				&:hover {
					background: rgba(32,45,54,1);
					box-shadow: 0 0 2px 3px rgba(119,119,119,0.2);
				}

			} // input
		} // Contain
	}
</style>
