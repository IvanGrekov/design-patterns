export interface IDeveloper {
    language: string;
    work(): void;
}

class Developer implements IDeveloper {
    constructor(public language: string, protected salary: number) {}

    public work() {
        console.log(`I'm working for ${this.salary}`);
        console.log(`I'm writing code in ${this.language}`);
    }
}

class PoliteDeveloper implements IDeveloper {
    constructor(protected developer: Developer) {}

    public get language() {
        return this.developer.language;
    }

    public work() {
        console.log('Hello, I am a polite developer');
        this.developer.work();
    }
}

const developer = new Developer('TypeScript', 1000);
const developer1 = Object.create(
    Developer.prototype,
    {
        language: { value: 'JavaScript' },
        salary: { value: 2000 },
    }
);
const politeDeveloper = new PoliteDeveloper(developer);

developer.work();
console.log('------------------');
developer1.work();
console.log('------------------');
politeDeveloper.work();

