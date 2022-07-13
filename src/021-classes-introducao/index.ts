export class Empresa {
	public readonly nome: string; //pode omitir o public
	private readonly colaboradores: Colaborador[] = [];
	protected readonly cnpj: string;

	constructor(nome: string, cnpj: string) {
		this.nome = nome;
		this.cnpj = cnpj;
	}

	addColaborador(colaborador: Colaborador) {
		this.colaboradores.push(colaborador);
	}

	exibeColaboradores() {
		for (const colaborador of this.colaboradores) {
			console.log(colaborador);
		}
	}
}

//Classes no TS também funcionam como tipos
class Colaborador {
	constructor(private readonly nome: string, private readonly idade: number){ //outra maneira de fazer a mesma coisa da classe acima
		//Quando faz dessa maneira não precisa fazer por exemplo: this.nome = nome
	}
}

const colaborador1 = new Colaborador('José', 32);
const colaborador2 = new Colaborador('Maria', 23);
console.log(colaborador1);
console.log(colaborador2);

const empresa = new Empresa('Udemy', '11.111.111/1111-11');
console.log(empresa);
console.log(empresa.nome);
empresa.addColaborador(colaborador1);
console.log(empresa);
empresa.exibeColaboradores();