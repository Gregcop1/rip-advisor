<script>
    // import places from '../../data/places';
    import {fadeIn, fadeOut} from '../_pageTransition';
    import { title } from '../../stores/header';
    import List from "../../components/places/List.svelte";

    title.set('Lieux');
    const places = [
        {
            "id": 1,
            "name": "Crématorium",
            "location": "Vendin le Vieil",
            "description": "Premier crématorium construit dans le Pas-de-Calais, le crématorium de Vendin vous accueil dans un ambiance chaleureuse et respectueuse.",
            "image": "/places/loos.jpg",
            "tags": ["jardin du souvenir", "respect"],
            "note": 4
        },
        {
            "id": 2,
            "name": "Terrasse de Xavier Dupont de Ligones",
            "location": "Nantes",
            "description": "",
            "image": "/places/ligones.jpg",
            "tags": ["ensoleillé", "boisé", "proprio absent"],
            "note": 1
        },
        {
            "id": 3,
            "name": "Funérarium",
            "location": "Le Havre",
            "description": "",
            "image": "/places/le-havre.jpg",
            "tags": ["ensoleillé", "calme", "moderne"],
            "note": 3
        },
        {
            "id": 4,
            "name": "Chambre funéraire",
            "location": "Lasalle",
            "description": "",
            "image": "/places/lasalle.jpg",
            "tags": ["cosy", "calme"],
            "note": 4
        }
    ];
</script>

<div in:fadeIn out:fadeOut>
    <List places={places} />
</div>
