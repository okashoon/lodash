"use strict";
exports.__esModule = true;
var lodash_1 = require("../libs/lodash");
var _ = new lodash_1.lodash();
var MainController = (function () {
    function MainController() {
        this.x = _.countBy([4.2, 5.4, 3], Math.floor);
        this.call();
    }
    ;
    MainController.prototype.call = function () {
        console.log(this.x);
    };
    return MainController;
}());
exports.MainController = MainController;
