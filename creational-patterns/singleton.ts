export class Singleton {
    protected static instance: Singleton;

    protected constructor() { }

    public static getInstance(): Singleton {
        if (!this.instance) {
            this.instance = new Singleton();
        }

        return this.instance;
    }

    protected _counter = 0;

    public increment(): void {
        this._counter++;
    }

    public decrement(): void {
        this._counter--;
    }

    public get counter(): number {
        return this._counter;
    }
}

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

instance1.increment();
instance2.increment();
instance1.increment();
instance2.decrement();

console.log('instance1 === instance2', instance1 === instance2);
console.log('instance1.counter', instance1.counter);
console.log('instance2.counter', instance2.counter);
