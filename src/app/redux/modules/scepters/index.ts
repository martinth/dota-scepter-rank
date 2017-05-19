import { IHeroScepters, IHeroScepter } from 'models/scepters';

/**
 * Slugify text.
 * Source: https://gist.github.com/mathewbyrne/1280286
 */
function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

/** Scepters: Initial State */
export const initialState: IHeroScepters = require('./scepter-data.json')
    .map((item) => {
        return {
            id: slugify(item.name),
            heroName: item.name,
            details: item.details,
        };
    }).reduce((state: IHeroScepters, item: IHeroScepter) => {
        state[item.id] = item;
        return state;
    }, {});

export function sceptersReducer(_: any, action?: any) {
  switch (action.type) {
    default:
      return initialState; // TODO: is there a better way?
  }
}
