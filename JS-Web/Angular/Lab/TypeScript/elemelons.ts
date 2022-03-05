abstract class Melon {
    public element: string;

    constructor(public weight: number, public sort: string) {}

    
    public get index() : number {
        return this.weight * this.sort.length;
    }

    message(): string {
        return [
            `Element: ${this.element}`,
            `Sort: ${this.sort}`,
            `Element Index: ${this.index}`
        ].join('\n');
    }
    
    toString(): string {
        return this.message();
    }
}

export class Watermelon extends Melon {
    constructor(weight: number, sort: string) {
        super(weight, sort);

        this.element = 'Water';
    }
}

export class Firemelon extends Melon {
    constructor(weight: number, sort: string) {
        super(weight, sort);

        this.element = 'Fire';
    }
}

export class Airmelon extends Melon {
    constructor(weight: number, sort: string) {
        super(weight, sort);

        this.element = 'Air';
    }
}

export class Earthmelon extends Melon {
    constructor(weight: number, sort: string) {
        super(weight, sort);

        this.element = 'Earth';
    }
}

export class Melolemonmelon extends Airmelon {
    public cicle: string[];
    constructor(weight: number, sort: string) {
        super(weight, sort);

        this.cicle = ['Fire', 'Earth', 'Air', 'Water'];
    }

    toString(): string {
        const currentElement = this.cicle.shift();
        this.cicle.push(currentElement);

        this.element = currentElement;

        return this.message();
    }
}