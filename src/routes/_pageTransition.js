import { fly } from 'svelte/transition';
import { linear } from 'svelte/easing';

const shift = 40;

const defaultOptions = {
  delay: 300,
  duration: 300,
  easing: linear,
  opacity: 0,
  x: 0,
  y: shift,
};

export const fadeIn = (node) => fly(node, defaultOptions);
export const fadeOut = (node) => fly(node, {
  ...defaultOptions,
  delay: 0,
  y: -shift,
});
export const fadeRight = (node) => fly(node, {
  ...defaultOptions,
  delay: 0,
  x: shift,
  y: 0,
});
export const fadeLeft = (node) => fly(node, {
  ...defaultOptions,
  delay: 0,
  x: -shift,
  y: 0,
});
