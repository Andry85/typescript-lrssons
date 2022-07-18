interface Employee {
	name: string,
	potision: {
		name: string,
		salary: number,
	},
	addr: {
		country: string,
		city: string
	}

};

let employee: Employee = {
	name: 'andrew',
	potision: {
		name: 'programmer',
		salary: 1000,
	},
	addr: {
		country: 'Belarus',
		city: 'minsk'
	}
};

console.log(employee);