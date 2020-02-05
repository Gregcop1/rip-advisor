<script>
	import {fadeIn, fadeOut} from './_pageTransition';
	import { title } from '../stores/header';
	import Card from '../components/UI/Card.svelte';

	title.set('À propos');
</script>

<div class="flex flex-column" in:fadeIn out:fadeOut>
	<div class="flex-empty"/>
	<div class="content">
		<Card>
			<img src="/logo.svg" width="70%" alt= ""/>
			<h2><strong>r.i.p. advisor</strong>, c'est votre compagnon de fin de vie.</h2>
			<p>On ne sait jamais quand la mort vient nous chercher alors autant se préparer à l'accueillir.</p>
		</Card>
	</div>
	<div class="flex-empty"/>
</div>

<style>
	.content {
		text-align: center;
	}

	h2 {
		font-size: 1.8rem; font-weight: 300;
	}
</style>
