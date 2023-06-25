export abstract class Prototype {
    public abstract clone(): Prototype;
}

abstract class Developer extends Prototype {
    constructor(protected language: string, protected salary: number) {
        super();
    }

    public abstract getInfo(): string;
}

class FrontendDeveloper extends Developer {
    public getInfo(): string {
        return `Frontend developer with ${this.language} language and ${this.salary} salary`;
    }

    public clone(): FrontendDeveloper {
        return new FrontendDeveloper(this.language, this.salary);
    }
}

const frontendDeveloper1 = new FrontendDeveloper('JavaScript', 1000);
const frontendDeveloper2 = frontendDeveloper1.clone();

console.log(frontendDeveloper1.getInfo());
console.log(frontendDeveloper2.getInfo());
console.log(frontendDeveloper1 === frontendDeveloper2);
