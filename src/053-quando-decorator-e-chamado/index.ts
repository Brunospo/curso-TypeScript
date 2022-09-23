function testeDecrator<T extends new (...args: any[]) => any> (constructor: T) {
	console.log('Oi decorator!');

	return class extends constructor {
		constructor(...args: any[]){
			super(...args);
		}
	};
}

@testeDecrator
export class Anim {
	constructor (public nome:string){
		console.log('Oi classe');
	}
}

const teste = new Anim('peixe');
