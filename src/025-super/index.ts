export class Pessoa {
	constructor(public nome: string, public sobrenome: string, private idade: number, protected cpf: string){}

	//arrow function é reconhecido como uma propriedade, e não como um metodo, com o super, ele não se dá muito bem
	getIdade = () => this.idade;

	getCpf() {
		return this.cpf;
	}
	getNomeCompleto() {
		return `${this.nome} ${this.sobrenome}`;
	}
}

//add mais propriedades
export class Aluno extends Pessoa{
	constructor(nome: string, sobrenome: string, idade: number, cpf: string, private matricula: string){
		super(nome, sobrenome, idade, cpf);    
	}
}

//Realizando algum tipo de processamento e retornando o mesmo valor do metodo
export class Professor extends Pessoa{
	getNomeCompleto = () => {
		console.log('Fazendo algo antes...');
		const result  = super.getNomeCompleto();
		return result + ' heey';
	};
}

const aluno = new Aluno('Bruno', 'Bispo', 23, '000.000.000-00', '11111111');
const professor = new Professor('Bruno', 'Bispo', 23, '000.000.000-00');

console.log(aluno.getNomeCompleto());
console.log(professor.getNomeCompleto());