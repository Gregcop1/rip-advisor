<script>
    import { goto } from '@sapper/app';
    import Card from "../UI/Card.svelte";

    export let place;

    const goToSingle = () => {
        goto(`places/${place.slug}`);
    };
</script>

<Card   on:click={goToSingle}
        media={place.image}
        title={place.name}
        subtitle={place.location}
        noPadding
>
    <button slot="title-end" class="button-icon material-icons">navigate_next</button>
</Card>
