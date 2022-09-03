# Restriçoes com Generics

Para fazer restrições com Generics, utilizamos a palavra **extends**. Outro exemplo de restrição seria:

```typescript
function example <T extends string | number> (value: T) {
 return value;
}

//Isso gera um erro, pois a função permite apenas um numero ou string como parametro
example(false);
```
