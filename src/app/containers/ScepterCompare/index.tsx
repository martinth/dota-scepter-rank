import * as React from 'react';
import { voteCompare, IVoteCompareAction } from 'modules/scepters';
import { IHeroScepter, ScepterId } from 'models/scepters';
import { IStore } from 'redux/Istore';
import { HeroScepter } from 'components/HeroScepter';
import * as _ from 'lodash';
const { connect } = require('react-redux');

const style = require('./style.css');

interface IProps {
  compare: {
    scepterA: IHeroScepter;
    scepterB: IHeroScepter;
  };
  vote: Redux.ActionCreator<IVoteCompareAction>;
}

/** extract the current selection from the store */
function currentSelect(state: IStore): Partial<IProps> {
  return _.mapValues(state.scepters.currentCompare, (id) => {
    return _.find(state.scepters.allScepters, (scepter: IHeroScepter) => scepter.id === id);
  });
}

@connect(
  (state) => ({ compare: currentSelect(state) }),
  (dispatch) => ({
    vote: (winner: ScepterId, looser: ScepterId) => dispatch(voteCompare(winner, looser)),
  }),
)
class ScepterCompare extends React.Component<IProps, any> {

  public render() {
    const { compare, vote } = this.props;

    return (
      <div>
        <div className="row align-items-center hidden-sm-up">
          <div className="col-sm-12">Select which one is better</div>
        </div>
        <div className={`row`}>
          <HeroScepter className={`${style.VoteCard} col-sm-5`}
            scepter={compare.scepterA}
            onClick={vote.bind(null, compare.scepterA.id, compare.scepterB.id)} />
          <div className={`${style.SelectIndicator} col-sm-2 hidden-xs-down`}>
            <div className={`${style.SelectIndicator__row} row align-items-center`}>
              <div className="col">Select which one is better</div>
            </div>
          </div>
          <HeroScepter className={`${style.VoteCard} col-sm-5`}
            scepter={compare.scepterB}
            onClick={vote.bind(null, compare.scepterB.id, compare.scepterA.id)} />
        </div>
      </div>
    );
  }
}

export { ScepterCompare }
