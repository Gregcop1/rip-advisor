<script>
    import { title } from '../stores/header';
    import Logo from '../components/layout/Logo.svelte';

    title.set('');
</script>

<div class="content">
    <Logo />
</div>

<style>
    .content {
        position: absolute; top: 50%; left: 0; right: 0;
        transform: translateY(-50%);
        text-align: center;
    }
</style>
