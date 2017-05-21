import * as React from 'react';
import { voteCompare, IVoteCompareAction } from 'modules/scepters';
import { IHeroScepter, ScepterId } from 'models/scepters';
import { IStore } from 'redux/Istore';
import { HeroScepter } from 'components/HeroScepter';
import { LeaderBoard } from 'containers';
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
        <header>
          <h2>Select which one is better</h2>
        </header>
        <div className={style.compare}>
          <HeroScepter className={style.compare__element}
            scepter={compare.scepterA}
            onClick={vote.bind(null, compare.scepterA.id, compare.scepterB.id)} />
          <HeroScepter className={style.compare__element}
            scepter={compare.scepterB}
            onClick={vote.bind(null, compare.scepterB.id, compare.scepterA.id)} />
        </div>
        <LeaderBoard />
      </div>
    );
  }
}

export { ScepterCompare }
