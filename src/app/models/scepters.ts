export interface IHeroScepters {
    [id: string]: IHeroScepter;
}

export interface IHeroScepter {
    id: string;
    heroName: string;
    details: string[];
}
