// Iterators
interface IterableObj {
    [key: string | symbol]: any;
    [Symbol.iterator](): { next: () => { value: any, done: boolean } };
}

const strSample = 'hello';
const arrSample = [1, 2, 3, 4, 5];
const objSample: IterableObj = {
    a: 'a',
    b: 'b',
    c: 'c',
    [Symbol.iterator]() {
        const keys = Object.keys(this);
        let index = 0;

        return {
            next: () => {
                const key = keys[index++];

                return { value: this[key], done: index > keys.length }
            }
        }
    }
}

// for (const iterator of strSample) {
//     console.log(iterator);
// }

// for (const iterator of arrSample) {
//     console.log(iterator);
// }

for (const iterator of objSample) {
    console.log(iterator);
}

// Generators {
// function *generator() {
//     console.log(`start`);
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
//     console.log('end');
// }

// const iterator = generator();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// for (const value of iterator) {
//     console.log(value);
// }
