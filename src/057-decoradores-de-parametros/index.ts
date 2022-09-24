function paramsDecorators (constructor: any, methodName: string, paramIndex: number){
	console.log(constructor);
	console.log(methodName);
	console.log(paramIndex);
	console.log('------');
}

export class ExempleClass {
	cor: string;

	constructor(@paramsDecorators cor: string){
		this.cor = cor;
	}

	teste(@paramsDecorators nome: string, @paramsDecorators idade: number){
		console.log(nome, idade);
	}
}