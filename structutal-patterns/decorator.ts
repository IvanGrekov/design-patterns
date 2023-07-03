interface IDeveloper {
    language: string;
    work(): void;
}

class TraineeDeveloper implements IDeveloper {
    constructor(public language: string) {}

    public work() {
        console.log(`I'm working with ${this.language}`);
    }
}

class Developer extends TraineeDeveloper {
    constructor(public language: string, protected salary: number) {
        super(language);
    }

    public work() {
        super.work();
        console.log(`I'm working for ${this.salary}`);
    }
}

const traineeDeveloper = new TraineeDeveloper('JavaScript');
const developer = new Developer('TypeScript', 1000);

traineeDeveloper.work();
developer.work();
