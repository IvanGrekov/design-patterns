abstract class Staff {
    constructor(protected sallary: number) {}

    public abstract work(): void;
}

class Employee extends Staff {
    public work(): void {
        console.log(`I am employee. I am working for ${this.sallary}`);
    }
}

class Manager extends Staff {
    public work(): void {
        console.log(`I am manager. I am managing for ${this.sallary}`);
    }
}

const staffMap = {
    Employee,
    Manager,
}

abstract class StaffFactory {
    public static createStaff(type: keyof typeof staffMap, salary: number): Staff {
        return new staffMap[type](salary);
    }
}

const employee1 = StaffFactory.createStaff('Employee', 1000);
const employee2 = StaffFactory.createStaff('Employee', 2000);
const manager1 = StaffFactory.createStaff('Manager', 2000);
const manager2 = StaffFactory.createStaff('Manager', 3000);

employee1.work();
employee2.work();
manager1.work();
manager2.work();
