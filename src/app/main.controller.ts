/// <reference path="../../node_modules/@types/highcharts/index.d.ts"/>

import { lodash } from '../libs/lodash';
import * as Highcharts from "../../node_modules/highcharts/highcharts";

let _ = new lodash();

class Input {
    key: string | number;
    value: string | number;
}
class Lodash{
    name: string;
    description: string;
    method: any;
}

export class MainController {
    constructor(private $timeout) {
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
    public selectedLodash = new Lodash();
    public iterateeString = "";
    public iterateeMethod;
    //object that contains all lodash methods, methods are pushed in it in constructor
    public lodashMethods: object = {};
    public tick = false;
    public resultView = "";
    public inputType = 'array';
    

    //adds new input element in view
    incrementInputs() {
        this.inputs.push(new Input());

    }
    calculateResults() {
        //calculate only if iteratee method is complete
        if (this.createIterateeMethod()) {
            this.resultString = "";
             let collection = this.createCollection();
            
            try {
                //to catch any errors in the iteratee method
                this.resultObject = this.selectedLodash.method(collection, this.iterateeMethod);
                console.log(typeof this.resultObject);
                if (typeof this.resultObject === 'object') {
                    console.log("object")
                    for (let entry in this.resultObject) {
                        this.resultString += "\"" + entry + "\"" + " : " + this.resultObject[entry] + '\n';
                    } 
                    //open the charts view
                    this.drawResultView('chart');
                } else if(typeof this.resultObject === 'boolean'){
                    console.log("boolean")
                    if(this.resultObject){
                        this.resultString = "true";
                         this.drawResultView('tick');
                        } else {
                          this.resultString = "false";
                          this.drawResultView('x');
                        }
                } 
                console.log(this.resultObject);

            } catch (e) {
                console.log(e.message)
            }
            this.drawChart();
        }
    }
    changeLodash(name, func) {
        this.selectedLodash.method = func;
        this.selectedLodash.name = name;
        
        //call the selected function without arguments to set the methodDescription text to the selected method
        func.call(_);
        this.selectedLodash.description = _.methodDescription;
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
    

    createCollection() {
        let collection = [];
        for (let item of this.inputs) {
            collection.push(item.value);
        }
        return collection;
    }

    drawResultView(type: string){
        
        this.tick = false;
        this.resultView = type;
        //timeout for animation
        this.$timeout(()=>{this.tick = true;},10)

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

    

}



