import { lodash } from '../libs/lodash'
let _ = new lodash();

 export class MainController {
     constructor(){
         this.call();
     };
        public x = _.countBy([4.2,5.4,3], Math.floor);
        call(){
            console.log(this.x);
        }
    }
    





