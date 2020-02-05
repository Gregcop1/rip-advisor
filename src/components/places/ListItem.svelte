<script>
    import Card from "../UI/Card.svelte";

    export let place;
    let active = false;
    const toggle = () => active = !active;
</script>

<Card   on:click={toggle}
        class={active ? 'elevation-2' : ''}
        media={place.image}
        title={place.name}
        subtitle={place.location}
        noPadding
/>
