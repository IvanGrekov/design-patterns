// https://refactoring.guru/design-patterns/template-method/typescript/example#example-0

abstract class SystemTemplate {
    protected baseOperation1(): void {
        console.log('baseOperation1');
    }

    protected baseOperation2(): void {
        console.log('baseOperation2');
    }

    protected abstract requiredOperation1(): void;

    protected abstract requiredOperation2(): void;

    public doSomeBusinessLogic(): void {
        console.group('DoSomeBusinessLogic');
        this.baseOperation1();
        this.requiredOperation1();
        this.baseOperation2();
        this.requiredOperation2();
        console.groupEnd();
    }
}

class System1 extends SystemTemplate {
    protected requiredOperation1(): void {
        console.log('System1: custom requiredOperation1');
    }

    protected requiredOperation2(): void {
        console.log('System1: custom requiredOperation2');
    }
}

class System2 extends SystemTemplate {
    protected requiredOperation1(): void {
        console.log('System2: custom requiredOperation1');
    }

    protected requiredOperation2(): void {
        console.log('System2: custom requiredOperation2');
    }
}

console.log('Same client code can work with different subclasses:');
const system1 = new System1();
system1.doSomeBusinessLogic();
console.log('------------');

console.log('Same client code can work with different subclasses:');
const system2 = new System2();
system2.doSomeBusinessLogic();
