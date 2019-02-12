"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BackgroundData = require("./data/backgrounds.json");
var random_1 = require("./random");
var sources_1 = require("./sources");
var Backgrounds = /** @class */ (function () {
    function Backgrounds() {
    }
    Backgrounds.names = function (sources) {
        if (sources === void 0) { sources = 'ALL'; }
        return sources_1.Sources.flatData(Backgrounds.data, sources).map(function (b) { return b.name; }).sort();
    };
    Backgrounds.byName = function (name) {
        return [].concat.apply([], Object.keys(Backgrounds.data).map(function (r) { return Backgrounds.data[r]; })).filter(function (r) { return r.name === name; })[0];
    };
    Backgrounds.reason = function (background) {
        if (background.reasons && background.reasons.length > 0) {
            return random_1.Random.element(background.reasons);
        }
        return '...';
    };
    Backgrounds.traits = function (background) {
        var trait1 = random_1.Random.element(background.traits || []);
        var filteredTraits = background.traits.filter(function (i) { return i !== trait1; });
        var trait2 = random_1.Random.element(filteredTraits || []);
        return [trait1, trait2];
    };
    Backgrounds.ideal = function (background, alignment) {
        var ideals = background.ideals.filter(function (i) { return i.alignments.length === 0 || i.alignments.includes(alignment.abbreviation); });
        return random_1.Random.element(ideals);
    };
    Backgrounds.bond = function (background) {
        return random_1.Random.element(background.bonds || []);
    };
    Backgrounds.flaw = function (background) {
        return random_1.Random.element(background.flaws || []);
    };
    Backgrounds.other = function (background) {
        if (!background.other) {
            return [];
        }
        return Object.keys(background.other).map(function (o) { return ({ name: o, value: random_1.Random.element(background.other[o]) }); });
    };
    Backgrounds.random = function (sources) {
        if (sources === void 0) { sources = 'ALL'; }
        return random_1.Random.sourcedElement(Backgrounds.data, sources);
    };
    Backgrounds.data = BackgroundData;
    return Backgrounds;
}());
exports.Backgrounds = Backgrounds;
//# sourceMappingURL=background.js.map