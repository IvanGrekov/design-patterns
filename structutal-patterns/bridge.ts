interface IRenderer {
    render: (shape: string) => void;
}

class VectorRenderer implements IRenderer {
    public render(shape: string): void {
        console.log(`Drawing "${shape}" in vector`);
    }
}

class RasterRenderer implements IRenderer {
    public render(shape: string): void {
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

    public draw(): void {
        this.renderer.render(`Square with side ${this.sideLength}`);
    }
}

class Circle extends Shape {
    constructor(protected radius: number, protected renderer: IRenderer) {
        super(renderer);
    }

    public draw(): void {
        this.renderer.render(`Circle with radius ${this.radius}`);
    }
}

const smallVectorSquare = new Square(5, new VectorRenderer());
const bigRasterSquare = new Square(10, new RasterRenderer());

smallVectorSquare.draw();
bigRasterSquare.draw();
