"use strict";
exports.__esModule = true;
var lodash_1 = require("../libs/lodash");
var _ = new lodash_1.lodash();
var Input = (function () {
    function Input() {
    }
    return Input;
}());
var MainController = (function () {
    function MainController() {
        this.inputs = [];
    }
    ;
    MainController.prototype.incrementInputs = function () {
        this.inputs.push(new Input());
        console.log(this.inputs);
        console.log("inc");
    };
    return MainController;
}());
exports.MainController = MainController;
