"use strict";
exports.__esModule = true;
var lodash_1 = require("../libs/lodash");
var _ = new lodash_1.lodash();
var MainController = (function () {
    function MainController() {
        this.x = _.countBy([4.2, 5.4, 3], Math.floor);
        _.each({ 1: 4, 5: 3 }, function (value, key, collection) {
            console.log(value);
            console.log(key);
            console.log(collection);
        });
    }
    ;
    return MainController;
}());
exports.MainController = MainController;
