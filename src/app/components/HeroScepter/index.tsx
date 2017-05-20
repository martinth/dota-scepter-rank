import * as React from 'react';
import { IHeroScepter } from 'models/scepters';

const style = require('./style.css');

interface IProps {
  scepter: IHeroScepter;
  onClick?: () => void;
  className?: string;
}

class HeroScepter extends React.Component<IProps, void> {
  public render() {
    const { scepter, onClick, className } = this.props;

    return (
      <div className={`card ${style.HeroScepter} ${className}`} onClick={onClick}>
        <img className="card-img-top" src={require(`./hero-images/${scepter.id}.png`)} alt={scepter.heroName} />
        <div className="card-block">
          <h4 className="card-title">{scepter.heroName}</h4>
          <ul>
            {scepter.details.map((detail, idx) => <li key={idx}>{detail}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export { HeroScepter }
