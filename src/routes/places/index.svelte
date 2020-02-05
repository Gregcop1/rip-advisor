<script context="module">
    export async function preload() {
        const res = await this.fetch('places.json');
        const places = await res.json();

        return { places }
    }
</script>

<script>
    export let places = [];

    import {fadeIn, fadeOut} from '../_pageTransition';
    import { title } from '../../stores/header';
    import List from "../../components/places/List.svelte";

    title.set('Lieux');
</script>

<div in:fadeIn out:fadeOut>
    <List places={places} />
</div>
