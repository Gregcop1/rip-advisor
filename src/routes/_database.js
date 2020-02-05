import placeList from '../data/places';

const delay = 500;

const findAll = (list) => new Promise((success) => {
  return setTimeout(() => success(list), delay);
});

const findBySlug = (list, slug) => new Promise((success, reject) => {
  return setTimeout(() => {
    const result = list.find(item => item.slug === slug);

    if (result) {
      return success(result);
    }

    return reject(new Error('Not Found'));
  }, delay);
});

export default {
  places: {
    findAll: () => findAll(placeList),
    findBySlug: (slug) => findBySlug(placeList, slug),
  }
}
