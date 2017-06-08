"use strict";
exports.__esModule = true;
var lodash = (function () {
    function lodash() {
        this.methodDescription = "";
        this.countBy = function (collection, func) {
            var description = "Creates an object composed of keys generated from the results of" +
                " running each element of collection thru iteratee." +
                " The corresponding value of each key is the number of times the key was returned by iteratee. " +
                "The iteratee is invoked with one argument: (value).";
            //if the function is invoked without arguments, set the method description to the function's description
            if (collection == undefined) {
                this.methodDescription = description;
                return;
            }
            var result = {};
            for (var _i = 0, collection_1 = collection; _i < collection_1.length; _i++) {
                var item = collection_1[_i];
                item = func(item);
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
