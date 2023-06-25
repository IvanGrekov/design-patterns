export class Developer {
    constructor(
        protected language: string,
        protected experience: number,
        protected salary: number
    ) {}

    public getInfo(): string {
        return `I am ${this.language} developer. I have ${this.experience} years of experience and my salary is ${this.salary}`;
    }
}

class DeveloperBuilder extends Developer {
    constructor(language = '', experience = 0, salary = 0) {
        super(language, experience, salary);
    }

    public setLanguage(language: string): DeveloperBuilder  {
        this.language = language;

        return this;
    }

    public setExperience(experience: number): DeveloperBuilder  {
        this.experience = experience;

        return this;
    }

    public setSalary(salary: number): DeveloperBuilder  {
        this.salary = salary;

        return this;
    }
}

const developer1 = new DeveloperBuilder().setExperience(1).setLanguage('JS').setSalary(1000);
const developer2 = new DeveloperBuilder('TS', 2, 2000);

console.log(developer1.getInfo());
console.log(developer2.getInfo());
