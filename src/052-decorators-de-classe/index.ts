function decorator<T extends new (...args: any[]) => any>(constructor: T){
	return class extends constructor {

		idade: number;
		
		// Vai subistituir  atributo cor da classe original
		cor: number;

		constructor(...args: any[]){
			super(...args);

			if (args[0] === 'azul'){
				args[0] = 'vermelho';
			}

			args[1] = this.inverteNome(args[1]);
			this.idade = args[0].length;
			this.cor = 2;

			console.log(this);
		}

		inverteNome(nome: string) {
			return nome.split('').reverse().join('');
		}
	};
}

@decorator
export class Animals {
	constructor(public cor: string, public nome: string){}
}

const teste = new Animals('azul', 'papagaio');
console.log(teste);
