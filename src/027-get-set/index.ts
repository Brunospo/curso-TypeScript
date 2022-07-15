//maneira antiga (do Java)

export class Pessoa {
	constructor (private nome: string) {}

	getNome() {
		return this.nome;
	}

	setNome (novoNome: string) {
		this.nome = novoNome;
	}
}

const pessoa = new Pessoa('Bruno');
pessoa.setNome('Isabele');
console.log(pessoa.getNome());
console.log(pessoa);

//maneira "mais nova"

export class Pessoa2 {
	//o _ é colocado para diferenciar o nome desse atributo do nome dos atributos do get e set
	constructor (private _nome: string) {}

	//é reconhcido como atributo
	get nome() {
		return this._nome;
	}

	set nome (novoNome: string) {
		this._nome = novoNome;
	}
}

const pessoa2 = new Pessoa2('Bruno');
pessoa2.nome = 'Isabela';
console.log(pessoa2.nome);
console.log(pessoa2);