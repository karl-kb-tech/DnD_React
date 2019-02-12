import { Lifestyle, Parents, RaisedBy, Sibling } from './family';
export interface Config {
    age: number;
    alignment: string;
    background: string;
    class: string;
    race: string;
    subrace: string;
    sources: string;
    charismaModifier: number;
}
export interface Character {
    age: number;
    class: CharacterClass;
    trinket: string;
    race: CharacterRace;
    alignment: string;
    background: CharacterBackground;
    family: CharacterFamily;
    events: string[];
}
export interface CharacterFamily {
    knewParents: boolean;
    parents: Parents;
    birthplace: string;
    raisedBy: RaisedBy;
    lifestyle: Lifestyle;
    home: string;
    childhood: string;
    siblings: Sibling[];
}
export interface CharacterRace {
    name: string;
    subrace: string;
    other: {
        name: string;
        value: string;
    }[];
}
export interface CharacterClass {
    name: string;
    reason: string;
    other: {
        name: string;
        value: string;
    }[];
}
export interface CharacterBackground {
    name: string;
    reason: string;
    traits: string[];
    ideal: string;
    bond: string;
    flaw: string;
    other: {
        name: string;
        value: string;
    }[];
}
export declare class Generator {
    private config?;
    private alignment;
    private background;
    private class;
    private race;
    private subrace;
    private sourceList;
    constructor(config?: Config);
    private assignSources;
    private assignRace;
    private assignAlignment;
    private assignAge;
    private assignBackground;
    private assignClass;
    private assignFamily;
    private assignSiblings;
    private assignEvents;
    private assignTrinket;
    generate(): Character;
}
