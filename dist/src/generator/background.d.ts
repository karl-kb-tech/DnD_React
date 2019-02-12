import { Alignment } from '@tiyl/generator/alignment';
export interface Background {
    name: string;
    reasons?: string[];
    traits: string[];
    ideals: Ideal[];
    bonds: string[];
    flaws: string[];
    other?: {
        [name: string]: string[];
    };
}
export interface Ideal {
    ideal: string;
    alignments: string[];
}
export declare class Backgrounds {
    private static readonly data;
    private constructor();
    static names(sources?: string | string[]): string[];
    static byName(name: string): Background;
    static reason(background: Background): string;
    static traits(background: Background): [string, string];
    static ideal(background: Background, alignment: Alignment): Ideal;
    static bond(background: Background): string;
    static flaw(background: Background): string;
    static other(background: Background): {
        name: string;
        value: string;
    }[];
    static random(sources?: string | string[]): Background;
}
