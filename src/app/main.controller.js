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
        //inputs that store the user's collection input
        this.inputs = [new Input()];
        //string binded to result <textare>
        this.resultString = "";
        this.selectedLodashDescription = "";
        this.iterateeString = "";
        //object that contains all lodash methods, methods are pushed in it in constructor
        this.lodashMethods = {};
        //loop through all lodash methods and store in an object
        for (var func in _) {
            this.lodashMethods[func] = _[func];
        }
    }
    ;
    //adds new input element in view
    MainController.prototype.incrementInputs = function () {
        this.inputs.push(new Input());
    };
    MainController.prototype.calculateResults = function () {
        if (this.createIterateeMethod()) {
            this.resultString = "";
            var tempCollection = [];
            for (var _i = 0, _a = this.inputs; _i < _a.length; _i++) {
                var item = _a[_i];
                tempCollection.push(item.value);
            }
            try {
                var result = this.selectedLodashMethod(tempCollection, this.iterateeMethod);
                for (var entry in result) {
                    this.resultString += "\"" + entry + "\"" + " : " + result[entry] + '\n';
                }
            }
            catch (e) {
                console.log(e.message);
            }
        }
    };
    MainController.prototype.changeLodashMethod = function (func) {
        this.selectedLodashMethod = func;
        //call the selected function without arguments to set the methodDescription text to the selected method
        func.call(_);
        this.selectedLodashDescription = _.methodDescription;
    };
    MainController.prototype.createIterateeMethod = function () {
        var fn = new Function();
        //converts the function string to a real function
        try {
            eval("fn = " + this.iterateeString);
        }
        catch (e) {
            console.log("error in iteratee method");
            return false;
        }
        this.iterateeMethod = fn;
        return true;
    };
    MainController.prototype.iterateeErrorMessage = function () {
        console.log("complete you function");
    };
    MainController.prototype.disableCalculation = function () {
    };
    return MainController;
}());
exports.MainController = MainController;
