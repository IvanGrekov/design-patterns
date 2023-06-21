abstract class Protot {
    public abstract clone(): Protot; 
}

export abstract class Developer extends Protot {
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
