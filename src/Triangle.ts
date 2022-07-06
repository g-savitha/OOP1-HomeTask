import { Point } from './Point';
import { Shape } from './Shape';

export class Triangle extends Shape {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    x3: number;
    y3: number;
    private v1: Point;
    private v2: Point;
    private v3: Point;
    constructor(
        v1: Point,
        v2: Point,
        v3: Point,
        color: string,
        filled: boolean
    ) {
        super([v1, v2, v3], color, filled);
        v1 = new Point(this.x1, this.y1);
        v2 = new Point(this.x2, this.y2);
        v3 = new Point(this.x3, this.y3);
    }

    public toString(): string {
        return Triangle.toString();
    }

    getType(): string {
        if (this.v1 == this.v2 && this.v2 == this.v3 && this.v1 == this.v3)
            return `equilateral triangle`;
        else if (
            (this.v1 == this.v2 && this.v2 == this.v3) ||
            (this.v2 == this.v3 && this.v1 == this.v3)
        )
            return `isosceles triangle`;
        else return `scalene triangle`;
    }
}
