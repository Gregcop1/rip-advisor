import { fly } from 'svelte/transition';
import { linear } from 'svelte/easing';

const defaultOptions = {
  delay: 300,
  duration: 300,
  easing: linear,
  opacity: 0,
  x: 0,
  y: 40,
};

export const fadeIn = (node) => fly(node, defaultOptions);
export const fadeOut = (node) => fly(node, {
  ...defaultOptions,
  delay: 0,
  y: -defaultOptions.y,
});
