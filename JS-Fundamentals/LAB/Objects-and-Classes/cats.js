function solution(catsInfo) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = [];
    for (let cat of catsInfo) {
        let [name, age] = cat.split(' ');

        cats.push(new Cat(name, age));
    }
    for (let cat of cats) {
        cat.meow();
    }
}