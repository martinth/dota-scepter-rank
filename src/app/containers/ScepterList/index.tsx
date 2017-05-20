import * as React from 'react';
import { IHeroScepter } from 'models/scepters';
import { IStore } from 'redux/Istore';
import { HeroScepter } from 'components/HeroScepter';
const { connect } = require('react-redux');
const style = require('./style.css');

interface IProps {
  scepters: IHeroScepter[];
}

@connect(
  (state: IStore): IProps => ({ scepters: state.scepters.allScepters }),
)
class ScepterList extends React.Component<IProps, any> {

  public render() {
    const { scepters } = this.props;

    const list = Object.keys(scepters).map((id: string) => {
      return <HeroScepter key={id} scepter={scepters[id]} />;
    });

    return (
      <div className={style.ScepterList}>
        <h4>Hero List</h4>
        <div className={style.ListWrapper}>
          {list}
        </div>
      </div>
    );
  }
}

export {ScepterList}
