<script>
	let original = {
		'--gw-spinner-color': {
			type: 'color',
			defaultValue: '#000'
		},
		'--gw-spinner-size': {
			type: 'text',
			defaultValue: '80px'
		}
	};
	let ats = Object.entries(original);
	// ats.sort(([key1], [key2]) => key1 > key2 ? 1 : key2 > key1 ? -1 : 0);

	let args = JSON.stringify(
		Object.fromEntries(ats.map(([k, { defaultValue }]) => [k, defaultValue]))
		// null,
		// 2
	);
	let argTypes = JSON.stringify(
		Object.fromEntries(ats.map(([k, val]) => [k, { ...val, defaultValue: undefined }]))
		// null,
		// 2
	);
</script>

<div class="root">
	<pre>
args=&#123;{args}&#125;

argTypes=&#123;{argTypes}&#125;
    </pre>
</div>

<style>
	.root {
		font-family: 'fira code', monospace;
	}
</style>
