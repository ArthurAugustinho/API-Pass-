# **API-Pass**

Uma API para gerenciamento de usuários, médicos, pacientes e consultas. Desenvolvida em **TypeScript**, utilizando **Node.js**, **Prisma ORM** e banco de dados **PostgreSQL**.

---

## **Sumário**
- [Sobre](#sobre)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Requisitos do Sistema](#requisitos-do-sistema)
- [Instalação e Configuração](#instalação-e-configuração)
- [Execução do Projeto](#execução-do-projeto)
- [Seed de Dados](#seed-de-dados)
- [Modelos do Banco de Dados](#modelos-do-banco-de-dados)
- [Rotas da API](#rotas-da-api)
- [Contribuição](#contribuição)
- [Licença](#licença)

---

## **Sobre**

O **API-Pass** é um projeto que permite o gerenciamento de:
- **Usuários**: Cadastro e autenticação.
- **Médicos**: Registro de médicos com especialidades e horários de atendimento.
- **Pacientes**: Cadastro e agendamento de consultas.
- **Consultas**: Criação, listagem e histórico de consultas médicas.

---

## **Tecnologias Utilizadas**
- **Node.js**: Runtime para execução do JavaScript.
- **TypeScript**: Linguagem para maior segurança e produtividade.
- **Prisma**: ORM para interagir com o banco de dados PostgreSQL.
- **PostgreSQL**: Banco de dados relacional.
- **Express**: Framework para criação de APIs REST.
- **Luxon**: Manipulação de datas e horários.

---

## **Requisitos do Sistema**
- **Node.js**: Versão 16 ou superior.
- **Docker**: Para configurar e executar o banco de dados PostgreSQL.
- **npm**: Para gerenciar dependências.

---

## **Instalação e Configuração**

1. Clone o repositório:
   ```bash
   git clone https://github.com/Guilherme549/API-Pass-.git
   cd API-Pass-
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure as variáveis de ambiente:
   ```bash
   DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/DATABASE_NAME
   JWT_SECRET=sua_chave_secreta
   PORT=3000
   ```
4. Configure o banco de dados:
   ```bash
   docker-compose up -d
   ```
   ```bash
   npx prisma migrate dev
   ```

## 5. Execução do Projeto

   ```bash
   npm run dev
   ``` 

### O servidor estará disponível em: http://localhost:3000.
