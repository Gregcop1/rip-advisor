<script>
    export let notes;

    const max = 5;

    $: average = notes.length ? notes.reduce((sum, current) => sum + current, 0) / notes.length : 0;
    $: full = Math.floor(average);
    $: hasHalf = (average - full) > .5
</script>

<div class="rating">
    <p class="empty-stars">
        {#each Array(max) as _, i}
            <i class="material-icons">star_border</i>
        {/each}
    </p>
    {#if full}
        <p class="filled-stars">
        {#each Array(full) as _, i}
            <i class="material-icons">star</i>
        {/each}
        {#if hasHalf}
            <i class="material-icons">star_half</i>
        {/if}
        </p>
    {/if}
</div>

<style>
    .rating {
        position: relative;
    }
    p {
        display: flex; margin: 0;
        color: var(--theme-orange);
    }
    .filled-stars {
        position: absolute; top: 0; left: 0;
    }
</style>
