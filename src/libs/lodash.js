"use strict";
exports.__esModule = true;
var lodash = (function () {
    function lodash() {
        this.countBy = function (collection, func) {
            var result = {};
            for (var _i = 0, collection_1 = collection; _i < collection_1.length; _i++) {
                var item = collection_1[_i];
                if (result.hasOwnProperty(item)) {
                    result[item]++;
                }
                else
                    result[item] = 1;
            }
            return result;
        };
        this.each = function (collection, func) {
            for (var item in collection) {
                func(collection[item], item, collection);
            }
        };
    }
    return lodash;
}());
exports.lodash = lodash;
