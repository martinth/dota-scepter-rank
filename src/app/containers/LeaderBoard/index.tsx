import * as React from 'react';
import { IHeroScepter } from 'models/scepters';
import { IRatings } from 'models/ratings';
import { IStore } from 'redux/Istore';
import * as _ from 'lodash';
const { connect } = require('react-redux');

interface IProps {
  sortedScepters?: IHeroScepter[];
  ratingsById?: IRatings;
}

function sortSceptersByRating(state: IStore): Partial<IProps> {
  return _.reverse(_.sortBy(state.scepters.allScepters, (scepter: IHeroScepter) => {
    return _.get(state.ratings, scepter.id, -1);
  }));
}

function fillMissingRatings(state: IStore): Partial<IProps> {
  return state.scepters.allScepters.reduce((mapping: IRatings, scepter: IHeroScepter) => {
    const rating = state.ratings[scepter.id] || null;
    mapping[scepter.id] = rating;
    return mapping;
  }, {});
}

@connect(
  (state) => ({
    sortedScepters: sortSceptersByRating(state),
    ratingsById: fillMissingRatings(state),
  }),
)
class LeaderBoard extends React.Component<IProps, any> {

  public render() {
    const { sortedScepters, ratingsById } = this.props;

    const list = sortedScepters.map((scepter: IHeroScepter) => {
      return <div key={scepter.id}>{scepter.heroName}: {ratingsById[scepter.id]}</div>;
    });

    return (
      <div>
        {list}
      </div>
    );
  }
}

export { LeaderBoard }
