type TipoPessoa = {
  nome: string
  sobrenome: string
  nomeCompleto(): string
}

export class Pessoa implements TipoPessoa {
	constructor(public nome: string, public sobrenome: string) {}
	nomeCompleto(): string {
		return `${this.nome} ${this.sobrenome}`;
	}
}

const p = new Pessoa('Bruno', 'Santos');
console.log(p.nomeCompleto());

//Ou implementando varios tipos:

type TipoNome = {
  nome: string
}
type TipoSobrenome = {
  sobrenome: string
}
type TipoNomeCompleto = {
  nomeCompleto(): string
}

export class Pessoa2 implements TipoNome, TipoSobrenome, TipoNomeCompleto {
	constructor(public nome: string, public sobrenome: string) {}
	nomeCompleto(): string {
		return `${this.nome} ${this.sobrenome}`;
	}
}

const p2 = new Pessoa2('Bruna', 'Silva');
console.log(p2.nomeCompleto());
