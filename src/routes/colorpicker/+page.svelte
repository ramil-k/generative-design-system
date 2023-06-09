<script>
    import Color from "colorjs.io";
    import {onMount} from "svelte";

    /** @type HTMLInputElement */
    let input;
    /** @type Color */
    let color;
    /** @type String */
    let colorOklch;

    let calculate = () => {
        color = new Color(input.value);

        colorOklch = color.to("oklch", {}).toString();

        colors = colors.map((c) => {
            /** @type Color */
            let c1 = c.calc(color);
            c.hsl = c1.to('hsl', {}).toString();
            c.rgb = c1.to('srgb', {}).toString();
            c.oklch = c1.to('oklch', {}).toString();
            c.color = c1;
            return c;
        });


    }
    let colors = [
        {
            id: 25, calc: (color) => {
                let c = color.to("oklch");
                c.c = c.c * 1 / 8
                c.l = c.l + ( (1-c.l) * 7 / 8)
                return c;
            }
        },
        {
            id: 50, calc: (color) => {
                let c = color.to("oklch");
                c.c = c.c * 2 / 8
                c.l = c.l + ( (1-c.l) * 6 / 8)
                return c;
            }
        },
        {
            id: 100, calc: (color) => {
                let c = color.to("oklch");
                c.c = c.c * 3 / 8
                c.l = c.l + ( (1-c.l) * 5 / 8)
                return c;
            }
        },
        {
            id: 200, calc: (color) => {
                let c = color.to("oklch");
                c.c = c.c * 4 / 8
                c.l = c.l + ( (1-c.l) * 4 / 8)
                return c;
            }
        },
        {
            id: 300, calc: (color) => {
                let c = color.to("oklch");
                c.c = c.c * 5 / 8
                c.l = c.l + ( (1-c.l) * 3 / 8)
                return c;
            }
        },
        {
            id: 400, calc: (color) => {
                let c = color.to("oklch");
                c.c = c.c * 6 / 8
                c.l = c.l + ( (1-c.l) * 2 / 8)
                return c;
            }
        },
        {
            id: 500, calc: (color) => {
                let c = color.to("oklch");
                c.c = c.c * 7 / 8
                c.l = c.l + ( (1-c.l) * 1 / 8)
                return c;
            }
        },
        {id: 600, calc: (color) => color.to("oklch")}, // base
        {
            id: 700, calc: (color) => {
                let c = color.to("oklch");
                c.c = c.c * 7 / 8
                c.l = c.l * 7 / 8
                return c;
            }
        },
        {
            id: 800, calc: (color) => {
                let c = color.to("oklch");
                c.c = c.c * 6 / 8
                c.l = c.l * 6 / 8
                return c;
            }
        },
        {
            id: 900, calc: (color) => {
                let c = color.to("oklch");
                c.c = c.c * 5 / 8
                c.l = c.l * 5 / 8
                return c;
            }
        },
        {
            id: 1000, calc: (color) => {
                let c = color.to("oklch");
                c.c = c.c * 4 / 8
                c.l = c.l * 4 / 8
                return c;
            }
        },
        {
            id: 1100, calc: (color) => {
                let c = color.to("oklch");
                c.c = c.c * 3 / 8
                c.l = c.l * 3 / 8
                return c;
            }
        },
        {
            id: 1200, calc: (color) => {
                let c = color.to("oklch");
                c.c = c.c * 2 / 8
                c.l = c.l * 2 / 8
                return c;
            }
        },
        {
            id: 1300, calc: (color) => {
                let c = color.to("oklch");
                c.c = c.c * 1 / 8
                c.l = c.l * 1 / 8
                return c;
            }
        },
    ];

    // calculate();
    onMount(calculate);
</script>

<input type="color" bind:this={input} on:change={calculate} on:blur={calculate} value="#3EA2CD"/>

<pre>{color}</pre>
<pre>{colorOklch}</pre>
<table>
    {#each colors as {id, hsl, oklch, rgb}}
        <tr>
            <td>{id}</td>
            <td style="width: 10rem; height: 2rem; background-color: {hsl}"></td>
            <td>{hsl}</td>
            <td>{rgb}</td>
            <td>{oklch}</td>
        </tr>
    {/each}
</table>
