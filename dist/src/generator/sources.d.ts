export interface SourcedData<T> {
    [source: string]: T[];
}
export declare class Sources {
    private constructor();
    static readonly ALL: string[];
    static get(s: string | string[]): string[];
    static data<T>(dataSource: SourcedData<T>, sources: string | string[]): T[][];
    static flatData<T>(dataSource: SourcedData<T>, sources: string | string[]): T[];
}
