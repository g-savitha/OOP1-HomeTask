export class Point {
    public x: number;
    public y: number;

    // constructor();
    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }
    public toString(): string {
        return `(${this.x}, ${this.y})`;
    }

    distance(): number | Point;
    distance(other: Point): number | Point;
    distance(p?: any, q?: any, other?: any): number | Point {
        if (p === undefined && q === undefined) {
            return Math.floor(
                Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
            );
        } else if (other instanceof Point) {
            return Math.floor(
                Math.sqrt(
                    Math.pow(other.x - this.x, 2) +
                        Math.pow(other.y - this.y, 2)
                )
            );
        }
        return Math.floor(
            Math.sqrt(Math.pow(p - this.x, 2) + Math.pow(q - this.y, 2))
        );
    }
}
