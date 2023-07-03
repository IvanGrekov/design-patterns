// https://refactoring.guru/design-patterns/strategy/typescript/example#example-0

interface IStrategy {
    doAlgorithm(data: string[]): string[];
}

class Strategy1 implements IStrategy {
    public doAlgorithm(data: string[]): string[] {
        return [...data].sort();
    }
}

class Strategy2 implements IStrategy {
    public doAlgorithm(data: string[]): string[] {
        return [...data].sort().reverse();
    }
}

export class Context {
    constructor(protected data: string[], protected strategy: IStrategy) {}

    public setStrategy(strategy: IStrategy): void {
        this.strategy = strategy;
    }

    public doSomeBusinessLogic(): void {
        console.group('Context: data manipulating using the unknown strategy');
        const result = this.strategy.doAlgorithm(this.data);
        console.log(result.join(','));
        console.groupEnd();
    }
}

const data = ['b', 'a', 'd', 'e', 'c'];

const context = new Context(data, new Strategy1());
console.log('Client: Strategy is set to normal sorting.');
context.doSomeBusinessLogic();

console.log('------------');

console.log('Client: Strategy is set to reverse sorting.');
context.setStrategy(new Strategy2());
context.doSomeBusinessLogic();
