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

