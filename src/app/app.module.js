"use strict";
/// <reference path="../../node_modules/@types/angular/index.d.ts"/>
exports.__esModule = true;
/// <reference path="../../node_modules/@types/jquery/index.d.ts"/>
/// <reference path="../../node_modules/@types/node/index.d.ts"/>
// interface Window { MyNamespace: any; }
// window.MyNamespace = window.MyNamespace || {};
var angular = require('angular');
var main_controller_1 = require("./main.controller");
angular.module('app', [])
    .controller('mainController', main_controller_1.MainController);
