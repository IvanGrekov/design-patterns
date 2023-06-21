export abstract class Developer {
    constructor(protected language: string, protected salary: number) {}

    public work() {
        console.log(`I'm working with ${this.language}, for ${this.salary}`);
    };
}

class Frontend extends Developer {
    public work() {
        super.work();
        console.log('By the way, I\'m frontend developer');
    };
}

const frontendDeveloper = new Frontend('JavaScript', 1000);

frontendDeveloper.work();
