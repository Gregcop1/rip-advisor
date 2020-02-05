<script>
    import { backLink, title } from '../../stores/header';
    import { display } from '../../stores/menu';
</script>

<section class="main-header">
    <div class="actions">
        {#if !!$backLink}
            <a href={$backLink}
                    class="material-icons button-icon">navigate_before</a>
        {:else}
            <button
                on:click={display.toggle}
                class="material-icons button-icon">menu</button>
        {/if}
    </div>
    <h1>{$title}</h1>
</section>

<style>
    .main-header {
        display: flex; align-items: center;
        padding: 10px 10px; height: var(--header-size);
        background: var(--theme-white);
    }

    .actions {
        margin-right: 15px;
    }

    .button-icon {
        color: var(--theme-primary);
        transition: color 200ms ease-in-out;
    }

    .button-icon:focus {
        color: var(--theme-primary-tint);
    }

    h1 {
        flex: 1;
        margin: 0;
        overflow: hidden; text-overflow: ellipsis;
        color: var(--theme-primary); font-size: 1.4rem; white-space: nowrap;
    }
</style>
