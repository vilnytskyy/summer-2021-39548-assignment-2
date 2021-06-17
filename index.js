// FOR EACH // Provided by Professor Lynch
Array.prototype.myEach = function (callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === undefined) continue;

        callbackFn(this[i], i, this);
    }
};

// MAP //
Array.prototype.myMap = function (callbackFn) {
    let arr = [];

    for (let i = 0; i < this.length; i++) {
        arr[i] = callbackFn(this[i], i, this);
    }

    return arr;
};

// FILTER //
Array.prototype.myFilter = function (callbackFn) {
    let arr = [];
    let arr_i = 0;

    for (let i = 0; i < this.length; i++) {
        if (this[i] === undefined) continue;

        if (callbackFn(this[i], i, this)) {
            arr[arr_i] = this[i];
            arr_i++;
        }
    }

    return arr;
};

// SOME //
Array.prototype.mySome = function (callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === undefined) continue;

        if (callbackFn(this[i], i, this)) {
            return true;
        }
    }

    return false;
};

// EVERY //
Array.prototype.myEvery = function (callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === undefined) continue;

        if (!callbackFn(this[i], i, this)) {
            return false;
        }
    }

    return true;
};

// REDUCE //
Array.prototype.myReduce = function (callbackFn, initialValue) {
    let startIndex = 0;
    let total = 0;
    let totalElements = 0;
    let elementIndices = [];
    let indexM = 0;
    // Sets arrEmpty to true if either this is not an array or this is empty
    let arrEmpty = !Array.isArray(this) || !this.length;
    // Sets inVal to true if initialValue is undefined  
    let inVal = initialValue === undefined;

    // Checking if the array is empty and no initial value is provided
    if (arrEmpty && inVal) {
        throw new TypeError("Reduce of empty array with no initial value");
    }

    // Counts !undefined values in array
    for (let i = 0; i < this.length; i++) {
        if (this[i] !== undefined) {
            totalElements++;
            elementIndices[indexM] = i;
            indexM++;
        }
    }

    // Checking if initialValue is provided
    if (inVal) {
        if(totalElements>1){
            startIndex += elementIndices[1];
        console.log("sI: " + startIndex);
        }
        
        total += this[elementIndices[0]];
    } else {
        total += initialValue;
    }

    // If the array only has one element (regardless of position) and no initialValue is provided,
    // return the solo value without calling callbackFn
    if (totalElements === 1 && inVal) {
        return this[elementIndices[0]];
    }

    // if initialValue is provided but the array is empty, return the solo value without calling callbackFn
    if (arrEmpty && !inVal) {
        return initialValue;
    }


    for (let i = startIndex; i < this.length; i++) {
        if (this[i] === undefined) continue;
        total = callbackFn(total, this[i], i, this);
    }

    return total;
};

// INCLUDES //
Array.prototype.myIncludes = function () {

};

// INDEXOF //
Array.prototype.myIndexOf = function () {

};

// PUSH // Provided by Professor Lynch
Array.prototype.myPush = function (...args) {
    let arg_i = 0;
    let length = this.length;

    for (let i = length; i < length + args.length; i++) {
        this[i] = args[arg_i];
        arg_i++;
    }

    return this.length;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function () {

};

// KEYS //
Object.grabKeys = function () {

};

// VALUES //
Object.grabValues = function () {

};