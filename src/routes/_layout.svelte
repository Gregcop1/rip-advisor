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
        class:withoutPadding={$page.path.startsWith('/places/')}
        in:fly={{ delay: 1000, duration: 2000, y: 40, opacity: 0 }}
        out:fly={{ delay: 1000, duration: 2000, y: -40, opacity: 0 }}
>
	<slot></slot>
</main>
<Nav />

<style>
	main {
	    position: relative; padding: 20px;
	    height: calc(100vh - var(--header-size));
	}

    .withScroll {
		overflow: auto;
    }

	.withoutPadding {
		padding: 0;
	}

	.white {
        background: var(--theme-white);
    }
</style>
