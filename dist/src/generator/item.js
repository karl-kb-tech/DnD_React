"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TrinketData = require("./data/trinkets.json");
var random_1 = require("./random");
var Items = /** @class */ (function () {
    function Items() {
    }
    Items.trinket = function () {
        return random_1.Random.element(Items.data);
    };
    Items.data = TrinketData;
    return Items;
}());
exports.Items = Items;
//# sourceMappingURL=item.js.map