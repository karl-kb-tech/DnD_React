export interface Race {
    name: string;
    subraces: Subrace[];
    parents?: ParentChoice[];
    other?: {
        [name: string]: string[];
    };
}
export interface Subrace {
    name: string;
    parents?: ParentChoice[];
    other?: {
        [name: string]: string[];
    };
}
export interface ParentChoice {
    chance: number;
    parent1: string;
    parent2: string;
}
export declare class Races {
    private static readonly data;
    private constructor();
    static names(sources?: string | string[]): string[];
    static subraceNames(race: string): string[];
    static byName(name: string): Race;
    static random(sources?: string | string[]): Race;
    static randomSubrace(race: Race): Subrace;
    static other(race: Race, subrace: Subrace): {
        name: string;
        value: string;
    }[];
}
