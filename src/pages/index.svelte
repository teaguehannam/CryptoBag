<script>
	import { metatags } from '@roxi/routify'
	
	metatags.title = 'CryptoBag'
	metatags.description = 'Device side data and analytics'

	let localDB;
	// DB Check
	if (!('indexedDB' in window)) {
		console.log('Device DB not found');
		localDB = IDBIndex.getAll();
		console.log('set localDB to', DB);
	} else {
		console.log('Device DB:', window.indexedDB)
	}
	// endof DB Check

</script>


<div id="Index">
	<h1>This is <code>/index</code></h1>
</div>


<style lang=scss>
	#Index {
		margin: 20vh 0;
		h1 {
			margin: 0;
			text-align: center;
			font-size: 3em;
		}
	}
</style>
