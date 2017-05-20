import { IScepters } from 'models/scepters';
import { IRatings } from 'models/ratings';

export interface IStore {
  scepters: IScepters;
  ratings: IRatings;
};
