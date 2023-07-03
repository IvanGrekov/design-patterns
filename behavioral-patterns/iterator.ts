// https://refactoring.guru/design-patterns/iterator/typescript/example#example-0

class Iterator<T> {
    protected keys: string[] = [];
    protected index: number = 0;

    constructor(protected collection: string | T[] | { [key: string]: T }) {
        this.keys = Object.keys(collection);
    }

    public next(): string | T {
        const key = this.keys[this.index++];

        if (typeof this.collection === 'string' || Array.isArray(this.collection)) {
            return this.collection[+key];
        }

        return this.collection[key];
    }

    public hasNext(): boolean {
        return this.index < this.keys.length;
    }
}

const arrayIterator = new Iterator([1, 2, 3, 4, 5]);
const objectIterator = new Iterator({ a: 'a', b: 'b', c: 'c' });
const stringIterator = new Iterator('hello');

while (stringIterator.hasNext()) {
    console.log(stringIterator.next());
}
