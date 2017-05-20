import { IScepters, IHeroScepter, ScepterId } from 'models/scepters';
import * as _ from 'lodash';

/**
 * Slugify text.
 * Source: https://gist.github.com/mathewbyrne/1280286
 */
function slugify(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}

/** TODO */
const scepterData: IHeroScepter[] = require('./scepter-data.json')
    .map((item: any) => {
        return {
            id: slugify(item.name),
            heroName: item.name,
            details: item.details,
        };
    });

const heroIds = scepterData.map((s) => s.id);

export function sceptersReducer(state?: IScepters, action?: IChooseNewCompareAction): IScepters {

    if (!state) {
        const [a, b] = _.sampleSize(heroIds, 2);
        return {
                allScepters: scepterData,
                currentCompare: {
                    scepterA: a,
                    scepterB: b,
                },
            };
    }

    switch (action.type) {
        case VOTE_COMPARE: // TODO
        case CHOOSE_NEW_COMPARE:
        const current = [state.currentCompare.scepterA, state.currentCompare.scepterB];
            const [a, b] = _.sampleSize(heroIds, 2).filter((sid) => current.indexOf(sid));
            return {
                ...state,
                currentCompare: {
                    scepterA: a,
                    scepterB: b,
                },
            };
        default:
            return state;
    }
}

/** Action Types */
const CHOOSE_NEW_COMPARE: string = 'scepterCompare/CHOOSE_NEW_COMPARE';
export const VOTE_COMPARE: string = 'scepterCompare/VOTE_COMPARE';

/** Actions */
// tslint:disable-next-line:no-empty-interface
export interface IChooseNewCompareAction extends Redux.Action {};
export interface IVoteCompareAction extends Redux.Action {
    payload: {
        winner: ScepterId;
        looser: ScepterId;
    };
}

/** Action Creator */
export function chooseNewCompare(): IChooseNewCompareAction {
  return {
    type: CHOOSE_NEW_COMPARE,
  };
}

export function voteCompare(winner: ScepterId, looser: ScepterId): IVoteCompareAction {
  return {
    type: VOTE_COMPARE,
    payload: {
        winner,
        looser,
    },
  };
}
