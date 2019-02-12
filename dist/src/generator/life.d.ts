export declare class Life {
    private constructor();
    static adventure(): string;
    static arcane(): string;
    static boon(): string;
    static crime(): "murder" | "theft" | "burglary" | "assault" | "smuggling" | "kidnapping" | "extortion" | "counterfeiting.";
    static possessedCreature(): "celestial" | "devil" | "demon" | "fey" | "elemental" | "undead";
    static punishment(): string;
    static supernatural(): string;
    static tragedy(): string;
    static causeOfDeath(): "Unknown" | "Murdered" | "Killed in battle" | "Accident related to class or occupation" | "Accident unrelated to class or occupation" | "Natural causes, such as disease or old age" | "Apparent suicide" | "Torn apart by an animal or a natural disaster" | "Consumed by a monster" | "Executed for a crime or tortured to death" | "Bizarre event, such as being hit by a meteorite, struck down by an angry god, or killed by a hatching slaad egg";
    static metallic(): "brass" | "bronze" | "copper" | "gold" | "iron" | "platinum" | "silver" | "steel";
    static war(): "You were knocked out and left for dead. You woke up hours later with no recollection of the battle." | "You were badly injured in the fight, and you still bear the awful scars of those wounds." | "You ran away from the battle to save your life, but you still feel shame for your cowardice." | "You suffered only minor injuries, and the wounds all healed without leaving scars." | "You survived the battle, but you suffer from terrible nightmares in which you relive the experience." | "You escaped the battle unscathed, though many of your friends were injured or lost." | "You acquitted yourself well in battle and are remembered as a hero. You might have received a medal for your bravery";
    static weirdStuff(): string;
    static event(previous: number[]): string;
    static occupation(): string;
    static relationship(): "You are hostile towards each other." | "You get on with each other." | "You are indifferent to each other.";
    static status(): string;
    static age(): number;
    static relativeAge(): "twin" | "older" | "younger";
    static childhood(charismaModifier: number): string;
    static eventCount(age: number): number;
}
