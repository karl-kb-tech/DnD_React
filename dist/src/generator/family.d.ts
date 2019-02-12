import { Race, Subrace } from '@tiyl/generator/race';
export interface Parents {
    mother: Parent;
    father: Parent;
}
export interface Parent {
    race: string;
    absent?: string;
    occupation: string;
}
export interface RaisedBy {
    name: string;
    absent: ('mother' | 'father')[];
}
export interface Lifestyle {
    name: string;
    modifier: number;
}
export interface Sibling {
    relativeAge: string;
    relationship: string;
    occupation: string;
    status: string;
    attitude: string;
}
export declare class Family {
    private constructor();
    static knewParents(): boolean;
    static parents(race: Race, subrace: Subrace): Parents;
    static absentParent(): string;
    static siblingSex(): 'brother' | 'sister';
    static siblings(race: Race): number;
    static lifestyle(): Lifestyle;
    static raisedBy(knewParents: any): RaisedBy;
    static home(lifestyle: Lifestyle): string;
}
