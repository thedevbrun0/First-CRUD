# Sistema de Cadastro e Busca de Usuários

Aplicação Front-End desenvolvida em **React** com integração a uma **API REST**, permitindo cadastrar e buscar usuários de forma dinâmica.

---
##
https://first-crud-thedevbruno.netlify.app/
---
## Tecnologias Utilizadas

- React
- React Router
- React Hook Form
- Axios
- JSON Server (API Fake)
- CSS3

---

## Funcionalidades

### Cadastro de Usuários

- Validação de campos com **react-hook-form**
- Envio de dados para API via método **POST**
- Reset automático do formulário após envio
- Tratamento de erros com `try/catch`

### Busca de Usuários

- Busca por nome (parcial ou completo)
- Filtro utilizando `includes()`
- Tratamento de erro caso usuário não seja encontrado
- Exibição dinâmica dos dados retornados da API

### Navegação entre páginas

- Implementação de rotas com **React Router**
- Navegação com `useNavigate`
- Rotas disponíveis:
  - `/` → Página de Cadastro
  - `/users` → Página de Busca de Usuários

---

## Conceitos Aplicados

- Manipulação de estado com `useState`
- Validação e controle de formulários com `useForm`
- Requisições HTTP com Axios:
  - `POST` → Cadastro de usuário
  - `GET` → Busca de usuário
- Filtro de dados com `find()`
- Tratamento de erros
- Organização do projeto por responsabilidades (pages, services, styles)

---

---

## Como Rodar o Projeto

###

```bash
Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

Instale as dependências
npm install

Inicie o JSON Server
npx json-server --watch db.json --port 3000

Rode o Projeto
npm run dev
```
