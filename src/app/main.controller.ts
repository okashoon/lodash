/// <reference path="../../node_modules/@types/highcharts/index.d.ts"/>

import { lodash } from '../libs/lodash';
import * as Highcharts from "../../node_modules/highcharts/highcharts";

let _ = new lodash();

class Input {
    value: string | number
}

export class MainController {
    constructor() {
        //loop through all lodash methods and store in an object
        for (let func in _) {
            this.lodashMethods[func] = _[func];
        }
    };
    //inputs that store the user's collection input
    public inputs: Array<Input> = [new Input()];
    public resultObject: any;
    //string binded to result <textare>
    public resultString: string = "";
    public selectedLodashMethod;
    public selectedLodashDescription = "";
    public iterateeString = "";
    public iterateeMethod;
    //object that contains all lodash methods, methods are pushed in it in constructor
    public lodashMethods: object = {};
    public tick = false;

    //adds new input element in view
    incrementInputs() {
        this.inputs.push(new Input());

    }
    calculateResults() {
        //calculate only if iteratee method is complete
        if (this.createIterateeMethod()) {
            this.resultString = "";
            let tempCollection = [];
            for (let item of this.inputs) {
                tempCollection.push(item.value);
            }
            try {
                this.resultObject = this.selectedLodashMethod(tempCollection, this.iterateeMethod);
                console.log(typeof this.resultObject);
                if (typeof this.resultObject === 'object') {
                    for (let entry in this.resultObject) {
                        this.resultString += "\"" + entry + "\"" + " : " + this.resultObject[entry] + '\n';
                    } 
                } else if(typeof this.resultObject === 'boolean'){
                    this.resultObject? this.resultString = "true" : this.resultString = "false";
                }
                console.log(this.resultObject);

            } catch (e) {
                console.log(e.message)
            }
            this.drawChart();
        }
    }
    changeLodashMethod(func) {
        this.selectedLodashMethod = func;
        //call the selected function without arguments to set the methodDescription text to the selected method
        func.call(_);
        this.selectedLodashDescription = _.methodDescription;
    }
    createIterateeMethod() {
        let fn = new Function();
        //converts the function string to a real function
        try {
            eval("fn = " + this.iterateeString);
        } catch (e) {
            console.log("error in iteratee method")
            return false;
        }
        this.iterateeMethod = fn;
        return true;
    }

    iterateeErrorMessage() {
        console.log("complete your function")
    }

    disableCalculation() {

    }
    drawChart() {
        let categories = [];
        let data = [];
        for (let entry in this.resultObject){
            categories.push(entry);
            data.push(this.resultObject[entry]);
        }
        Highcharts.chart('column-chart-container', {
            chart: {
                type: 'column',
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
                    enable : true
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

            }],
            
        });
    }

    changeTick(){
        if(this.tick == false){
            this.tick = true;
        } else {
            this.tick = false;
        }
        console.log(this.tick)
    }

}



