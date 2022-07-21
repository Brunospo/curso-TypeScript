# Interface vs type

> Há uma ótima explicação na aula 295 do curso de TypeScript

## Complemento da Documentação oficial

Existem dois tipos principais para declarar a forma de um objeto: **interfaces** e **tipos**.

Eles são bem parecidos e para a maioria dos casos funcionam da mesma forma.

```typescript
type TipoPassaro = {
  asas: 2;
};

interface InterfacePassaro {
  asas: 2;
}

const passaro1: TipoPassaro = { asas: 2 };
const passaro2: InterfacePassaro = { asas: 2 };
```

Porque o Typescript é um sistema de tipagem estrutural é possível misturar o seu uso também.

```typescript
const passaro3: InterfacePassaro = passaro1;
```

Ambos suportam a extensão de outras interfaces e tipos. Os tipos fazem isso através da interseção de tipos, enquanto interfaces possuem uma palavra-chave.

```typescript
type Coruja = { noturno: true } & TipoPassaro;
type Robin = { noturno: false } & InterfacePassaro;

interface Pavao extends TipoPassaro {
  colorido: true;
  voa: false;
}
interface Galinha extends InterfacePassaro {
  colorido: false;
  voa: false;
}

let coruja: Coruja = { asas: 2, noturno: true };
let galinha: Galinha = { asas: 2, colorido: false, voa: false };

```

## Tendo dito isso nós recomendamos você a usar interfaces ao invés de tipos

### Especialmente porque você recebe melhores mensagens de erro

Se passar o mouse sobre o erro, você pode ver os erros que o Typescript mais focados para interfaces como a Galinha.

```typescript
coruja = galinha;
/*
  let coruja: Coruja
  Type 'Galinha' is not assignable to type 'Coruja'.
  Property 'noturno' is missing in type 'Galinha' but required in type '{ noturno: true; }'.(2322)

input.tsx(27, 17): 'noturno' is declared here.
*/

galinha = coruja;

/*
  let galinha: Galinha
  Type 'Coruja' is missing the following properties from type 'Galinha': colorido, voa
*/

```

Uma das maiores diferenças entre tipos e interfaces é que interfaces são abertas e tipos são fechados. Isso signifca que você pode extender interfaces declarando uma segunda vez.

```typescript
interface Gato {
  ronrona: boolean;
}

interface Gato {
  cor: string;
}
```

Por outro lado tipos não podem ser alterados fora da própria declaração.

```typescript
type Filhote = {
  cor: string;
};

//aparece erro aqui
type Filhote = {
  brinquedos: number;
};
```

Dependendo dos seus objetivos essa diferença pode ser positiva ou negativa. No entando, para expor os tipos publicamente é melhor transformá-los em interfaces.

## Olhar Mapped Types no YT
