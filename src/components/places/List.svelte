<script>
    import ListItem from "./ListItem.svelte";

    export let places;
</script>

<div class="list">
    {#each places as place, index (place.id)}
        <ListItem {place} />
    {/each}
</div>
