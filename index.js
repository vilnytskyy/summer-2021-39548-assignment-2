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
        if (callbackFn(this[i], i, this)) {
            return true;
        }
    }

    return false;
};

// EVERY //
Array.prototype.myEvery = function (callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if (!callbackFn(this[i], i, this)) {
            return false;
        }
    }

    return true;
};

// REDUCE //
Array.prototype.myReduce = function () {

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