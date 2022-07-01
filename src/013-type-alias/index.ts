//É um apelido para um tipo

type Idade = number

type Pessoa = {
  nome: string
  idade: Idade
  salario: number
  corPreferida?: string
}

const pessoaB: Pessoa = {
	nome: 'Bruno',
	idade: 23,
	salario: 1000
};

type CorRGB = 'Red' | 'Green' | 'Blue'
type CorCMYK = 'Cyano' | 'Magenta' | 'Amarelo' | 'Preto'

type CorPreferida = CorCMYK | CorRGB

const setCorPreferida = (pessoa: Pessoa, cor: CorPreferida): Pessoa => {
	return {...pessoa, corPreferida: cor};
};

console.log(setCorPreferida(pessoaB, 'Red'));