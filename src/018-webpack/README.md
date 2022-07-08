### OBS

- Essa configuração de Webpack é usada apenas para projetos front-end (um único arquivo bundle gerado pelo webpack), no Back-end podemos compilar os arquivos .ts e manter a estrutura das pastas.
- Os arquivos .html e .css serão criados na pasta dist para facilitar

## Foram instaladas as seguintes dependências

```
npm install ts-loader webpack webpack-cli -D
```

O ts-loader "permite" o Webpack interpretar arquivos TypeScript.

## Propriedade no webpack.config

```
devtool: 'source-map'
```

Essa propriedade é usada para mapear as linhas do arquivo compilado .js no(s) arquivo(s) .ts para achar, por exemplo, erros facilmente.

## Outro arquivo tsconfig

Foi criado outro arquivo tsconfig (tsconfig.frontend.json) para separar o build dos arquivos de back-end e front-end.
