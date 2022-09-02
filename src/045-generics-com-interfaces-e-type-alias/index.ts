interface Protocolo1<T, U> {
  nome: T,
  sobrenome: T,
  idade: U
}

interface Protocolo2<T = string, U = number> {
  nome: T,
  sobrenome: T,
  idade: U
}

//A mesma coisa serve para o type alias

type Protocolo3<T, U> = {
  nome: T,
  sobrenome: T,
  idade: U
}

type Protocolo4<T = string, U = number> = {
  nome: T,
  sobrenome: T,
  idade: U
}

const pessoa1: Protocolo1<string, number> = {
	nome:'Bruno',
	sobrenome:'Bispo',
	idade: 23
};

const pessoa2: Protocolo2 = {
	nome:'Isabele',
	sobrenome:'Bispo',
	idade: 23
};

const pessoa3: Protocolo3<number, number> = {
	nome:154,
	sobrenome:315,
	idade: 23
};

const pessoa4: Protocolo4 = {
	nome:'Isa',
	sobrenome:'Bis',
	idade: 23
};

console.log(pessoa1, pessoa2, pessoa3, pessoa4);