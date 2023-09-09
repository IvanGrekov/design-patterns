interface IDeveloper {
    language: string;
    experience: number;
    salary: number;
}

export abstract class Developer {
    constructor(
        protected language: IDeveloper['language'],
        protected experience: IDeveloper['experience'],
        protected salary: IDeveloper['salary'],
    ) { }

    public abstract getInfo(): string;
}

class DeveloperBuilder extends Developer {
    constructor(args?: Partial<IDeveloper>) {
        const {
            language = 'Ukrainian',
            experience = 0,
            salary = 0,
        } = args || {};

        super(language, experience, salary);
    }

    public setLanguage(language: IDeveloper['language']): DeveloperBuilder {
        this.language = language;

        return this;
    }

    public setExperience(experience: IDeveloper['experience']): DeveloperBuilder {
        this.experience = experience;

        return this;
    }

    public setSalary(salary: IDeveloper['salary']): DeveloperBuilder {
        this.salary = salary;

        return this;
    }

    public getInfo(): string {
        return `Developer with ${this.language} language, ${this.experience} experience and ${this.salary} salary`;
    }
}

const developer1 = new DeveloperBuilder().setExperience(1).setLanguage('JS').setSalary(1000);
const developer2 = new DeveloperBuilder({
    language: 'TS',
    experience: 2,
    salary: 2000,
});

console.log(developer1.getInfo());
console.log(developer2.getInfo());
