"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sources = /** @class */ (function () {
    function Sources() {
    }
    Sources.get = function (s) {
        if (s === 'ALL' || s.includes('ALL')) {
            return this.ALL;
        }
        else {
            return Array.isArray(s) ? s.slice() : [s];
        }
    };
    Sources.data = function (dataSource, sources) {
        return this.get(sources).map(function (source) { return dataSource[source]; }).filter(function (d) { return d; });
    };
    Sources.flatData = function (dataSource, sources) {
        return [].concat.apply([], this.data(dataSource, sources));
    };
    Sources.ALL = ['EE', 'PHB', 'TOA', 'SCG', 'COS', 'XGE', 'VGM'];
    return Sources;
}());
exports.Sources = Sources;
//# sourceMappingURL=sources.js.map