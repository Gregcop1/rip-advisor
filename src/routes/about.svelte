<script>
	import { title } from '../stores/header';
	import Card from '../components/UI/Card.svelte';

	title.set('À propos');
</script>

<div class="container">
	<Card>
		<img src="/logo.svg" width="70%" alt= ""/>
		<h2><strong>r.i.p. advisor</strong>, c'est votre compagnon de fin de vie.</h2>
		<p>On ne sait jamais quand la mort viendra vous chercher alors autant se préparer au plus vite.</p>
	</Card>
</div>

<style>
	.container {
		position: absolute; top: 50%; left: 0; right: 0; transform: translateY(-50%);
		text-align: center;
	}

	h2 {
		font-size: 1.8rem; font-weight: 300;
	}
</style>
