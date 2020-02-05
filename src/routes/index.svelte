<script>
    import {fadeIn, fadeOut} from './_pageTransition';
    import { title } from '../stores/header';
    import Logo from '../components/layout/Logo.svelte';

    title.set('');
</script>

<div class="flex flex-column" in:fadeIn out:fadeOut>
    <div class="flex-fill"/>
    <div class="content">
        <Logo />
    </div>
    <div class="flex-fill"/>
</div>

<style>
    .content {
        text-align: center;
    }
</style>
