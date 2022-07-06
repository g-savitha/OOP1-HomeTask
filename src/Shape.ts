import { Point } from './Point';

export abstract class Shape {
    protected color: string;
    protected filled: boolean;
    public points: Point[];

    x1: number;
    y1: number;
    x2: number;
    y2: number;
    x3: number;
    y3: number;

    public point1: Point;
    public point2: Point;
    public point3: Point;

    abstract getType(): string;

    constructor(points: Point[], color: string, filled: boolean);
    constructor() {
        this.point1 = new Point(this.x1, this.y1);
        this.point2 = new Point(this.x2, this.y2);
        this.point3 = new Point(this.x3, this.y3);
        this.points = [this.point1, this.point2, this.point3];
        this.color = 'green';
        this.filled = true;
    }
    public toString(): string {
        return `A shape with color of ${this.color} and ${
            this.filled ? 'filled' : 'not filled'
        }. Points : ${this.points}.`;
    }
    public getPerimeter(): number | Point {
        return this.point1.distance(this.point2);
    }
}
