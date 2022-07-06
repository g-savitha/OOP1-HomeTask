export class Point {
    public x: number;
    public y: number;

    constructor(x: number, y: number);
    constructor() {
        this.x = 0;
        this.y = 0;
    }
    public toString(): string {
        return Point.toString();
    }

    distance(): number | Point;
    distance(other: Point): number | Point;
    distance(p?: any, q?: any): number | Point {
        return Math.sqrt(Math.pow(p - this.x, 2) + Math.pow(q - this.y, 2));
    }
}
