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
    // let point : number | Point;
    distance(): number;
    distance(p: Point): Point;
    distance(p?: number, q?: number): number {
        return Math.sqrt(Math.pow(p - this.x, 2) + Math.pow(q - this.y, 2));
    }
}
