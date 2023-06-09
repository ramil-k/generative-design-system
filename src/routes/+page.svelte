<script>
	import Node from '../components/Node.svelte';
	export let data;
</script>

<div class="root">
	<Node node={data} />
</div>

<style>
	.root {
		font-family: 'fira code', monospace;
	}
</style>
