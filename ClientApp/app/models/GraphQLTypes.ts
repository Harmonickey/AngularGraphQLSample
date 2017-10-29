export class Planet {
	id: string;
	name: string;
	terrains: string[];
	diameter: number;
}

export class Person {
	id: string;
	name: string;
	gender: string;
	homeworld: Planet;
	eyecolor: string;
	haircolor: string;
}

export class PersonData {
	person: Person;
	errors: string[];
}