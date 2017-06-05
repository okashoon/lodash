/// <reference path="../../node_modules/@types/angular/index.d.ts"/>

/// <reference path="../../node_modules/@types/jquery/index.d.ts"/>
/// <reference path="../../node_modules/@types/node/index.d.ts"/>


// interface Window { MyNamespace: any; }

// window.MyNamespace = window.MyNamespace || {};

var angular = require('angular');
import { MainController } from './main.controller'

angular.module('app',[])
    .controller('mainController', MainController)






