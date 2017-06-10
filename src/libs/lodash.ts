

export class lodash {
    public methodDescription = "";

    public countBy = function (collection: Array<any>, func: (x: number | string) => string | number): object {
        var description = "countBy \nCreates  an object composed of keys generated from the results of" +
            " running each element of collection thru iteratee." +
            " The corresponding value of each key is the number of times the key was returned by iteratee. " +
            "The iteratee is invoked with one argument: (value). \n eg: Math.floor"
        //if the function is invoked without arguments, set the method description to this function's description
        if (collection == undefined) { this.methodDescription = description; return }
        let result = {};
        for (let item of collection) {
            item = func(item);
            if (result.hasOwnProperty(item)) {
                result[item]++;
            } else result[item] = 1;
        }

        return result;
    }

    public each = function (collection: Array<any> | object,
        func: (value: string | number, key?: string | number, collection?: Array<any> | object) => void): void {
        var description = "each \nIterates over elements of collection and invokes iteratee for each element. "+
        "The iteratee is invoked with three arguments: (value, index|key, collection). "+
        "Iteratee functions may exit iteration early by explicitly returning false.\n eg: (value)=>{console.log(value)}"
        //if the function is invoked without arguments, set the method description to this function's description
        if (collection == undefined) { this.methodDescription = description; return }
        for (let item in collection) {
            func(collection[item], item, collection);
        }
    }

    public every = function (collection: Array<any> | object,
        func: (value: string | number, key?: string | number, collection?: Array<any> | object) => boolean) {
            var description = "every \nChecks if predicate returns truthy for all elements of collection. "+
        "Iteration is stopped once predicate returns falsey. The predicate is invoked with three arguments: (value, index|key, collection). \n"+
        "eg: (value)=>{return value %2 == 0}"
        //if the function is invoked without arguments, set the method description to this function's description
        if (collection == undefined) { this.methodDescription = description; return }
        for (let item in collection) {
            if (!func(collection[item], item, collection)) return false;
            //todo other shorthands
        }
        return true;
    }

    public filter = function (collection: Array<any> | object,
        func: (value: string | number, key?: string | number, collection?: Array<any> | object) => boolean) {

    }

    public findLast = function (collection: Array<any> | object,
        func: (value: string | number, key?: string | number, collection?: Array<any> | object) => boolean) {

    }

    public flatMap = function (collection: Array<any> | object,
        func: (value: string | number, key?: string | number, collection?: Array<any> | object) => boolean) {

    }

    public forEach = function (collection: Array<any> | object,
        func: (value: string | number, key?: string | number, collection?: Array<any> | object) => boolean) {

    }

    public includes = function (collection: Array<any> | object,
        func: (value: string | number, key?: string | number, collection?: Array<any> | object) => boolean) {

    }

    public groupBy = function (collection: Array<any> | object,
        func: (value: string | number, key?: string | number, collection?: Array<any> | object) => boolean) {

    }

    public orderBy = function (collection: Array<any> | object,
        func: (value: string | number, key?: string | number, collection?: Array<any> | object) => boolean) {

    }

}


