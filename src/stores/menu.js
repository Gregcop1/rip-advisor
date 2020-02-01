import { writable } from "svelte/store";

const createDisplay = () => {
  const { subscribe, update } = writable(false);

  return {
    subscribe,
    toggle: () => update(n => !n),
  }
};

export const display = createDisplay();
