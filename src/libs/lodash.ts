

    export class lodash  {

        public countBy = function(collection: Array<any>, func: (x: number | string) => string | number): object {
            let result = {};
            for(let item of collection){
                if (result.hasOwnProperty(item)){
                    result[item]++;
                } else result[item]=1;
            }
            return result;
        }
    }

