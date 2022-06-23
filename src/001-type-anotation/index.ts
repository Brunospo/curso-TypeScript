/* eslint-disable */

// Tipos básicos (ocorre inferencia de tipos: nesse exemplo, não precisava colocar os tipos)
let nome: string = 'Bruno'
let idade: number = 23
let adulto: boolean = true //só aceita true ou false, nenhum valor truthy ou falsy
let simbolo: symbol = Symbol('qualquer-symbol')
//let big: bigint = 10n 

// Arrays
let arrayDeNumeros: Array<number> = [1,2,3] //ou
let arrayDeNumeros2: number[] = [1,2,3]
let arrayDeStrings: Array<string> = ['a', 'b'] //ou
let arrayDeStrings2: string[] = ['a', 'b', 'c']

//Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  nome: 'Bruno',
  idade: 23
}

//Funções
function soma(x: number, y:number): number{
  return x + y
}

const soma2: (x:number, y: number) => number = (x, y) => x + y