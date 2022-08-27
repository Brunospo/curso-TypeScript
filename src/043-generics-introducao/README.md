# Como não usar os generics

Aqui tentei usar os Generics para tipar uma função que recebia um array e retornava a soma dos elementos do array, porém foge do contexto do Generic pois tenho que fazer uma verificação de tipo.

```typescript
function testeFunction<T>(args: T[]): T {
 const t = args.reduce((acc, v) => {
  if (typeof v === 'number' && typeof acc === 'number'){
   return acc + v;
  }
  return 0;
 },0);

 return t;
}

const teste = testeFunction(['1','asd',3]);
console.log(teste);
```
