# Decorator de classe

Um Decorator de Classe é declarado imediatamente antes de uma declaração de classe. É aplicado ao construtor da classe e pode ser usado para **observar, modificar ou substituir** uma definição de classe.

Decorators são executados apenas uma vez, quando uma definição de classe é avaliada pela primeira vez em tempo de execução. Por exemplo:

```typescript
function f(C) {
  console.log('apply decorator')
  return C
}

@f
class A {}

// output: apply decorator
```

Este código mostrará no console 'apply decorator', mesmo que nunca tenhamos inicializado uma nova instância da classe A.

[Site para referencia](https://dev.to/omarkdev/uma-introducao-pratica-a-decorators-no-typescript-3653)
