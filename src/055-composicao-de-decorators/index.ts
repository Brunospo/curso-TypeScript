interface Constructor {
  new (...args: any[]):  any
}

function firstDecorator (constructor: Constructor){
	console.log('primeiro decorator');
}

function secondDecorator (constructor: Constructor){
	console.log('segundo decorator');
}

@secondDecorator
@firstDecorator
export class Teste {

}