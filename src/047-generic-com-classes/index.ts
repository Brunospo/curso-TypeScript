export class Pessoa <T, U> {
	constructor(private nome: T, private idade: U){}
}

//Aqui o Ts consegue inferir o tipo
const pessoa = new Pessoa('bruno', 20);
console.log(pessoa);

// ----------------------------

export class Pilha<T> {
	private contador = 0;
	//indica que a chave do objeto é do tipo number e o valor é do tipo T (Index signature)
	private elemento: {[key: number]: T} = {};

	push(elemento: T): void {
		this.elemento[this.contador] = elemento;
		this.contador++;
	}

	estaVazio(): boolean {
		return this.contador === 0;
	}

	pop(): T | void {
		if (this.estaVazio()) {
			return undefined;
		}

		this.contador--;
		const elemento = this.elemento[this.contador];
		delete this.elemento[this.contador];
		return elemento;
	}

	mostrarPilha(){
		console.log(this.elemento);
	}
}

// Aqui o Ts não consegue inferir o tipo
const pilha = new Pilha();
pilha.push(984);
const r = pilha.pop(); //aqui também n consegue definir o tipo
console.log(r);

// Devemos especificar
const pilha2 = new Pilha<number>();
pilha2.push(1);
pilha2.push(10);
pilha2.push(100);
const n = pilha2.pop();
pilha2.mostrarPilha();
console.log(n);