"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AlignmentData = require("./data/alignments.json");
var random_1 = require("./random");
var Alignments = /** @class */ (function () {
    function Alignments() {
    }
    Alignments.all = function (sources) {
        if (sources === void 0) { sources = 'ALL'; }
        return Object.keys(Alignments.data).map(function (k) { return Alignments.data[k]; });
    };
    Alignments.random = function () {
        var r = random_1.Random.dice('3d6');
        var a = Alignments.data.LG;
        switch (true) {
            case r < 4:
                a = (random_1.Random.bool()) ? Alignments.data.CE : Alignments.data.CN;
                break;
            case r < 6:
                a = Alignments.data.LE;
                break;
            case r < 9:
                a = Alignments.data.NE;
                break;
            case r < 13:
                a = Alignments.data.TN;
                break;
            case r < 16:
                a = Alignments.data.NG;
                break;
            case r < 18:
                a = (random_1.Random.bool()) ? Alignments.data.LG : Alignments.data.LN;
                break;
            case r < 19:
                a = (random_1.Random.bool()) ? Alignments.data.CG : Alignments.data.CN;
                break;
        }
        return a;
    };
    Alignments.byAbbreviation = function (abbreviation) {
        return Alignments.data[abbreviation];
    };
    Alignments.data = AlignmentData;
    return Alignments;
}());
exports.Alignments = Alignments;
//# sourceMappingURL=alignment.js.map