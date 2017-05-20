import * as React from 'react';
import { voteCompare, IVoteCompareAction } from 'modules/scepters';
import { IHeroScepter } from 'models/scepters';
import { IStore } from 'redux/Istore';
import { HeroScepter } from 'components/HeroScepter';
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
  const result = {
    scepterA: null,
    scepterB: null,
  };
  state.scepters.allScepters.forEach((scepter: IHeroScepter) => {
    if (scepter.id === state.scepters.currentCompare.scepterA) {
      result.scepterA = scepter;
    }
    if (scepter.id === state.scepters.currentCompare.scepterB) {
      result.scepterB = scepter;
    }
  });
  return result;
}

@connect(
  (state) => ({ compare: currentSelect(state) }),
  (dispatch) => ({
    vote: (id: string) => dispatch(voteCompare(id)),
  }),
)
class ScepterCompare extends React.Component<IProps, any> {

  public render() {

    const {compare, vote} = this.props;

    return (
      <div>
        <div className="row align-items-center hidden-sm-up">
          <div className="col-sm-12">Select which one is better</div>
        </div>
        <div className={`row`}>
          <div className="col-sm-5" onClick={vote.bind(null, compare.scepterA.id)}>
            <HeroScepter key={compare.scepterA.id} scepter={compare.scepterA} />
          </div>
          <div className={`${style.SelectIndicator} col-sm-2 hidden-xs-down`}>
            <div className={`${style.SelectIndicator__row} row align-items-center`}>
              <div className="col">Select which one is better</div>
            </div>
          </div>
          <div className="col-sm-5" onClick={vote.bind(null, compare.scepterB.id)}>
            <HeroScepter key={compare.scepterB.id} scepter={compare.scepterB} />
          </div>
        </div>
      </div>
    );
  }
}

export {ScepterCompare}
