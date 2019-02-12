export interface Alignment {
    abbreviation: string;
    name: string;
}
export declare class Alignments {
    private static readonly data;
    private constructor();
    static all(sources?: string | string[]): Alignment[];
    static random(): Alignment;
    static byAbbreviation(abbreviation: any): Alignment;
}
