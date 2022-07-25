interface Position {
	name: string,
	salary: number
}

interface Addres {
	country: string,
	city: string
}

interface Employee {
	name: string,
	potision: Position,
	addr: Addres
}

let potision: Position = {
	name: 'programmer',
	salary: 1000
}

let addr: Addres = {
	country: 'Belarus',
	city: 'minsk'
}

let employee: Employee = {
	name: 'andrew',
	potision: potision,
	addr: addr
};


console.log(employee);

type Func = (num: number) => number;

function make(arr: number[], func: Func): number {
	let sum = 0;
	
	for (let elem of arr) {
		sum += func(elem);
	}
	
	return sum;
}

let res: number = make([1, 2, 3], function(num): number {
	return num ** 2;
});

console.log(res);