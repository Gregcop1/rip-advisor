<script>
    let className = '';

    export {className as class};
    export let noPadding = false;
    export let noPaddingTop = false;
    export let noPaddingBottom = false;
    export let media = null;
    export let title = null;
    export let subtitle = null;
</script>


<div class="card {className}" class:noPadding class:noPaddingTop class:noPaddingBottom on:click on:mouseover on:mouseout>
    {#if media}
        <div class="media">
            <img src={media} alt="" />
        </div>
    {/if}
    {#if title || subtitle}
        <div class="header">

            {#if title}<h2>{title}</h2>{/if}
            {#if subtitle}<h3>{subtitle}</h3>{/if}
        </div>
    {/if}
    <div class="content">
        <slot></slot>
    </div>
    <slot name="footer"></slot>
</div>

<style>
    .card {
        margin: 40px auto;
        padding: 10px 20px;
        width: 88%;
        max-width: 460px;
        background: var(--theme-white); border-radius: 5px;
        box-shadow: 0 6px 10px var(--theme-shadow);
        transition: box-shadow 200ms ease-in-out;
    }

    .noPadding {
        padding-top: 0; padding-bottom: 0;
    }

    .noPaddingTop {
        padding-top: 0;
    }

    .noPaddingBottom {
        padding-bottom: 0;
    }

    .media {
        display: block;
        margin-left: -20px; margin-right: -20px;
    }

    .media img {
        border-radius: 5px 5px 0 0;
    }

    .header {
        padding: 10px 0;
    }

    h2, h3 {
        margin: 0;
    }

    h2 {
        font-weight: 500;
    }

    h3 {
        color: var(--theme-grey); font-size: 1rem;
        font-weight: 300;
    }

    .content :global(:first-child) {
        margin-top: 0;
    }

    .content :global(:last-child) {
        margin-bottom: 0;
    }

    .elevation-1 { box-shadow: 0 1px 3px var(--theme-shadow); }
    .elevation-2 { box-shadow: 0 3px 5px var(--theme-shadow); }
    .elevation-3 { box-shadow: 0 4px 6px var(--theme-shadow); }
    .elevation-4 { box-shadow: 0 5px 8px var(--theme-shadow); }
</style>
