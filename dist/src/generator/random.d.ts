import { SourcedData } from './sources';
export interface WeightedOption {
    chance: number;
}
export declare class Random {
    private static readonly random;
    static numberBetween(min: number, max: number): any;
    static element<T>(d: T[]): T;
    static sourcedElement<T>(dataSource: SourcedData<T>, sources: string | string[]): T;
    static dice(roll: string): number;
    static percent(): number;
    static bool(percent?: number): boolean;
    static weightedOption<T extends WeightedOption>(options: T[]): T;
}
