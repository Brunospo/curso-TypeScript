interface TipoNome {
  nome: string
}
interface TipoSobrenome {
  sobrenome: string
}
interface TipoNomeCompleto {
  nomeCompleto(): string
}

//uniao com type:
type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto

//uniao com interface
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

export class Pessoa2 implements TipoPessoa2 {
	constructor(public nome: string, public sobrenome: string) {}
	nomeCompleto(): string {
		return `${this.nome} ${this.sobrenome}`;
	}
}

const pessoaObj: TipoPessoa2 = {
	nome: 'Bruno',
	sobrenome: 'Santos',
	nomeCompleto() {
		return `Olá ${this.nome} ${this.sobrenome}`;
	},
};
console.log(pessoaObj.nomeCompleto());


const p2 = new Pessoa2('Bruna', 'Silva');
console.log(p2.nomeCompleto());
