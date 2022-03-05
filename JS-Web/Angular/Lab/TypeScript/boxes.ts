class Box<T> {
    public boxes: Array<T> = [];

    add(element: T): void {
        this.boxes.push(element);
    }

    remove(): void {
        this.boxes.pop();
    }

    
    public get count() : number {
        return this.boxes.length;
    }
}

export default Box;