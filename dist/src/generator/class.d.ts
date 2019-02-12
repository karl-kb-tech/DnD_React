export interface Class {
    name: string;
    reasons: string[];
    other: {
        [name: string]: string[];
    };
}
export declare class Classes {
    private static readonly data;
    private constructor();
    static names(sources?: string | string[]): string[];
    static byName(name: string): Class;
    static random(sources?: string | string[]): Class;
    static reason(cClass: Class): string;
    static other(cClass: Class): {
        name: string;
        value: string;
    }[];
}
