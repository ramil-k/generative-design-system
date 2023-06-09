<script>
	export let node;
	let visible = true;
</script>

<div class="root">
	<div class="path" class:folded={!visible} class:empty={!node.children}>
		<button class="title" on:click={() => (visible = !visible)}>+</button>
		{node.path}
	</div>
	{#if node.children && visible}
		<div class="children">
			{#each node.children as child}
				<svelte:self node={child} />
			{/each}
		</div>
	{/if}
</div>

<style>
	.root {
		display: flex;
		flex-direction: column;
		box-shadow: 0 1px 0 0 #e1eae6;
		justify-content: start;
		align-items: stretch;
	}

	.title {
		/*height: 2rem;*/
		appearance: none;
		border: none;
		/*min-width: 80px;*/
		text-align: start;
		background: transparent;
		/*background: aquamarine;*/
	}

	.path {
		height: 2rem;
		line-height: 2rem;
		background: aquamarine;
	}

	.folded {
		background: #6dd26d;
	}

	.empty {
		background: #efe3cd;
	}

	.children {
		/*margin-left: 50px;*/
		/*flex: 1 1 90%;*/
		display: flex;
		flex-direction: column;
		/*gap: 5px;*/
	}
</style>
