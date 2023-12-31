interface ITreeItem {
    name: string;
    operation(): void;
}

abstract class TreeItem implements ITreeItem {
    constructor(public name: string) {}

    public abstract operation(): void;
}

class Leaf extends TreeItem {
    public operation(): void {
        console.log(`Leaf "${this.name}" - operation`);
    }
}

class Composite extends TreeItem {
    protected children: ITreeItem[] = [];

    public addChild(child: ITreeItem): void {
        this.children.push(child);
    }

    public operation(): void {
        console.group(`Composite "${this.name}" - operation`);

        for (const child of this.children) {
            child.operation();
        }

        console.groupEnd();
    }
}

const leaf1 = new Leaf('Leaf 1');
const leaf2 = new Leaf('Leaf 2');
const leaf3 = new Leaf('Leaf 3');

const composite1 = new Composite('Composite 1');
composite1.addChild(leaf1);
composite1.addChild(leaf2);

const composite2 = new Composite('Composite 2');
composite2.addChild(leaf3);

const composite3 = new Composite('Composite 3');
composite3.addChild(composite1);
composite3.addChild(composite2);

composite3.operation();