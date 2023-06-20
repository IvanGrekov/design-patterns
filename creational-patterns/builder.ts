class Developer {
    private language = '';
    private experience = 0;
    private salary = 0;

    constructor() {}

    public setLanguage(language: string): Developer {
        this.language = language;

        return this;
    }

    public setExperience(experience: number): Developer {
        this.experience = experience;

        return this;
    }

    public setSalary(salary: number): Developer {
        this.salary = salary;

        return this;
    }

    public getInfo(): string {
        return `I am ${this.language} developer. I have ${this.experience} years of experience and my salary is ${this.salary}`;
    }
}

class FrontendBuilder {
    private static Builder = Developer;

    private constructor() {}

    public static make(): Developer {
        return new this.Builder().setLanguage('JS').setExperience(1).setSalary(1000);
    }
}

const developer1 = new Developer().setExperience(1).setLanguage('JS').setSalary(1000);
const developer2 = FrontendBuilder.make();

console.log(developer1.getInfo());
console.log(developer2.getInfo());
