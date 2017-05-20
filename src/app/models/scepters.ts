/** Internal types */
export type ScepterId = string;

export interface IHeroScepter {
    id: ScepterId;
    heroName: string;
    details: string[];
}

interface IScepterCompare {
  scepterA: ScepterId;
  scepterB: ScepterId;
}

/** State */
export interface IScepters {
    allScepters: IHeroScepter[];
    currentCompare?: IScepterCompare;
}
