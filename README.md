# Sistema de Cadastro de dados do CLiente

Sistema foi feita com as seguintes tecnologia:

- Front End : React, Semantic UI React, Tailwind, Javascript
- Back End: Mock Api, Javascript, CRUD/Redux, Axios, Firebase

## Descrição

No sistema é possivel cadastrar, listar, atualizar , deletar, filtrar os dados do cadastro.

## Requisitos

- Visual Code
- Terminal
- Node e npm
- GIT
- Conta no [mockApi](https://mockapi.io/)
- Criar uma api fake, segue um exemplo nesse [tutorial](https://shre.ink/tutorialApi)
- Conta do Firebase

### Firebase

1. Criar um projeto no firebase, segue um [tutorial aqui](https://medium.com/@adsonrocha/como-criar-um-projeto-no-firebase-273b984ea1b3)
2. Crir uma aplicativo formato web e pegar credenciais para executar, segue um [tutorial aqui](https://medium.com/@adsonrocha/como-criar-um-projeto-no-firebase-273b984ea1b3#:~:text=Acesse%20o%20site%20do%20Firebase,consolee%20poder%C3%A1%20criar%20projetos.)

3. Ativar autenticação de email/senha para uso do login, segue um [tutorial aqui https://firebase.google.com/docs/auth?hl=pt-br]

## Instalação

- Escolhe o diretorio de uma pasta no seu computador

- Baixar o projeto no github

```javascript
git clone https://github.com/biancac-andrade/biancac-react-firebase-client-register-system.git
```

## Execução

- Diretório do projeto clonado
- Baixa as dependencias do projeto

```javascript
npm install
```

- Incluir suas credenciais do URL e nome da rota no mockApi no arquivo de todas as chamada de axios existente de cada tela necessária, como exemplo abaixo:

```javascript
axios.post(`https://XXXXXXX.mockapi.io/XXXXX`, {
  firstName,
  nameCoordinateX,
  nameCoordinateY,
  checkbox,
});
```

2. Adicionar as credenciais no arquivo firebase.js
   - Abre o Visual Code
   - Acessa o arquivo firebase.js
   - Adiciona valores da credenciais do aplicativo que criou no firebase dentro das parenteses, como exemplo abaixo:

```javascript
const firebaseConfig = {
  apiKey: "XXXXXXXXXXXXXXXXX",
  authDomain: "XXXXXXXXXXXXXXXXX.firebaseapp.com",
  projectId: "XXXXXXXXXXXXXXXXX",
  storageBucket: "XXXXXXXXXXXXXXXXX.appspot.com",
  messagingSenderId: "XXXXXXXXXXXXXXXXX",
  appId: "XXXXXXXXXXXXXXXXX",
};
```

- executa o projeto
  ```javascript
  npm start
  ```

### Login

- Para acesso primeira vez ou não possuir uma conta registrada no firebase:
  Clica em register no aplicativo

- Cadastra seu email e senha, na qual vai ficar registrado no firebase, não é necessário de uma conta de email verdadeiro/real

## Estruturas de pasta

```shell
├── src
│   ├── components
│   │   ├── elements
│   │   ├     ├──Button
│   │   ├     ├    ├──index.js
│   │   ├     ├──Card
│   │   ├     ├    ├──index.js
│   │   ├     ├──Container
│   │   ├     ├    ├──index.js
│   │   ├     ├──Text
│   │   ├     ├    ├──index.js
│   │   ├── widgets
│   │         ├──Layuot.js
│   │         ├──NavBar.jsx
│   │         ├──SideBar.jsx
│   ├── page
│      ├── Create.jsx
│      ├── Home.jsx
│      ├── Login.jsx
│      ├── Read.jsx
│      ├── Signup.jsx
│      ├── Styles.css
│      ├── Update.jsx
├── App.js
├── firebase.js
├── index.css
├── index.js
├── .gitignore
├── package-lock.json
└── package.json
├── postcss.config.js
└── README.md
└── taiwind.config.js
```

### Melhorias

- Testes unitários e integração
- Gravar o valor corretamente da informação de estado e países
- Gravar os dados no database no firebase

#### Dias Trabalhados

- Aproxidamente 3 dias
