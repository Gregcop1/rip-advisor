<script>
    import { title } from '../../stores/header';
    import { display } from '../../stores/menu';
</script>

<section class="main-header">
    <div class="actions">
        <button
            on:click={display.toggle}
            class="material-icons button-icon">menu</button>
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
        padding: 5px;
        background: none; border: 0; outline: 0;
        color: var(--theme-primary);
        transition: color 200ms ease-in-out;
    }

    .button-icon:focus {
        color: var(--theme-primary-tint);
    }

    h1 {
        flex: 1;
        margin: 0;
        color: var(--theme-primary); font-size: 1.4rem;
    }
</style>
