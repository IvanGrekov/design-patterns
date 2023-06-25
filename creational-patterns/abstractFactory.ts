export abstract class Developer {
    constructor(protected language: string, protected salary: number) {}

    abstract work(): string;
}

class FrontendDeveloper extends Developer {
    constructor(protected salary: number) {
        super('Javascript', salary);
    }

    public work(): string {
        return `I am frontend developer. I am working with ${this.language} for ${this.salary}`;
    }
}

class BackendDeveloper extends Developer {
    constructor(protected salary: number) {
        super('Java', salary);
    }

    public work(): string {
        return `I am backend developer. I am working with ${this.language} for ${this.salary}`;
    }
}

class FrontendFactory {
    protected constructor() {}

    static createDeveloper(salary: number): FrontendDeveloper {
        return new FrontendDeveloper(salary);
    }
}

class BackendFactory {
    protected constructor() {}

    static createDeveloper(salary: number): BackendDeveloper {
        return new BackendDeveloper(salary);
    }
}

const frontendDev1 = FrontendFactory.createDeveloper(1000);
const frontendDev2 = FrontendFactory.createDeveloper(2000);
const backendDev1 = BackendFactory.createDeveloper(2000);
const backendDev2 = BackendFactory.createDeveloper(3000);

console.log(frontendDev1.work());
console.log(frontendDev2.work());
console.log(backendDev1.work());
console.log(backendDev2.work());
