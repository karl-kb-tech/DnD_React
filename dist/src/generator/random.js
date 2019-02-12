"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RandomJs = require("random-js");
var sources_1 = require("./sources");
var Random = /** @class */ (function () {
    function Random() {
    }
    Random.numberBetween = function (min, max) {
        return Random.random.integer(min, max);
    };
    Random.element = function (d) {
        return Random.random.pick(d);
    };
    Random.sourcedElement = function (dataSource, sources) {
        return Random.random.pick(sources_1.Sources.flatData(dataSource, sources));
    };
    Random.dice = function (roll) {
        var i = roll.toLowerCase().split('d').map(Number);
        return Random.random.dice(i[1], i[0]).reduce(function (p, c) { return p + c; }, 0);
    };
    Random.percent = function () {
        return Random.random.integer(1, 100);
    };
    Random.bool = function (percent) {
        if (percent === void 0) { percent = 50; }
        return Random.random.bool(percent);
    };
    Random.weightedOption = function (options) {
        var sum = options.map(function (o) { return o.chance; }).reduce(function (p, c) { return p + c; }, 0);
        var result = Random.random.integer(1, sum);
        var counter = 0, index = 0, option;
        while (counter < result) {
            option = options[index++];
            counter += option.chance;
        }
        return option;
    };
    Random.random = new RandomJs(RandomJs.engines.mt19937().autoSeed());
    return Random;
}());
exports.Random = Random;
//# sourceMappingURL=random.js.map