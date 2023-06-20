class Singleton {
    private static instance: Singleton;
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    private counter = 0;
    public increment(): void {
        this.counter++;
    }
    public decrement(): void {
        this.counter--;
    }
    public getCounter(): number {
        return this.counter;
    }
}

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

instance1.increment();
instance2.increment();
instance1.increment();
instance2.decrement();

console.log('instance1 === instance2', instance1 === instance2);
console.log('instance1.getCounter()', instance1.getCounter());
console.log('instance2.getCounter()', instance2.getCounter());
