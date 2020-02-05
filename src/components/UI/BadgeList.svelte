<script>
    export let badges = [];
</script>

{#if badges.length}
    <p class="badges flex">
        {#each badges as badge}
            <span class="badge">{badge}</span>
        {/each}
    </p>
{/if}

<style>
    .badges {
        flex-wrap: wrap; margin: 10px 0;
    }
    .badge {
        margin: 2px; padding: 5px 10px;
        background: var(--theme-grey-lightest); border-radius: 5px;
        color: var(--theme-grey);
    }
</style>
