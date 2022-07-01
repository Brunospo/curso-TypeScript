//É usado para união e interseção

type TemNome = { nome: string }
type TemSobrenome = { sobrenome: string }
type TemIdade = { idade: number }

type Pessoa = TemNome & TemSobrenome & TemIdade

const pessoa: Pessoa = {
	nome: 'Bruno',
	sobrenome: 'Bispo',
	idade: 23
};

console.log(pessoa);

type AB = 'A' | 'B'
type AC = 'A' | 'C'
type DA = 'D' | 'A'

//Terá o tipo literal "A"
type union = AB & AC & DA

//module mode
export default 1;