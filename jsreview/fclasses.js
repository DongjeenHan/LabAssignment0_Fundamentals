// ...
class Rectangle {
    constructor(width,height) {
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.width * this.height;
    }
 }

const rect = new Rectangle(10, 20);

console.log('Rectangle area: ' + rect.getArea());

// ...

class Square extends Rectangle {
    constructor(side){
        super(side,side);
    }
    getPerimeter() {
        return this.width * 4; 
    }
}

const square = new Square(25);

console.log('Square perimeter: ' + square.getPerimeter());
console.log('Square area: ' + square.getArea());

/*
 * Expected output:
 *
 * Rectangle area: 200
 * Square perimeter: 100
 * Square area: 625
 */