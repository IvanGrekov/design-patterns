interface IComponent {
    name: string;
    operation(): void;
}

class Leaf implements IComponent {
    constructor(public name: string) {}

    public operation(): void {
        console.log(`Leaf operation - "${this.name}"`);
    }
}

class Composite implements IComponent {
    private children: IComponent[] = [];

    constructor(public name: string) {}

    public add(component: IComponent): void {
        this.children.push(component);
    }

    public remove(component: IComponent): void {
        this.children = this.children.filter((child) => child !== component);
    }

    public operation(): void {
        console.log(`Composite operation - "${this.name}"`);
        this.children.forEach((child) => child.operation());
    }
}

const leaf1 = new Leaf('Leaf 1');
const leaf2 = new Leaf('Leaf 2');
const leaf3 = new Leaf('Leaf 3');

const composite1 = new Composite('Composite 1');
composite1.add(leaf1);
composite1.add(leaf2);

const composite2 = new Composite('Composite 2');
composite2.add(leaf3);

const composite3 = new Composite('Composite 3');
composite3.add(composite1);
composite3.add(composite2);

composite3.operation();