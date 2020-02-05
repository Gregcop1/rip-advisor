<script>
    export let actions = [];
</script>

{#if actions && actions.length}
    <hr />
    <div class="footer">
        {#each actions as action}
            <button class:nude={!action.label} on:click={action.onClick}>
                {#if !!action.icon}<i class="material-icons">{action.icon}</i> {/if}
                {action.label}
            </button>
        {/each}
    </div>
{/if}

<style>
    hr {
        margin: 10px 0 10px;
        border: 0; border-bottom: 1px solid var(--theme-grey-lightest);
    }
    .footer {
        text-align: right;
    }
    button {
        padding: 5px 10px; border: 0; border-radius: 5px;
        background: var(--theme-primary-tint-dark);
        color: var(--theme-white);
        outline: none;
    }
</style>
