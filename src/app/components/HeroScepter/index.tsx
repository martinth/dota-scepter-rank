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
      <div className={`${style.card} ${className}`} onClick={onClick}>
        <div className={style.card__header}>
          {scepter.heroName}
        </div>
        <div className={style.card__image}>
          <img src={require(`./hero-images/${scepter.id}.png`)} alt={scepter.heroName} />
        </div>
        <div className={style.card__content}>
          <div className={style.card__text}>
            <ul>
              {scepter.details.map((detail, idx) => <li key={idx}>{detail}</li>)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export { HeroScepter }
