import { lodash } from '../libs/lodash'
let _ = new lodash();

 export class MainController {
     constructor(){
         _.each({1:4, 5:3}, function(value, key,collection){
            console.log(value);
            console.log(key);
            console.log(collection);
         })
     };
        public x = _.countBy([4.2,5.4,3], Math.floor);
        
    }
    
