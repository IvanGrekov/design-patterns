abstract class Template {
    public templateMethod(): void {
        this.baseOperation1();
        this.requiredOperation1();
        this.baseOperation2();
        this.requiredOperation2();
    }

    protected baseOperation1(): void {
        console.log('Template: baseOperation1');
    }

    protected baseOperation2(): void {
        console.log('Template: baseOperation2');
    }

    protected abstract requiredOperation1(): void;

    protected abstract requiredOperation2(): void;
}

class ConcreteTemplate1 extends Template {
    protected requiredOperation1(): void {
        console.log('ConcreteTemplate1: custom requiredOperation1');
    }

    protected requiredOperation2(): void {
        console.log('ConcreteTemplate1: custom requiredOperation2');
    }
}

class ConcreteTemplate2 extends Template {
    protected requiredOperation1(): void {
        console.log('ConcreteTemplate2: custom requiredOperation1');
    }

    protected requiredOperation2(): void {
        console.log('ConcreteTemplate2: custom requiredOperation2');
    }
}

console.log('Same client code can work with different subclasses:');
const abstractClass1 = new ConcreteTemplate1();
abstractClass1.templateMethod();
console.log('------------');

console.log('Same client code can work with different subclasses:');
const abstractClass2 = new ConcreteTemplate2();
abstractClass2.templateMethod();
