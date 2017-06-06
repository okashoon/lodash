import { lodash } from '../libs/lodash'
let _ = new lodash();

class Input{
    value: string | number
}

export class MainController {
    constructor() { };
    public inputs: Array<Input> = [];
   
   
    incrementInputs() {
        this.inputs.push(new Input());
       
        console.log(this.inputs);
        console.log("inc");
    }
}


