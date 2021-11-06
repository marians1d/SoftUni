function solve() {
    class Figure {
        constructor() {
            this.units = 'cm';
        }

        get area() {}

        changeUnits(units) {
            this.units = units;
        }

        toString() {
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this.radius = radius;
        }

        get area() {
            return this.radius ** 2 * Math.PI;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
        }

        changeUnits(units) {
            if (this.units == 'mm') {
                this.radius /= 100;
            } else if (this.units == 'cm') {
                this.radius /= 10;
            }

            if (units == 'mm') {
                this.radius *= 100;
            } else if (units == 'cm') {
                this.radius *= 10;
            }

            this.units = units;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super();
            if (units == 'm') {
                this.width = width / 10;
                this.height = height / 10;
            } else if (units == 'cm') {
                this.width = width;
                this.height = height;
            } else {
                this.width = width * 10;
                this.height = height * 10;
            }
            this.units = units;
        }

        get area() {
            return this.width * this.height;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }

        changeUnits(units) {
            if (this.units == 'mm') {
                this.width /= 100;
                this.height /= 100;
            } else if (this.units == 'cm') {
                this.width /= 10;
                this.height /= 10;
            }

            if (units == 'mm') {
                this.width *= 100;
                this.height *= 100;
            } else if (units == 'cm') {
                this.width *= 10;
                this.height *= 10;
            }

            this.units = units;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()); // Figures units: mm Area: 7853.981633974483 - radius: 50
