"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RaceData = require("./data/races.json");
var random_1 = require("./random");
var sources_1 = require("./sources");
var Races = /** @class */ (function () {
    function Races() {
    }
    Races.names = function (sources) {
        if (sources === void 0) { sources = 'ALL'; }
        return sources_1.Sources.flatData(Races.data, sources).map(function (r) { return r.name; }).sort();
    };
    Races.subraceNames = function (race) {
        var r = Races.byName(race);
        if (!r) {
            return [];
        }
        return r.subraces.map(function (sr) { return sr.name; }).sort();
    };
    Races.byName = function (name) {
        return sources_1.Sources.flatData(Races.data, 'ALL').filter(function (r) { return r.name === name; })[0];
    };
    Races.random = function (sources) {
        if (sources === void 0) { sources = 'ALL'; }
        return random_1.Random.sourcedElement(Races.data, sources);
    };
    Races.randomSubrace = function (race) {
        return random_1.Random.element(race.subraces);
    };
    Races.other = function (race, subrace) {
        var r = [];
        if (race.other) {
            r.push.apply(r, Object.keys(race.other).map(function (o) { return ({ name: o, value: random_1.Random.element(race.other[o]) }); }));
        }
        if (subrace && subrace.other) {
            r.push.apply(r, Object.keys(subrace.other).map(function (o) { return ({ name: o, value: random_1.Random.element(subrace.other[o]) }); }));
        }
        return r;
    };
    Races.data = RaceData;
    return Races;
}());
exports.Races = Races;
//# sourceMappingURL=race.js.map