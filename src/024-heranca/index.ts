export class Pessoa {
	constructor(public nome: string, public sobrenome: string, private idade: number, protected cpf: string){}

	getIdade = () => this.idade;
	getCpf() {
		return this.cpf;
	}
	getNomeCompleto = () => `${this.nome} ${this.sobrenome}`;
}

export class Aluno extends Pessoa{
	
}

export class Cliente extends Pessoa{
	getNomeCompleto = () => `Classe Cliente: ${this.nome} ${this.sobrenome}`;
}

export class Professor extends Pessoa{
	getNomeCompleto = () => `Classe Professor: ${this.nome} ${this.sobrenome}`;
}

const pessoa = new Pessoa('Bruno', 'Bispo', 23, '000.000.000-00');
const aluno = new Aluno('Bruno', 'Bispo', 23, '000.000.000-00');
const cliente = new Cliente('Bruno', 'Bispo', 23, '000.000.000-00');
const professor = new Professor('Bruno', 'Bispo', 23, '000.000.000-00');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(professor.getNomeCompleto());