<script>
    import { fade, fly } from 'svelte/transition';
    import { display } from '../../stores/menu';
</script>

{#if $display}
<div
    class="overlay"
    in:fade="{{ duration: 300 }}"
    out:fade="{{ duration: 300 }}"
    on:click={display.toggle}
    >
    <nav
        class="sidebar"
        in:fly="{{ duration: 300, x: -300 }}"
        out:fly="{{ duration: 300, x: -300 }}"
    >
        <h1>r.i.p. advisor</h1>
        <ul>
            <li><a href='.'><i class="material-icons">home</i> Accueil</a></li>
            <li><a href='places'><i class="material-icons">place</i> Lieux</a></li>
            <li><a href='about'><i class="material-icons">info</i> À propos</a></li>
        </ul>
    </nav>
</div>
{/if}

<style>
.overlay {
    position: fixed; top: 0; bottom: 0; left: 0; right: 0;
    background: var(--theme-overlay);
}

.sidebar {
    position: fixed; top: 0; bottom: 0; left: 0; overflow: hidden;
    width: 300px;
    background: var(--theme-white);
}

h1 {
    margin: 0; padding: 10px 20px;
    background: var(--theme-primary); box-shadow: 2px 0px 5px var(--theme-shadow);
    color: var(--theme-white); font-size: 1.4rem; text-align: center;
}

ul {
    margin: 20px 0 0; padding: 0;
}

li { margin: 0; }

li a {
    display: block;
    padding: 10px 20px;
    background: transparent;
    transition: background 200ms ease-in-out;
    color: var(--theme-black); text-decoration: none;
}
li a:hover {
    background: var(--theme-grey-light);
}
li .material-icons {
    margin-right: 10px;
    color: var(--theme-grey);
}

</style>
