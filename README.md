# 👨‍💻 TechnicalShare - API

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-pré-requisitos">Pré-Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<p align="center">
  <a href="https://insomnia.rest/run/?label=TechnicalShare&uri=https%3A%2F%2Fgithub.com%2Fpedro-drosa%2FTecnicalShare%2Fblob%2Fpedro-mascarenhas%2FInsomnia.json" target="_blank"><img src="https://img.shields.io/badge/Docs-Run%20in%20Insomnia-purple" alt="Run in Insomnia"></a>
  <a href="https://documenter.getpostman.com/view/20525575/Uyr5nJiY" target="_blank"><img src="https://img.shields.io/badge/Docs-Run%20in%20Postman-orange" alt="Run in Postman" /></a>
</p>

## 💻 Sobre o projeto

A TechnicalShare é uma plataforma onde os usuários podem encontrar um "Mentor Ideal", com ela é possível agendar mentorias de forma simples, através de um sistema de match.

MVP Criado durante o hackaton do [programa de formaçao](https://digital.fcamara.com.br/programadeformacao) promovido pela [FCamara](https://digital.fcamara.com.br).

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node](https://nodejs.org/en/)
- [Express](http://expressjs.com/pt-br/)
- [Docker](https://www.docker.com/)
- [Sequelize](https://sequelize.org/)
- [Postgres](https://www.postgresql.org/)

## ⚠ Pré-Requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: <br/>

- [Git](https://git-scm.com)
- [NodeJS](https://nodejs.org)
- [NPM](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)

## 🚀 Como executar?

- Configure as variáveis ambiente alterando o arquivo `.env.example` para `.env`

### 🐳 Execute com o Docker [Recomendado]

1. Clone o repositório `git clone https://github.com/pedro-drosa/TecnicalShare.git`
2. Inicie os containers `docker-compose up`
3. Agora você pode acessar [`localhost:5000`](http://localhost:5000) do seu navegador.

### ⚡ Execute Sem o Docker

1. Clone o repositório `git clone https://github.com/pedro-drosa/TecnicalShare.git`
2. Instale as dependências com `npm install`
3. Inicie o servidor com `npm run start`

#### ☢ Você deve ter o Postgres devidamente configurado em sua máquina para continuar ...

4. Crie a base de dados `npx sequelize-cli db:create`
5. Execute as migrations `npx sequelize-cli db:migrate`
6. Adicione os seeds `npx sequelize-cli db:seed:all`
7. Agora você pode acessar [`localhost:5000`](http://localhost:5000) do seu navegador.

## 📄 Acesse aqui

- Link da api em produção [aqui.](https://technical-share-api.herokuapp.com)
- Link para a documentação [aqui.](https://documenter.getpostman.com/view/20525575/Uyr5nJiY)
