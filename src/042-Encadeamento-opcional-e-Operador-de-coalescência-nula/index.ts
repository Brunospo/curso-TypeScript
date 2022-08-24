//Encadeamento opcional

type Documento = {
  titulo: string
  texto: string
  data?: Date
}

const documento: Documento = {
	titulo: 'o titulo',
	texto: 'o texto'
};

console.log(documento.data?.toDateString());

const documento2: Documento = {
	titulo: 'o titulo',
	texto: 'o texto',
	data: new Date()
};

console.log(documento2.data?.toDateString());

//Operador de coalescência nula -> pega somente nao valores: null e undefined

console.log(undefined ?? 'sem valor');
console.log(null ?? 'sem valor');
console.log(0 ?? 'sem valor');
console.log(false ?? 'sem valor');