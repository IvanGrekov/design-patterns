interface IRenderer {
    render: (shape: string) => void;
}

class VectorRenderer implements IRenderer {
    render(shape: string): void {
        console.log(`Drawing "${shape}" as vector`);
    }
}

class RasterRenderer implements IRenderer {
    render(shape: string): void {
        console.log(`Drawing "${shape}" as pixels`);
    }
}

abstract class Shape {
    protected renderer: IRenderer;

    constructor(renderer: IRenderer) {
        this.renderer = renderer;
    }

    public abstract draw(): void;
}

class Square extends Shape {
    constructor(protected sideLength: number, renderer: IRenderer) {
        super(renderer);
    }

    public draw(): void {
        this.renderer.render(`Square with side ${this.sideLength}`);
    }
}

const smallVectorSquare = new Square(5, new VectorRenderer());
const bigRasterSquare = new Square(10, new RasterRenderer());

smallVectorSquare.draw();
bigRasterSquare.draw();
