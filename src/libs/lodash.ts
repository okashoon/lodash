

    export class lodash  {
        public methodDescription = "";

        public countBy = function(collection: Array<any>, func: (x: number | string) => string | number): object {
            var description = "Creates an object composed of keys generated from the results of"+
             " running each element of collection thru iteratee."+
             " The corresponding value of each key is the number of times the key was returned by iteratee. "+
             "The iteratee is invoked with one argument: (value)."
             //if the function is invoked without arguments, set the method description to this function's description
            if(collection == undefined){this.methodDescription = description; return}
            let result = {};
            for(let item of collection){
                item = func(item);
                if (result.hasOwnProperty(item)){
                    result[item]++;
                } else result[item]=1;
            }
            
            return result;
        }

        public each = function (collection: Array<any> | object,
            func: (value: string | number, key?: string | number, collection?: Array<any> | object) => void): void {
                for(let item in collection){
                    func(collection[item], item, collection);
                }
        }

        public every = function(collection: Array<any> | object,
            func: (value: string | number, key?: string | number, collection?: Array<any> | object) => boolean){
                for(let item in collection){
                    if(!func(collection[item], item, collection)) return false;
                    //todo other shorthands
                }
                return true;
        }

    }


