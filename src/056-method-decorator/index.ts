function methodDecorator(constructor: any, methodName: string, descriptor: PropertyDescriptor) {
	console.log(constructor);
	console.log(methodName);
	console.log(descriptor);

	descriptor.value = () => 1;

	return descriptor;

	//ou

	/* return {
		value: () => 1
	}; */
}

export class ClassExemple {
  @methodDecorator
	mostraHello(){
		console.log('hello world');
	}
}

const teste = new ClassExemple();
console.log(teste.mostraHello());