import { writable } from "svelte/store";

const USER_WHISHLIST = 'user/wishlist';

const createWishlist = () => {
  const defaultList = process.browser ? localStorage.getItem(USER_WHISHLIST) : null;
  const {subscribe, update} = writable(defaultList ? JSON.parse(defaultList) : []);

  return {
    subscribe,
    toggle: item => update(list => {
      let newList;
      if (list.includes(item)) {
        newList = list.filter(id => id !== item)
      } else {
        newList = [
          ...list,
          item
        ];
      }

      if (process.browser) {
        localStorage.setItem(USER_WHISHLIST, JSON.stringify(newList));
      }

      return newList;
    }),
  }
};

export const wishlist = createWishlist();
