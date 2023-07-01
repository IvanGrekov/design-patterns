interface IStrategy {
    doAlgorithm(data: string[]): string[];
}

export class Context {
    constructor(protected strategy: IStrategy) {}

    public setStrategy(strategy: IStrategy): void {
        this.strategy = strategy;
    }

    public doSomeBusinessLogic(): void {
        console.log('Context: data manipulating using the strategy (not sure how it\'ll do it)');
        const result = this.strategy.doAlgorithm(['b', 'a', 'd', 'e', 'c']);
        console.log(result.join(','));
    }
}

class ConcreteStrategyA implements IStrategy {
    public doAlgorithm(data: string[]): string[] {
        return data.sort();
    }
}

class ConcreteStrategyB implements IStrategy {
    public doAlgorithm(data: string[]): string[] {
        return data.sort().reverse();
    }
}

const context = new Context(new ConcreteStrategyA());
console.log('Client: Strategy is set to normal sorting.');
context.doSomeBusinessLogic();

console.log('------------');

console.log('Client: Strategy is set to reverse sorting.');
context.setStrategy(new ConcreteStrategyB());
context.doSomeBusinessLogic();
