import { Point } from './Point';

export abstract class Shape {
    protected color: string;
    protected filled: boolean;
    public points: Point[];

    public point1 = new Point(1, 2);
    public point2 = new Point(3, 4);
    public point3 = new Point(5, 6);

    abstract getType(): string;

    constructor(points: Point[], color: string, filled: boolean);
    constructor() {
        this.points = [this.point1, this.point2, this.point3];
        this.color = 'green';
        this.filled = true;
    }
    public toString(): string {
        return `A shape with color of ${this.color} and ${
            this.filled ? 'filled' : 'not filled'
        }. Points : ${this.points}`;
    }
    public getPerimeter(): Point {
        return this.point1.distance(this.point2);
    }
}
