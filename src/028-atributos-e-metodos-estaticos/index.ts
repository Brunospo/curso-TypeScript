export class Pessoa {
	constructor(public nome: string, public sobrenome: string, public cpf: string, public idade: number){}

	static criarPessoa(nome: string, sobrenome: string): Pessoa {
		return new Pessoa(nome, sobrenome, '000.000.000-00', 20);
	}
}

const pessoa1 = new Pessoa('Isabele', 'Santos', '111.111.111-11', 20);
console.log(pessoa1);
// Erro por ser estático: console.log(pessoa1.criarPessoa());

//só da pra acessar o metodo a partir da classe
const pessoa2 = Pessoa.criarPessoa('Bruno', 'Santos');
console.log(pessoa2);

/* ------------------------------------------------------------------------------------------------------------------  */

export class Pessoa2 {
	static idadePadrao = 30;
	static cpfPadrao = '222.222.222-22';

	constructor(public nome: string, public sobrenome: string, public cpf: string, public idade: number){}

	metodoNormal() {
		console.log(Pessoa2.cpfPadrao, Pessoa2.idadePadrao);
	}

	static criarPessoa(nome: string, sobrenome: string): Pessoa {
		return new Pessoa(nome, sobrenome, Pessoa2.cpfPadrao, Pessoa2.idadePadrao);
	}
}

const pessoa3 = new Pessoa2('Isa', 'Sant', '111.111.111-11', 20);
pessoa3.metodoNormal();

const pessoa4 = Pessoa2.criarPessoa('Bru', 'Sant');
console.log(pessoa4);