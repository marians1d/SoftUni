class Hex {
    static hexSimbols = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F'
    ];
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        let tempValue = this.value;
        let hexValue = '';

        while (tempValue > 0) {
            const currentSymbol = tempValue % 16;
            hexValue = Hex.hexSimbols[currentSymbol] + hexValue;
            
            tempValue = Math.floor(tempValue / 16);
        }
        return '0x' + hexValue;
    }

    plus(number) {
        let newValue = this.value; 
        if (number instanceof Hex) {
            newValue += number.value;
        } else {
            newValue += number;
        }

        return new Hex(newValue);
    }

    minus(number) {
        let newValue = this.value; 
        if (number instanceof Hex) {
            newValue -= number.value;
        } else {
            newValue -= number;
        }

        return new Hex(newValue);
    }

    parse(string) {
        let result = 0;
        for (let i = 0; i < string.length; i++) {
            result += Hex.hexSimbols.indexOf(string[i]) * 16 ** i;
        }

        return result;
    }
}


let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));