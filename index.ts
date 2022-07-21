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