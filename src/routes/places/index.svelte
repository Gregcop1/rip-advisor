<script>
    import places from '../../data/places';
    import { title } from '../../stores/header';
    import List from "../../components/places/List.svelte";

    title.set('Lieux');
</script>

<List places={places} />
