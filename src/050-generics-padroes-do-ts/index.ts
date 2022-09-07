type PessoaObj = Record<string, string | number>
type PessoaObj2 = {[key: string]: string | number} //mesma coisa

const pessoa1: PessoaObj = {
	nome: 'bruno',
	sobrenome: 'bispo',
	idade: 20
};

const pessoa2: PessoaObj2 = {
	nome: 'Isa',
	sobrenome: 'bispo',
	idade: 22
};

console.log(pessoa1, pessoa2);
console.log('--------------');

interface PessoaProtocol { //tbm poderia ser type
  nome?: string
  sobrenome?: string
  idade?: number
}

type PessoaRequired = Required<PessoaProtocol>

const pessoa3:PessoaRequired = {
	nome: 'Brun',
	sobrenome: 'Bis',
	idade: 23
};
console.log(pessoa3);
console.log('--------------');

type PessoaPartial = Partial<PessoaRequired>

const pessoa4:PessoaPartial = {
	nome: 'Brun',
	idade: 23
};
console.log(pessoa4);
console.log('--------------');

type PessoaReadonly = Readonly<PessoaRequired>

const pessoa5: PessoaReadonly = {
	nome: 'Isa',
	sobrenome: 'Bisp',
	idade: 45
};

//Erro:
//pessoa5.idade = 10;
console.log(pessoa5);
console.log('--------------');

type PessoaPick = Pick<PessoaRequired, 'nome' | 'idade'>

const pessoa6: PessoaPick = {
	nome: 'Isa2',
	idade: 14
};

console.log(pessoa6);

type ABC = 'a' | 'b' | 'c'
type CDE = 'c' | 'd' | 'e'

type TypeExcludeEx1 = Exclude<PessoaPick, PessoaPartial>
type TypeExcludeEx2 = Exclude<PessoaPick, PessoaRequired> //nao é bom usar assim
type TypeExcludeEx3 = Exclude<keyof PessoaPick, keyof PessoaRequired>

type TypeExclude = Exclude<ABC, CDE>
type TypeExtract = Extract<ABC, CDE>

//Exemplo de uso real

type AccountMongo = {
  _id: string
  nome: string
  idade: number
  //Pode até add mais propriedades aqui que o AccountApi puxa
}

//substituir o _id por id
type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {id: string}

const accountMongo: AccountMongo = {
	_id: 'blsfblwjkbvwrurwu',
	nome: 'bruno',
	idade: 26
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
	const {_id, ...accountData} = accountMongo;
	return {id: _id, ...accountData};
}

const accountApi = mapAccount(accountMongo);
console.log('API:');
console.log(accountApi);

export default 1;