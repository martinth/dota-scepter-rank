import { IRatings } from 'models/ratings';
import { VOTE_COMPARE, IVoteCompareAction } from '../scepters';
import * as eloRank from 'elo-rank';

const elo = eloRank(15);

export function ratingsReducer(state: IRatings = {}, action?: IVoteCompareAction): IRatings {

  if (!action) {
    return state;
  }

  switch (action.type) {
    case VOTE_COMPARE:

      const winner = state[action.payload.winner] ? state[action.payload.winner] : 1000;
      const looser = state[action.payload.looser] ? state[action.payload.looser] : 1000;

      const expectedScoreWinner = elo.getExpected(winner, looser);
      const expectedScoreLooser = elo.getExpected(looser, winner);

      const updates = {};
      updates[action.payload.winner] = elo.updateRating(expectedScoreWinner, 1, winner);
      updates[action.payload.looser] = elo.updateRating(expectedScoreLooser, 0, looser);

      return {
        ...state,
        ...updates,
      };
    default:
      return state;
  }
}
