<script>
    import { stores } from '@sapper/app';
    import { fly } from 'svelte/transition'
    import { title } from '../stores/header';
	import Header from '../components/layout/Header.svelte';
	import Nav from '../components/layout/Nav.svelte';

	const { page } = stores();
</script>

<svelte:head>
    <title>{$title || 'r.i.p. advisor'}</title>
</svelte:head>

<Header />

<main
        class:white={$page.path === '/'}
        class:withScroll={$page.path === '/places'}
        in:fly={{ delay: 1000, duration: 2000, y: 40, opacity: 0 }}
        out:fly={{ delay: 1000, duration: 2000, y: -40, opacity: 0 }}
>
	<slot></slot>
</main>
<Nav />

<style>
    :global(*) {
        box-sizing: border-box;
    }

    :global(body) {
        margin: 0; padding: 0;
        background-color: var(--theme-primary-tint);
        font-family: Roboto; color: var(--theme-text-color);
    }

    :global(img, svg) {
        max-width: 100%;
        height: auto;
    }

    :global(.material-icons) {
        vertical-align: middle;
    }

    :global(.flex) {
        display: flex;
    }

    :global(.flex-column) {
        flex-direction: column;
        height: 100%;
    }

    :global(.flex-empty) {
        flex: 1;
    }

	main {
	    position: relative; padding: 20px;
	    height: calc(100vh - var(--header-size));
	}

    .withScroll {
		overflow: auto;
    }

	.white {
        background: var(--theme-white);
    }
</style>
