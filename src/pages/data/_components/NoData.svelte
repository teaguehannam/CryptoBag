<!-- No data in IndexedDB, create Table from CSV -->
<script>
	import { writable } from 'svelte/store';
	import { metatags, goto, url } from '@roxi/routify'; 
	import { set } from 'idb-keyval';

	import { DataReady } from '#stores/DataReady.js';
	import { DbName } from '#stores/DbName.js';
	import { TradeSchema } from '#stores/TradeSchema.js';

	import DataInfo from './DataInfo.svelte';

	let files; // HTML input

	// Create table in IndexedDB
	function createDB(trades) {
		const buffer = [];
		// Serialize
		trades.forEach(trade => {
			let row = {};
			$TradeSchema.forEach(column => {
				row[column.name] = trade[column.id];
			});
			buffer.push(row)
		})
		// remove header
		buffer.shift(); 
		// Set IndexedDB
		set($DbName, buffer).then(() => {
			// Swap NoData for ShowData
			DataReady.set('yes');
		}).catch((err) => {
			console.log('Data set error', err)
		});
	}

	// Turn file into array
	function StartUpload() {
		const trades = [];
		var reader = new FileReader();
		reader.addEventListener('load', function (e) {
			for (let row of parseCSV(e.target.result)) {
				trades.push(row);
			}
			createDB(trades); // Create table in IndexedDB
		})
		reader.readAsText(files[0]);
	}
	// Generate Object from CSV row
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

	metatags.title = 'CryptoBag - Data';
</script>


<div id="UploadTrades">
	<div class="Contain">
		<input bind:files type="file" accept=".csv" on:change={StartUpload} />
	</div>
</div>

<DataInfo />


<style lang=scss>
	#UploadTrades {
		min-height: 80vh;
		display: flex;
		align-items: center;

		.Contain {
			display: grid;
			margin: 0 auto 40vh auto;

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
