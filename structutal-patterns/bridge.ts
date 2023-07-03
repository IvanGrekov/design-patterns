interface IRenderer {
    render(shape: string): void;
}

class VectorRenderer implements IRenderer {
    public render(shape: string) {
        console.log(`Drawing "${shape}" in vector`);
    }
}

class RasterRenderer implements IRenderer {
    public render(shape: string) {
        console.log(`Drawing "${shape}" in pixels`);
    }
}

abstract class Shape {
    constructor(protected renderer: IRenderer) {}

    public abstract draw(): void;
}

class Square extends Shape {
    constructor(protected sideLength: number, renderer: IRenderer) {
        super(renderer);
    }

    public draw() {
        this.renderer.render(`Square with side ${this.sideLength}`);
    }
}

const smallVectorSquare = new Square(5, new VectorRenderer());
const bigRasterSquare = new Square(10, new RasterRenderer());

smallVectorSquare.draw();
bigRasterSquare.draw();
