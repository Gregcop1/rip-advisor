<script>
    import placeData from '../../data/places';
    import {fadeIn, fadeOut} from '../_pageTransition';
    import { title } from '../../stores/header';
    import List from "../../components/places/List.svelte";

    const places = placeData;

    title.set('Lieux');
</script>

<div in:fadeIn out:fadeOut>
    <List places={places} />
</div>
