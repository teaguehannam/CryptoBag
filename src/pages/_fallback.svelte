
<script>
	import { url } from '@roxi/routify'
</script>


<div class="e404">
	<a href={$url('../')} class="Huge">404</a>
</div>


<style lang=scss>
	.e404 {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		.Huge {
			font-size: 12rem;
		}
	}
</style>
