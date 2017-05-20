import { expect } from 'chai';
import * as scepters from '../scepters';
import * as ratings from './';

describe('ratingsReducer', () => {

  describe('inital state', () => {
    it('should be empty', () => {
      const initalState = ratings.ratingsReducer();
      expect(Object.keys(initalState)).to.have.lengthOf(0);
    });
  });

  describe('voteCompare action', () => {

    it('should add scores where the winner is higher then the looser', () => {
      const [mockWinner, mockLooser] = ['A', 'B'];
      const state = ratings.ratingsReducer({}, scepters.voteCompare(mockWinner, mockLooser));
      expect(state[mockWinner]).to.be.greaterThan(state[mockLooser]);
    });

    it('should increase the score for a leader less then for a looser when he wins', () => {
      const [leader, trailer] = ['A', 'B'];

      const stateAfterLeaderWon = ratings.ratingsReducer({
        leader: 2000,
        trailer: 1000,
      }, scepters.voteCompare(leader, trailer));

      const stateAfterLeaderLost = ratings.ratingsReducer({
        leader: 2000,
        trailer: 1000,
      }, scepters.voteCompare(trailer, leader));

      const leaderGain =  stateAfterLeaderWon[leader] - 2000;
      const trailerGain = stateAfterLeaderLost[trailer] - 1000;

      expect(leaderGain).to.be.lessThan(trailerGain);

    });
  });
});
