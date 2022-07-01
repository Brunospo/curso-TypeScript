//Prova de que o typescript não está preocupado com a identidade dos tipos e sim com seu conteudo

type User = { username: string, password: string }

type VerifyLogedUser = (user: User, sentUser: User) => boolean

//Não foram indicados os tipos desses objetos e mesmo assim o Ts não gera erro ao passa-los na função abaixo.
//Ex: O tipo pode ser o que for, mas se conter username e password, o TS não reclama
const user = {username: 'bruno', password: '123a'};
const sUser = {username: 'bruno', password: '123a', active: ''};

const verifyUser: VerifyLogedUser = (user, sentUser) => {
	return user.username === sentUser.username && user.password === sentUser.password;
};

console.log(verifyUser(user, sUser));