export class Calculadora {
	constructor(public numero: number){}

	add(numero: number) {
		this.numero += numero;
		return this;
	}

	sub(numero: number) {
		this.numero -= numero;
		return this;
	}

	mult(numero: number) {
		this.numero *= numero;
		return this;
	}

	div(numero: number) {
		this.numero /= numero;
		return this;
	}
}

export class SubCalculadora  extends Calculadora{
	pow(numero: number) {
		this.numero **= numero;
		return this;
	}
}

const calc1 = new Calculadora(10);
console.log(calc1.add(1).mult(2).sub(2).div(2));

const calc2 = new SubCalculadora(3);
console.log(calc2.add(1).mult(2).sub(2).div(2).pow(3));

//Padrão do GoF -> Build: setando partes do objeto aos poucos

export class RequestBuilder {
	private method: 'get' | 'post' | null = null;
	private url: string | null = null;

	setMethod(method: 'get' | 'post') {
		this.method = method;
		return this;
	}

	setUrl(url: string) {
		this.url = url;
		return this;
	}

	send() {
		console.log(`Enviando dados via '${this.method}' para ${this.url}`);
	}
}

const request = new RequestBuilder();
request.setMethod('get').setUrl('https://google.com').send();
