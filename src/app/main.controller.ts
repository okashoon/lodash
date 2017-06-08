import { lodash } from '../libs/lodash'
let _ = new lodash();

class Input{
    value: string | number
}

export class MainController {
    constructor() {
        //loop through all lodash methods and store in an object
        for(let func in _){
            this.lodashMethods[func] = _[func];
        }

     };
    //inputs that store the user's collection input
    public inputs: Array<Input> = [new Input()];
    //string binded to result <textare>
    public resultString:string = "";
    public selectedLodashMethod;
    public selectedLodashDescription = "";
    public iterateeString = "";
    public iterateeMethod;
    //object that contains all lodash methods, methods are pushed in it in constructor
    public lodashMethods: object = {};
   
   //adds new input element in view
    incrementInputs() {
        this.inputs.push(new Input());
              
    }
    calculateResults() {
        if (this.createIterateeMethod()) {
            this.resultString = "";
            let tempCollection = [];
            for (let item of this.inputs) {
                tempCollection.push(item.value);
            }
            try {
                let result: object = this.selectedLodashMethod(tempCollection, this.iterateeMethod);
                for (let entry in result) {
                    this.resultString += "\"" + entry + "\"" + " : " + result[entry] + '\n';
                }
            } catch (e) {
                console.log(e.message)
            }

        }
    }
    changeLodashMethod(func){
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

    iterateeErrorMessage(){
        console.log("complete you function")
    }

    disableCalculation(){

    }

}



