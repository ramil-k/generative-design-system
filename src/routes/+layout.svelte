<ul>
    <li><a href="/">root</a></li>
    <li><a href="/args">args</a></li>
    <li><a href="/colorpicker">colorpicker</a></li>
</ul>

<slot />

<style>
    ul {
        display: flex;
        gap: 2rem;
        list-style: none;
    }
    li {
        flex: 1 1 100%;
        appearance: none;
    }
</style>
