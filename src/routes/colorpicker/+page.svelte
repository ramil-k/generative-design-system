<script>
	import Color from 'colorjs.io';
	import { onMount } from 'svelte';

	/** @type HTMLInputElement */
	let input;
	let input2;
	/** @type Color */
	let color;
	/** @type String */
	let colorOklch;

	let calculate = () => {
		color = new Color(input.value);

		colorOklch = color.to('oklch', {}).toString();

		colors = colors.map((c) => {
			/** @type Color */
			let c1 = calc(color, c.total, c.step, c.goalLightness);
			c.hsl = c1.to('hsl', {}).toString();
			c.rgb = c1.to('srgb', {}).toString();
			c.oklch = c1.to('oklch', {}).toString();
			c.color = c1;
			return c;
		});
	};
	/** @type String */
	let text1 = '#fff';
	/** @type String */
	let text2 = '#000';
	let calculateText = () => {
		let color = new Color(input2.value);

		text2 = color.to('oklch', {}).toString();
		color.oklch.l = 1 - color.oklch.l;
		text1 = color.to('oklch', {}).toString();
	};

	let calc = (color, total = 1, step = 0, goalLightness) => {
		let c = color.to('oklch');
		c.c = (c.c * (total - step)) / total;
		let lightnessPath = Number.isFinite(goalLightness) ? goalLightness - c.l : c.l;
		c.l = c.l + (lightnessPath * step * step) / total / total;
		return c;
	};
	let colors = [
		{ id: 25, total: 8, step: 7, goalLightness: 1 },
		{ id: 50, total: 8, step: 6, goalLightness: 1 },
		{ id: 100, total: 8, step: 5, goalLightness: 1 },
		{ id: 200, total: 8, step: 4, goalLightness: 1 },
		{ id: 300, total: 8, step: 3, goalLightness: 1 },
		{ id: 400, total: 8, step: 2, goalLightness: 1 },
		{ id: 500, total: 8, step: 1, goalLightness: 1 },
		{ id: 600, base: true },
		{ id: 700, total: 8, step: 1, goalLightness: 0 },
		{ id: 800, total: 8, step: 2, goalLightness: 0 },
		{ id: 900, total: 8, step: 3, goalLightness: 0 },
		{ id: 1000, total: 8, step: 4, goalLightness: 0 },
		{ id: 1100, total: 8, step: 5, goalLightness: 0 },
		{ id: 1200, total: 8, step: 6, goalLightness: 0 },
		{ id: 1300, total: 8, step: 7, goalLightness: 0 }
	];

	onMount(() => {
		calculate();
		calculateText();
	});
</script>

<input type="color" bind:this={input} on:change={calculate} on:blur={calculate} value="#3EA2CD" />
<input
	type="color"
	bind:this={input2}
	on:change={calculateText}
	on:blur={calculateText}
	value="#000"
/>

<pre>{color}</pre>
<pre>{colorOklch}</pre>
<pre>{text1}</pre>
<pre>{text2}</pre>
<table>
	{#each colors.filter(({ hsl }) => hsl && text1 && text2) as { total, step, base, id, hsl, oklch, rgb }}
		<tr
			style={`
			width: 10rem;
			height: 2rem;
			background-color: ${oklch};
			color: ${Color.contrastWCAG21(oklch, text1) > Color.contrastWCAG21(oklch, text2) ? text1 : text2}
		`}
		>
			<td>{base ? '➡️' : '⚪️'}</td>
			<td>{id}</td>
			<td>{total}</td>
			<td>{step}</td>
			<td>{hsl}</td>
			<td>{rgb}</td>
			<td>{oklch}</td>
			<td>
				{Color.contrastWCAG21(hsl, text1) > 2.9 ? '✅' : '❌'}
				{Color.contrastWCAG21(hsl, text1)}
			</td>
			<td>
				{Color.contrastWCAG21(hsl, text2) > 2.9 ? '✅' : '❌'}
				{Color.contrastWCAG21(hsl, text2)}
			</td>
		</tr>
	{/each}
</table>
