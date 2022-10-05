interface Point {
  x: number
  y: number
}

function printCoords(pt: Point) {
  console.log(`Значение координаты 'x': ${pt.x}`)
  console.log(`Значение координаты 'y': ${pt.y}`)
}

printCoords({ x: 3, y: 7 })


// interface Animal {
//   name: string
// }

// interface Bear extends Animal {
//   honey: boolean
// }

type Animal = {
  name: string
}

type Bear = Animal & {
  honey: boolean
}

function getBear(animal: Bear): void {
  console.log(`Name animal': ${animal.name}`)
  console.log(`Food animal: ${animal.honey}`)
}

const bear = getBear({name: 'Medvid', honey: true})


interface Options {
  width: number
}
function configure(x: Options | 'auto' | 'automatic') {
  // ...
}
configure({ width: 100 })
configure('auto')
configure('automatic');

function padLeft(padding: number | string, input: string) {
  if (typeof padding === 'number') {
    return new Array(padding + 1).join(' ') + input
    // (parameter) padding: number
  }
  return padding + input
  // (parameter) padding: string
}

console.log(padLeft(100, 'teset'));

interface Shape {
  kind: 'circle' | 'square'
  radius?: number
  sideLength: number
}


function greeter(fn: (a: string) => void) {
  fn('Hello, World')
}

function printToConsole(s: string) {
  console.log(s)
}

greeter(printToConsole);

function firstElement<Type>(arr: Type[]): Type {
  return arr[0];
}

const s = firstElement(['a', 'b', 'c']);

console.log(s);



function showMan(name: string): string {
  return `I am ${name}`;
}

const myMan = showMan('Peter');

console.log(myMan);


function showFirstDayOfWeek<AType>(arr: AType[]): AType {
  return arr[0];
}

const firstday = showFirstDayOfWeek(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);

console.log(firstday);

type voidFn = () => void

const f1: voidFn = () => {
  return true
}

const v1 = f1();

console.log(v1);

interface PaintOptions {
  shape: Shape
  xPos?: number
  yPos?: number
}

function paintShape({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
  console.log('x coordinate at', xPos)
  // var xPos: number
  console.log('y coordinate at', yPos)
  // var yPos: number
  // ...
}


interface PersonType {
  readonly age: number
}

function showUserInfo(obg: PersonType) {

  console.log(obg.age);


}

showUserInfo({age: 25});

interface Car {
  model?: string;
  marka?: string;
  yearProduction?: number;
  price: number;
}

interface Buss extends Car {
  seat: number;
}

function showBus (obj: Buss) {
  console.log(obj.seat)
}

showBus({
  price: 2000,
  seat: 8
});


interface Colorful {
  color: string
}

interface Circle {
  radius: number
}

type ColorfulCircle = Colorful & Circle;

function draw(circle: ColorfulCircle) {
  console.log(`Цвет круга: ${circle.color}`)
  console.log(`Радиус круга: ${circle.radius}`)
}

draw({ color: 'blue', radius: 42 })