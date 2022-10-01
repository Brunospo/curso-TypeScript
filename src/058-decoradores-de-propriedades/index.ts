/* eslint-disable no-mixed-spaces-and-tabs */

function decorador1(classPrototype: any, nome: string | symbol): any {

	let valorPropriedade: any; //Essa variavel (não sei como) pega o valor correto da propriedade
	return {
		get: () => valorPropriedade,
		set: (valor: any) => valorPropriedade = valor + ' (primeiro decorator)'
	};
}

function decorador2(classPrototype: any, nome: string | symbol): any {

	Object.defineProperty(classPrototype, nome, { //Pra mim assim faz mais sentido
		get() {			
			return nome;
		},
		set(value) {
			nome = value + ' (segundo decorator)';
		},
	});
}

export class UmaPessoa {
  @decorador1
  	nome: string;
  @decorador2
  	sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
  	this.nome = nome;
  	this.sobrenome = sobrenome;
  	this.idade = idade;
  }
}

const pessoa = new UmaPessoa('Luiz', 'Otávio', 30);
console.log(pessoa.nome);
console.log(pessoa.sobrenome);

// ----------------- OUTRO EXEMPLO ------------------------------------

function minLength(length: number) {

	return (target: any, key: string) => {
		let val= ''; // ISSO AQUI PODE CONTER QUALQUER VALOR, MAS NO GET, ELE RETORNA O VALOR CORRETO DA PROPRIEDADE
		
		const getter = () => val;

		const setter = (value: string) => {
			if (value.length < length){
				console.log('Erro ao criar title');
				return;
			}

			val = value;
		};

		Object.defineProperty(target, key, {
			get: getter,
			set: setter
		});
	};
}

export class Movie {
	@minLength(3)
		title: string;

	constructor (title: string) {
		this.title = title;
	}
}

const tes = new Movie('Thor');
console.log(tes.title);