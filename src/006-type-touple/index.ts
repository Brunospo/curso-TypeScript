//Esse tipo não existe no JS, ele é um array de tamanho fixo e os valores devem corresponder ao respectivo tipo especificado

//evitar a alteração dos valores:
const dadosClientes1: readonly [number, string] = [12, 'Bia'];
//erro: dadosClientes1[0] = 1;

//Os valores podem ser alterados:
const dadosClientes2: [number, string, string] = [14, 'Ana', 'Clara'];
dadosClientes2[0] = 13;
const dadosClientes3: [number, string, string?] = [16, 'Cleia'];
const dadosClientes4: [number, string, ...string[]] = [18, 'Ana', 'clara', 'cleia'];

console.log(dadosClientes1);
console.log(dadosClientes2);
console.log(dadosClientes3);
console.log(dadosClientes4);