abstract class Developer {
    constructor(protected salary: number) {}

    public abstract work(): void;
}

class FrontendDev extends Developer {
    public work(): void {
        console.log(`I am FE dev. I write UI/UX for ${this.salary}`);
    }
}

class BackendDev extends Developer {
    public work(): void {
        console.log(`I am BE dev. I write BE API for ${this.salary}`);
    }
}

type TCreateDeveloper = (salary: number) => Developer;

abstract class DeveloperFactory {
    public abstract createDeveloper: TCreateDeveloper;
}

class FrontendFactory extends DeveloperFactory {
    public createDeveloper: TCreateDeveloper = (salary) => {
        return new FrontendDev(salary);
    }
}

class BackendFactory extends DeveloperFactory {
    public createDeveloper: TCreateDeveloper = (salary) => {
        return new BackendDev(salary);
    }
}

const frontendFactory = new FrontendFactory();
const backendFactory = new BackendFactory();

const frontendDev1 = frontendFactory.createDeveloper(1000);
const frontendDev2 = frontendFactory.createDeveloper(2000);
const backendDev1 = backendFactory.createDeveloper(2000);
const backendDev2 = backendFactory.createDeveloper(3000);

frontendDev1.work();
frontendDev2.work();
backendDev1.work();
backendDev2.work();
