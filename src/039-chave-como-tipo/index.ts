//Quando 2 objetos tem claramente chaves semelhantes podemos fazer isso para reaprovitar:

type Carro = {
  marca: string,
  ano: number //caso seja alterado o tipo aqui, no tipo Car também será alterado
}

//antes

/* type Car = {
  brand: string,
  year: string,
  name: string
} */

//depois

type Car = {
  brand: Carro['marca'],
  year: Carro['ano'],
  name: string
}

const carro: Car = {
	brand: 'chevrolet',
	year: 2016,
	name: 'celta'
};