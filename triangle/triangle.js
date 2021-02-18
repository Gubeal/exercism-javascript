export class Triangle {
  constructor(...sides) {
    this.lines = sides;
  }

  get isEquilateral() {
    let a = this.lines[0]
    let b = this.lines[1]
    let c = this.lines[2]
    return (a==b && a==c && b==c && !isTriangleInequality(this.lines));
  }

  get isIsosceles() {
    let a = this.lines[0]; 
    let b = this.lines[1]; 
    let c = this.lines[2]; 
    return ((a==b || a==c || b==c) && !isTriangleInequality(this.lines));
  }

  get isScalene() {
    let a = this.lines[0]; 
    let b = this.lines[1]; 
    let c = this.lines[2];  
    return (a!=b && a!=c && b!=c && !isTriangleInequality(this.lines));
  }
}

function isTriangleInequality(sides) {
  let a = sides[0];
  let b = sides[1];
  let c = sides[2];
  return (a>=(b+c) || b>=(a+c) || c>=(a+b));
}
