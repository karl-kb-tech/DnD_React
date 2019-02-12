"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClassData = require("./data/classes.json");
var random_1 = require("./random");
var sources_1 = require("./sources");
var Classes = /** @class */ (function () {
    function Classes() {
    }
    Classes.names = function (sources) {
        if (sources === void 0) { sources = 'ALL'; }
        return sources_1.Sources.flatData(Classes.data, sources).map(function (c) { return c.name; }).sort();
    };
    Classes.byName = function (name) {
        return [].concat.apply([], Object.keys(Classes.data).map(function (r) { return Classes.data[r]; })).filter(function (r) { return r.name === name; })[0];
    };
    Classes.random = function (sources) {
        if (sources === void 0) { sources = 'ALL'; }
        return random_1.Random.sourcedElement(Classes.data, sources);
    };
    Classes.reason = function (cClass) {
        return random_1.Random.element(cClass.reasons);
    };
    Classes.other = function (cClass) {
        if (!cClass.other) {
            return [];
        }
        return Object.keys(cClass.other).map(function (o) { return ({ name: o, value: random_1.Random.element(cClass.other[o]) }); });
    };
    Classes.data = ClassData;
    return Classes;
}());
exports.Classes = Classes;
//# sourceMappingURL=class.js.map