//permite definir o tipo de um valor e dizer ao compilador para não inferi-lo. É quando você, como programador, pode ter uma compreensão melhor do tipo de uma variável do que o que o TypeScript pode inferir por conta própria. 

//condicional
const body = document.querySelector('body');
//como o body pode ser HTMLBodyElement ou null, podemos fazer uma verificação
if (body){
	body.style.background = 'red';
}

//podemos usar o non-null assertion, mas não é recomendado
const body2 = document.querySelector('body')!;
body2.style.background = 'green';

//Podemos usar o type assertion, mas devemos ter certeza de que o elemento existe, se não tiver certeza, é recomedado usar o condicional
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'blue';

//também podemos fazer dessa maneira
const body4 = <HTMLBodyElement> document.querySelector('body');
body4.style.background = 'blue';