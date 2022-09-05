function unirObjetos <O1, O2>(obj1: O1, obj2: O2): O1 & O2 {
	return {...obj1, ...obj2};
}

function unirObjetos2 <O1, O2>(obj1: O1, obj2: O2): O1 & O2 {
	return Object.assign({}, obj1, obj2);
}

const obj1 = {
	chave1: 'valor1',
	chave2: 'valor2'
};

const obj2 = {
	chave3: 'valor3',
	chave4: 'valor4'
};

const uniao = unirObjetos(obj1, obj2);
const uniao2 = unirObjetos2(obj1, obj2);
console.log(uniao);
console.log(uniao2);
