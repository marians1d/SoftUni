class Data {
    public response: string = undefined;
    public fulfilled: boolean = false;

    constructor(public method: string,public uri: string,public version: string,public message: string) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
    }
}

let myData = new Data('GET', 'http://google.com', 'HTTP/1.1', '');

console.log(myData);