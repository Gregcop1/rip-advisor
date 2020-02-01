<script>
    let className;

    export {className as class};
</script>

<div class="card {className || ''}">
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
</div>

<style>
    .card {
        margin: 20px auto;
        padding: 20px;
        width: 88%;
        max-width: 500px;
        background: var(--theme-white); border-radius: 5px;
        box-shadow: 0 0 10px var(--theme-shadow);
        transition: box-shadow 200ms ease-in-out;
    }

    .elevation-1 { box-shadow: 0 0 2px var(--theme-shadow); }
    .elevation-2 { box-shadow: 0 0 4px var(--theme-shadow); }
    .elevation-3 { box-shadow: 0 0 6px var(--theme-shadow); }
    .elevation-4 { box-shadow: 0 0 8px var(--theme-shadow); }
</style>
