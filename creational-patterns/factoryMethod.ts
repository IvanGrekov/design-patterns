export abstract class Developer {
    constructor(protected language: string, protected salary: number) {}

    public abstract work(): string;
}

class FrontendDeveloper extends Developer {
    constructor(public salary: number) {
        super('JavaScript', salary);
    }

    public work(): string {
        return `I am FE developer. I am working with ${this.language} for ${this.salary}`;
    }
}

class BackendDeveloper extends Developer {
    constructor(public salary: number) {
        super('Java', salary);
    }

    public work(): string {
        return `I am BE developer. I am working with ${this.language} for ${this.salary}`
    }
}

const factoryMap = {
    FrontendDeveloper,
    BackendDeveloper,
}

class DeveloperFactory {
    protected constructor() {}

    static create(creator: keyof typeof factoryMap, salary: number): Developer {
        const DeveloperClass = factoryMap[creator];

        return new DeveloperClass(salary);
    }
}

const feDeveloper1 = DeveloperFactory.create('FrontendDeveloper', 1000);
const feDeveloper2 = DeveloperFactory.create('FrontendDeveloper', 2000);
const beDeveloper1 = DeveloperFactory.create('BackendDeveloper', 2000);
const beDeveloper2 = DeveloperFactory.create('BackendDeveloper', 3000);

console.log(feDeveloper1.work());
console.log(feDeveloper2.work());
console.log(beDeveloper1.work());
console.log(beDeveloper2.work());
