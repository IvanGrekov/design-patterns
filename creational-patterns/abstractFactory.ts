export abstract class Developer {
    constructor(protected language: string, protected salary: number) {}

    public work(title: string): string {
        return `I am ${title} developer. I am working with ${this.language} for ${this.salary}`;
    }
}

class FrontendDeveloper extends Developer {
    constructor(public salary: number) {
        super('JavaScript', salary);
    }

    public work(): string {
        return super.work('FE');
    }

    public addStyles(): string {
        return 'I am adding styles';
    }
}

class BackendDeveloper extends Developer {
    constructor(public salary: number) {
        super('Java', salary);
    }

    public work(): string {
        return super.work('BE');
    }

    public setupServer(): string {
        return 'I am setting up server';
    }
}

abstract class DeveloperFactory {
    public abstract create(salary: number): Developer;
}

class FrontendFactory extends DeveloperFactory {
    public create(salary: number): FrontendDeveloper {
        return new FrontendDeveloper(salary);
    }
}

class BackendFactory extends DeveloperFactory {
    public create(salary: number): BackendDeveloper {
        return new BackendDeveloper(salary);
    }
}

const frontendFactory = new FrontendFactory();
const backendFactory = new BackendFactory();
const frontendDev1 = frontendFactory.create(1000);
const frontendDev2 = frontendFactory.create(2000);
const backendDev1 = backendFactory.create(2000);
const backendDev2 = backendFactory.create(3000);

console.log(frontendDev1.work());
console.log(frontendDev2.work());
console.log(backendDev1.work());
console.log(backendDev2.work());
