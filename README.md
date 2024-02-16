Este é desafio técnico para a empresa Invillia.

### DESCRIÇÃO DO PROJETO

O HelloWord é um aplicativo móvel que permite aos usuários visualizarem e gerenciarem palavras em inglês, fornecidas pela API Free Dictionary.

A seguir, uma lista das tecnologias adotadas para este projeto e o porquê de cada escolha:

### TECNOLOGIAS (MOBILE)

- **Expo**: oferece simplicidade nas ferramentas e na configuração do app para iOS e Android. Isso poupa tempo na configuração inicial dos projetos.
- **Jotai**: uma biblioteca _lightweight_, orientada a Typescript que gerencia estados globais da aplicação utilizando a abordagem atômica.
- **NativeWind**: um sistema de estilização universal que permite usar o Tailwind, um framework de estilos, em apps React Native. Com isso, é possível usar um único conjunto de classes de estilo (Tailwind CSS) tanto para Android como para iOS. Além disso, NativeWind promove uma melhor DX(Developer Experience) e manutenibilidade.
- **Jest**
- **Maestro**
- **FlashList**:

### TECNOLOGIAS (BACKEND)

- **Firebase**: oferece banco de dados real-time, no SQL e gerencia de forma segura e performática o cache das informações. Assim, é possível criar uma aplicação offline-first sem complicações.

### WIREFRAME

Uma representação das interfaces e funcionalidades básicas do app HelloWord [feito na Whimsical](https://whimsical.com/helloword-EdUUCneCAjg8onnJy3ep8Q).

![[Pasted image 20240209140030.png]]

### PROCESSO DE DESENVOLVIMENTO

Para este projeto, segui a seguinte linha de pensamento:

1. **Análise de Requisitos**: Compreensão dos requisitos do desafio e definição das funcionalidades principais do aplicativo inicialmente com papel e caneta. Defini o nome do aplicativo como uma referência ao mundo da programação "Hello World".
2. **Escolha de Tecnologias**: Pesquisei e selecionei do meu banco de ferramentas as tecnologias mais adequadas para o desenvolvimento, levando em consideração a simplicidade, eficiência e desempenho.
3. **Wireframe**: Criação de uma representação das interfaces e funcionalidades básicas do app HelloWord com a ajuda do Whimsical.
4. **Desenvolvimento Frontend e Backend**: Implementação das funcionalidades do aplicativo tanto no Frontend quanto no Backend, utilizando as tecnologias escolhidas. Sempre inicio com a implementação visual das telas e dos componentes para depois implementar as funcionalidades. Mas antes de implementá-las, já desenho os testes unitários para cada componente.
5. **Testes e Depuração**: Realização de testes unitários e de integração para garantir a qualidade e estabilidade do aplicativo. Depuração de erros e correções de bugs conforme necessário. Dou muita prioridade aos testes unitários e E2E, então fiz uma pesquisa das tecnologias que melhor desempenham no React Native.
6. **Documentação**: Preparação da documentação do projeto, incluindo este README.md, para fornecer informações detalhadas sobre o aplicativo, seu funcionamento e as tecnologias utilizadas. Recorri aos meus desenhos e anotações durante o desenvolvimento para criar um README fácil de entender e que descrevesse meu processo de desenvolvimento.

#### Pontos importantes a se destacar

Durante o desenvolvimento de meus projetos, evito fazer melhorias prematuras, seguindo o princípio de Dun Knuth:

> **premature optimization is the root of all evil**.

Também sigo os princípios YAGNI e KISS, para manter o código o mais limpo e claro possível.

### COMO INSTALAR E EXECUTAR O PROJETO

1. Faça o clone deste projeto da maneira que preferir.
2. Instale as dependências do projeto:

```bash
yarn install
```

3. Execute o projeto:

```bash
yarn ios
```

Ou

```bash
yarn android
```

4. E também, execute o servidor local:

```bash
yarn server
```
