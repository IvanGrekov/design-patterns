// https://refactoring.guru/design-patterns/observer/typescript/example#example-0

class Observer {
    constructor(public name: string) {}

    public operation(): void {
        console.log(`Observer ${this.name}: operation`);
    }
}

class Subject {
    protected observers: Observer[] = [];

    public addObserver(observer: Observer): void {
        const isExist = this.observers.includes(observer);

        if (isExist) {
            return console.log('Subject: Observer has been attached already');
        }

        this.observers.push(observer);
    }

    public removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);

        if (index === -1) {
            return console.log(`Subject: Observer ${observer.name} not found`);
        }

        this.observers.splice(index, 1);
    }

    public notify(): void {
        console.group('Subject: Notifying observers...');
        for (const observer of this.observers) {
            observer.operation();
        }
        console.groupEnd();
    }

    public operation(): void {
        console.group('Subject: operation');
        console.log('Subject: I\'m doing something important');
        this.notify();
        console.groupEnd();
    }
}

const subject = new Subject();
const observer1 = new Observer('1');
const observer2 = new Observer('2');

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.operation();

console.log('-----------------');

subject.removeObserver(observer2);

subject.operation();
