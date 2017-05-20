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
      <div className={style.Wrapper}>
        <div>
          <HeroScepter key={compare.scepterA.id} scepter={compare.scepterA} />
          <button className="btn btn-primary" onClick={vote.bind(null, compare.scepterA.id)}>Better</button>
        </div>
        <div>
          <HeroScepter key={compare.scepterB.id} scepter={compare.scepterB} />
          <button className="btn btn-primary" onClick={vote.bind(null, compare.scepterB.id)}>Better</button>
        </div>
        
      </div>
    );
  }
}

export {ScepterCompare}
