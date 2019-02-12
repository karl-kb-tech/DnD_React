"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var alignment_1 = require("./alignment");
var background_1 = require("./background");
var birth_1 = require("./birth");
var class_1 = require("./class");
var family_1 = require("./family");
var item_1 = require("./item");
var life_1 = require("./life");
var race_1 = require("./race");
var Generator = /** @class */ (function () {
    function Generator(config) {
        this.config = config;
        if (!this.config) {
            this.config = {
                age: null,
                alignment: null,
                background: null,
                class: null,
                race: null,
                subrace: null,
                sources: null,
                charismaModifier: null
            };
        }
    }
    Generator.prototype.assignSources = function () {
        if (this.config.sources) {
            this.sourceList = this.config.sources.split(',').map(function (s) { return s.trim(); });
        }
        else {
            this.sourceList = ['PHB', 'VGM', 'XGE'];
        }
    };
    Generator.prototype.assignRace = function (character) {
        var _this = this;
        if (this.config.race) {
            this.race = race_1.Races.byName(this.config.race);
        }
        else {
            this.race = race_1.Races.random(this.sourceList);
        }
        if (this.race.subraces.length > 0) {
            if (this.config.subrace) {
                this.subrace = this.race.subraces.filter(function (sr) { return sr.name === _this.config.subrace; })[0];
            }
            else {
                this.subrace = race_1.Races.randomSubrace(this.race);
            }
        }
        character.race = {
            name: this.race.name,
            subrace: this.subrace ? this.subrace.name : undefined,
            other: race_1.Races.other(this.race, this.subrace)
        };
    };
    Generator.prototype.assignAlignment = function (character) {
        if (this.config.alignment) {
            this.alignment = alignment_1.Alignments.byAbbreviation(this.config.alignment);
        }
        else {
            this.alignment = alignment_1.Alignments.random();
        }
        character.alignment = this.alignment.name;
    };
    Generator.prototype.assignAge = function (character) {
        if (this.config.age) {
            character.age = this.config.age;
        }
        else {
            character.age = life_1.Life.age();
        }
    };
    Generator.prototype.assignBackground = function (character) {
        if (this.config.background) {
            this.background = background_1.Backgrounds.byName(this.config.background);
        }
        else {
            this.background = background_1.Backgrounds.random(this.sourceList);
        }
        character.background = {
            name: this.background.name,
            reason: background_1.Backgrounds.reason(this.background),
            traits: background_1.Backgrounds.traits(this.background),
            ideal: background_1.Backgrounds.ideal(this.background, this.alignment).ideal,
            bond: background_1.Backgrounds.bond(this.background),
            flaw: background_1.Backgrounds.flaw(this.background),
            other: background_1.Backgrounds.other(this.background)
        };
    };
    Generator.prototype.assignClass = function (character) {
        if (this.config.class) {
            this.class = class_1.Classes.byName(this.config.class);
        }
        else {
            this.class = class_1.Classes.random(this.sourceList);
        }
        character.class = {
            name: this.class.name,
            reason: class_1.Classes.reason(this.class),
            other: class_1.Classes.other(this.class)
        };
    };
    Generator.prototype.assignFamily = function (character) {
        var knewParents = family_1.Family.knewParents();
        var lifestyle = family_1.Family.lifestyle();
        var raisedBy = family_1.Family.raisedBy(knewParents);
        character.family = {
            knewParents: knewParents,
            raisedBy: raisedBy,
            lifestyle: lifestyle,
            birthplace: birth_1.Birth.place(),
            home: family_1.Family.home(lifestyle),
            childhood: life_1.Life.childhood(this.config.charismaModifier || 0),
            parents: family_1.Family.parents(this.race, this.subrace),
            siblings: []
        };
        character.family.parents.mother.occupation = life_1.Life.occupation();
        character.family.parents.father.occupation = life_1.Life.occupation();
        if (raisedBy.absent.includes('mother')) {
            character.family.parents.mother.absent = family_1.Family.absentParent();
        }
        if (raisedBy.absent.includes('father')) {
            character.family.parents.father.absent = family_1.Family.absentParent();
        }
    };
    Generator.prototype.assignSiblings = function (character) {
        for (var n = 0; n < family_1.Family.siblings(this.race); n++) {
            character.family.siblings.push({
                relativeAge: life_1.Life.relativeAge(),
                relationship: family_1.Family.siblingSex(),
                occupation: life_1.Life.occupation(),
                status: life_1.Life.status(),
                attitude: life_1.Life.relationship()
            });
        }
    };
    Generator.prototype.assignEvents = function (character) {
        character.events = [];
        var eventRolls = [];
        for (var n = 0; n < life_1.Life.eventCount(character.age); n++) {
            character.events.push(life_1.Life.event(eventRolls));
        }
    };
    Generator.prototype.assignTrinket = function (character) {
        character.trinket = item_1.Items.trinket();
    };
    Generator.prototype.generate = function () {
        var character = Object.assign({});
        this.assignSources();
        this.assignRace(character);
        this.assignAlignment(character);
        this.assignAge(character);
        this.assignBackground(character);
        this.assignClass(character);
        this.assignFamily(character);
        this.assignSiblings(character);
        this.assignEvents(character);
        this.assignTrinket(character);
        return character;
    };
    return Generator;
}());
exports.Generator = Generator;
//# sourceMappingURL=index.js.map