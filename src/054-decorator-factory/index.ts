function paramDecorator (param1: string){
	return function <T extends new (...args: any[]) => any>(constructor: T) {
		return class extends constructor {

			nome: string;

			constructor(...args: any[]){
				super(...args);
				this.nome = args[0] + ' ' + param1;        
			}
		};
	};
}

@paramDecorator('usado')
export class Obj {
	constructor(public nome: string, public valor: number){
	}
}

const obj1 = new Obj('ps2', 400);
console.log(obj1);