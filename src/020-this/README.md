# Uso do this em arrow function

```typescript
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    hideAllErrorMessages(this);
    checkForEmptyFields(username, email, password, password2);
    checkEmail(email);
    checkForequalPassword(password, password2);
    if (shouldSendForm(this)) {
      console.log('Enviado.');
    }
  });

```

Se usarmos uma arrow function na função acima, o **this** apontará para o escopo global e não para o formulário, pois a função dele está sendo declarada no global, logo o **this** apontará para lá.
>(Aula 272 do curso Curso de JavaScript e TypeScript do básico ao avançado 2022).

Para conseguirmos usar uma arrow function nesse exemplo, podemos usar o **target**, pois nesse exemplo o target do submit é o formulário:

```typescript
//Está separada só pra deixar claro que o this pertence ao escopo global
const submitEventFn = (event) => {
  event.preventDefault();
  const target = event.target as HTMLFormElement;
  hideErrorMessages(target);
  checkForEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkEqualPasswords(password, password2);
  if (shouldSendForm(target)) console.log('FORMULÁRIO ENVIADO');
};

form.addEventListener('submit', submitEventFn);

```
