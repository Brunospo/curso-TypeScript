export function add (a: unknown, b:unknown): number | string {
	return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(1,4));
console.log(add('a','b'));
console.log('-------------------');

type Pessoa = {tipo: 'pessoa' , nome: string}
type Animal = {tipo: 'animal' , cor: string}
type PessoaOuAnimal = Pessoa | Animal

export class Aluno implements Pessoa {
	tipo: 'pessoa' = 'pessoa';
	constructor(public nome:string){}  
}

export class Camaleao implements Animal {
	tipo: 'animal' = 'animal';
	constructor(public cor:string){}  
}

const mostrarDados1 = (obj: PessoaOuAnimal) => {
	if ('nome' in obj) {
		return obj.nome;
	}

	return obj.cor;
};

const aluno = new Aluno('bruno');
const camaleao = new Camaleao('verde');
console.log(mostrarDados1(aluno));
console.log(mostrarDados1(camaleao));
console.log('-------------------');

const mostrarDados2 = (obj: PessoaOuAnimal) => {
	if (obj instanceof Aluno){
		return obj.nome;
	}
  
	if (obj instanceof Camaleao) {
		return obj.cor;
	}
};

const aluno2 = new Aluno('João');
const camaleao2 = new Camaleao('azul');
console.log(mostrarDados2(aluno2));
console.log(mostrarDados2(camaleao2));
console.log('-------------------');

const mostrarDados3 = (obj: PessoaOuAnimal) => {
	switch(obj.tipo) {
	case 'pessoa' : return obj.nome;
	case 'animal' : return obj.cor;
	}
};

const aluno3 = new Aluno('Camila');
const camaleao3 = new Camaleao('vermelho');
console.log(mostrarDados3(aluno3));
console.log(mostrarDados3(camaleao3));