"use strict";
/// <reference path="../../node_modules/@types/highcharts/index.d.ts"/>
exports.__esModule = true;
var lodash_1 = require("../libs/lodash");
var Highcharts = require("../../node_modules/highcharts/highcharts");
var _ = new lodash_1.lodash();
var Input = (function () {
    function Input() {
    }
    return Input;
}());
var Lodash = (function () {
    function Lodash() {
    }
    return Lodash;
}());
var MainController = (function () {
    function MainController($timeout) {
        this.$timeout = $timeout;
        //inputs that store the user's collection input
        this.inputs = [new Input()];
        //string binded to result <textare>
        this.resultString = "";
        this.selectedLodash = new Lodash();
        this.iterateeString = "";
        //object that contains all lodash methods, methods are pushed in it in constructor
        this.lodashMethods = {};
        this.tick = false;
        this.resultView = "";
        this.inputType = 'array';
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
        //calculate only if iteratee method is complete
        if (this.createIterateeMethod()) {
            this.resultString = "";
            var collection = this.createCollection();
            try {
                //to catch any errors in the iteratee method
                this.resultObject = this.selectedLodash.method(collection, this.iterateeMethod);
                console.log(typeof this.resultObject);
                if (typeof this.resultObject === 'object') {
                    console.log("object");
                    for (var entry in this.resultObject) {
                        this.resultString += "\"" + entry + "\"" + " : " + this.resultObject[entry] + '\n';
                    }
                    //open the charts view
                    this.drawResultView('chart');
                }
                else if (typeof this.resultObject === 'boolean') {
                    console.log("boolean");
                    if (this.resultObject) {
                        this.resultString = "true";
                        this.drawResultView('tick');
                    }
                    else {
                        this.resultString = "false";
                        this.drawResultView('x');
                    }
                }
                console.log(this.resultObject);
            }
            catch (e) {
                console.log(e.message);
            }
            this.drawChart();
        }
    };
    MainController.prototype.changeLodash = function (name, func) {
        this.selectedLodash.method = func;
        this.selectedLodash.name = name;
        //call the selected function without arguments to set the methodDescription text to the selected method
        func.call(_);
        this.selectedLodash.description = _.methodDescription;
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
    MainController.prototype.createCollection = function () {
        var collection = [];
        for (var _i = 0, _a = this.inputs; _i < _a.length; _i++) {
            var item = _a[_i];
            collection.push(item.value);
        }
        return collection;
    };
    MainController.prototype.drawResultView = function (type) {
        var _this = this;
        this.tick = false;
        this.resultView = type;
        //timeout for animation
        this.$timeout(function () { _this.tick = true; }, 10);
    };
    MainController.prototype.drawChart = function () {
        var categories = [];
        var data = [];
        for (var entry in this.resultObject) {
            categories.push(entry);
            data.push(this.resultObject[entry]);
        }
        Highcharts.chart('column-chart-container', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Results'
            },
            xAxis: {
                categories: categories,
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of occurences'
                },
                stackLabels: {
                    enable: true
                }
            },
            plotOptions: {
                column: {
                    pointPadding: 0.1,
                    borderWidth: 0
                }
            },
            series: [{
                    name: 'Entries',
                    data: data
                }]
        });
    };
    return MainController;
}());
exports.MainController = MainController;
