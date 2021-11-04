function createComputerHierarchy() {
    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }

    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }

    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife; 
        }
    }

    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) { 
            if (new.target == Computer) {
                throw new Error('Initializing Computer')
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram; // in gigabites
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) { //   
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this._battery = battery;
        }

        get battery() {
            return this._battery;
        }

        set battery(value) {
            if((value instanceof Battery) == false) {
                throw new TypeError('Wrong instance');
            } else {
                this._battery = value;
            }
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this._keyboard = keyboard;
            this._monitor = monitor;
        }

        get keyboard() {
            return this._keyboard;
        }

        set keyboard(value) {
            if((value instanceof Keyboard) == false) {
                throw new TypeError('Wrong instance');
            } else {
                this._keyboard = value;
            }
        }

        get monitor() {
            return this._monitor;
        }

        set monitor(value) {
            if((value instanceof Monitor) == false) {
                throw new TypeError('Wrong instance');
            } else {
                this._monitor = value;
            }
        }
    }
 
    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}


let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let battery = new Battery('Energy', 3);
console.log(battery);
let keyboard = new Keyboard('Logitec', 0.3);
console.log(keyboard);
let monitor = new Monitor('Dell', 40, 20);
console.log(monitor);
let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", battery);
let desktop = new Desktop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", battery);
console.log(laptop);