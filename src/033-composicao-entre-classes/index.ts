export class Carro {
	private motor = new Motor();

	ligar() {
		this.motor.ligar();
	}
	acelerar() {
		this.motor.acelerar();
	}
	parar() {
		this.motor.parar();
	}
	desligar() {
		this.motor.desligar();
	}
}

export class Motor {
	ligar() {
		console.log('Ligando motor...');
	}
	acelerar() {
		console.log('Acelerando motor...');
	}
	parar() {
		console.log('Parando motor...');
	}
	desligar() {
		console.log('Desligando motor...');
	}
}

const carro = new Carro();
carro.ligar();
carro.acelerar();
carro.parar();
carro.desligar();