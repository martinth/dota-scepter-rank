import * as React from 'react';
import { IHeroScepter } from 'models/scepters';

const style = require('./style.css');

interface IProps {
  scepter: IHeroScepter;
}

class HeroScepter extends React.Component<IProps, void> {
  public render() {
    const { scepter } = this.props;

    return (
      <div className={style.HeroScepter}>
        <h3>{scepter.heroName}</h3>
        <img alt={scepter.heroName} src={require(`./hero-images/${scepter.id}.png`)} />
        <ul>
          {scepter.details.map((detail, idx) => <li key={idx}>{detail}</li>)}
        </ul>
      </div>
    );
  }
}

export { HeroScepter }
