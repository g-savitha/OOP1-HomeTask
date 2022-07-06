import { Point } from './Point';
import { Shape } from './Shape';

export class Triangle extends Shape {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    x3: number;
    y3: number;
    public v1: Point;
    public v2: Point;
    public v3: Point;
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
        return `Triangle[v1=${(this.v1.x, this.v1.y)},v2=${
            (this.v2.x, this.v2.y)
        },v3=${(this.v3.x, this.v3.y)}]`;
    }

    getType(): string {
        if (
            (this.v1 == this.v2 && this.v2 == this.v3) ||
            (this.v2 == this.v3 && this.v1 == this.v3)
        )
            return `isosceles triangle`;
        else if (this.v1 == this.v2 && this.v2 == this.v3 && this.v1 == this.v3)
            return `equilateral triangle`;
        return `scalene triangle`;
    }
}
