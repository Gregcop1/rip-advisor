<script context="module">
    export async function preload(page) {
        const {slug} = page.params;

        const res = await this.fetch(`/places/${slug}.json`);
        const place = await res.json();

        return {place};
    }
</script>

<script>
    import {onDestroy} from 'svelte'
    import { fadeIn, fadeOut } from '../_pageTransition';
    import { backLink, title } from '../../stores/header';
    import Show from "../../components/places/Show.svelte";

    export let place;

    backLink.set('/places');
    title.set(place.name);

    onDestroy(() => {
      backLink.set(null);
    })
</script>

<div in:fadeIn out:fadeOut>
    <Show {place}/>
</div>
