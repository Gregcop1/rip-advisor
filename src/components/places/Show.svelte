<script>
    import Card from "../UI/Card.svelte";
    import Rating from "./Rating.svelte";
    import BadgeList from "../UI/BadgeList.svelte";
    import {wishlist} from '../../stores/user';

    export let place;

    $: isInWishlist = $wishlist.includes(place.id)
</script>

<Card full
      noPaddingTop
      media={place.image}
      title={place.name}
      subtitle={place.location}
      actions={[
        {icon: `favorite${!isInWishlist ? '_border' : ''}`, label: `${!isInWishlist ? 'Ajouter aux' : 'Retirer des'} favoris`, onClick: () => wishlist.toggle(place.id)}
      ]}
>
    <div slot="title-end">
        <Rating notes={place.notes} />
    </div>
    {#if place.description}<p>{place.description}{/if}
    <BadgeList badges={place.tags} />
</Card>
