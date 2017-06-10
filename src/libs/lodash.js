"use strict";
exports.__esModule = true;
var lodash = (function () {
    function lodash() {
        this.methodDescription = "";
        this.countBy = function (collection, func) {
            var description = "countBy \nCreates  an object composed of keys generated from the results of" +
                " running each element of collection thru iteratee." +
                " The corresponding value of each key is the number of times the key was returned by iteratee. " +
                "The iteratee is invoked with one argument: (value). \n eg: Math.floor";
            //if the function is invoked without arguments, set the method description to this function's description
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
            var description = "each \nIterates over elements of collection and invokes iteratee for each element. " +
                "The iteratee is invoked with three arguments: (value, index|key, collection). " +
                "Iteratee functions may exit iteration early by explicitly returning false.\n eg: (value)=>{console.log(value)}";
            //if the function is invoked without arguments, set the method description to this function's description
            if (collection == undefined) {
                this.methodDescription = description;
                return;
            }
            for (var item in collection) {
                func(collection[item], item, collection);
            }
        };
        this.every = function (collection, func) {
            var description = "every \nChecks if predicate returns truthy for all elements of collection. " +
                "Iteration is stopped once predicate returns falsey. The predicate is invoked with three arguments: (value, index|key, collection). \n" +
                "eg: (value)=>{return value %2 == 0}";
            //if the function is invoked without arguments, set the method description to this function's description
            if (collection == undefined) {
                this.methodDescription = description;
                return;
            }
            for (var item in collection) {
                if (!func(collection[item], item, collection))
                    return false;
                //todo other shorthands
            }
            return true;
        };
        this.filter = function (collection, func) {
        };
        this.findLast = function (collection, func) {
        };
        this.flatMap = function (collection, func) {
        };
        this.forEach = function (collection, func) {
        };
        this.includes = function (collection, func) {
        };
        this.groupBy = function (collection, func) {
        };
        this.orderBy = function (collection, func) {
        };
    }
    return lodash;
}());
exports.lodash = lodash;
