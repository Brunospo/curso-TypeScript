export class Empresa {
	public readonly nome: string;
	protected readonly colaboradores: Colaborador[] = [];
	private readonly cnpj: string;

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

export class Udemy extends Empresa {
	constructor() {
		super('Udemy', '11.111.111/1111-11');
	}

	popColaborador(): Colaborador | null {
		//da para acessar o colaborador, pois ele é protected
		const colaborador = this.colaboradores.pop();
		return colaborador ? colaborador : null;
		// Não da para acessar o this.cnpj pois é private
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

const udemy = new Udemy();
udemy.addColaborador(colaborador1);
udemy.addColaborador(colaborador2);
console.log(udemy);
const colaboradorRemovido = udemy.popColaborador();
console.log('Removido: ', colaboradorRemovido);
console.log(udemy);
