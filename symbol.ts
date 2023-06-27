const sym1 = Symbol('key');
const sym2 = Symbol('key');

// console.log(sym1);
// console.log(sym2);
// @ts-ignore
// console.log(sym1 === sym2);

const sym3 = Symbol.for('mySym');
const sym4 = Symbol.for('mySym');
const sym3Name = Symbol.keyFor(sym3);

// @ts-ignore
console.log(sym3 === sym4);
console.log(sym3Name);

