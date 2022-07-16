export class Ecritor {
	private _ferramenta: Ferramenta | null = null;

	constructor(private _nome: string){}

	get nome() {
		return this._nome;
	}
	
	set ferramenta(ferramenta: Ferramenta | null) {
		this._ferramenta = ferramenta;
	}

	get ferramenta(): Ferramenta | null {
		return this._ferramenta;
	}
	
	escrever() {
		if (this.ferramenta){
			this.ferramenta.escrever();
			return;
		}
		console.log('Não posso escrever sem ferramenta!');
	}
}

export abstract class Ferramenta {
	constructor (private _nome: string){}

	get nome() {
		return this._nome;
	}

  abstract escrever(): void
}

export class Caneta extends Ferramenta {
	escrever(): void {
		console.log('Escrevendo...');
	}
}

export class Maquina extends Ferramenta {
	escrever(): void {
		console.log('Digitando...');
	}
}

const caneta = new Caneta('Bic');
const maquina = new Maquina('Maquina');

const escritor = new Ecritor('Bruno');
escritor.escrever();
escritor.ferramenta = caneta;
escritor.escrever();
escritor.ferramenta = maquina;
escritor.escrever();