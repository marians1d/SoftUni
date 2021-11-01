class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }

    decrease(length) {
        this.innerLength -= length;

        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    increase(length) {
        this.innerLength += length;
    }

    toString() {
        if (this.innerString.length <= this.innerLength) {
            return this.innerString;
        } else {
            return this.innerString.substring(0, this.innerLength) + '...';
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(4);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test