class KeyValuePairs<K, V> {
    private key: K;
    private value: V;

    setKeyValue(key: K, value: V): void {
        this.key = key;
        this.value = value;
    }

    display() {
        console.log(`key = ${this.key}, value = ${this.value}`);
    }
}


export default KeyValuePairs;