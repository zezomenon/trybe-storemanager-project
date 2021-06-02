# Projeto Store Manager - Trybe

Projeto desenvolvido durante o curso de Desenvolvimento Web Full Stack - Trybe, como forma de avaliação dos conhecimentos adquiridos durante o módulo de Back-end.

---

# Habilidades

- Entender o funcionamento da camada de Model;
- Delegar responsabilidades específicas para essa camada;
- Conectar sua aplicação com diferentes bancos de dados;
- Estruturar uma aplicação em camadas;
- Delegar responsabilidades específicas para cada parte do seu app;
- Melhorar manutenibilidade e reusabilidade do seu código;
- Entender e aplicar os padrões REST;
- Escrever assinaturas para APIs intuitivas e facilmente entendíveis.

---

## O que foi desenvolvido

Uma API utilizando a arquitetura MSC (Models, Service e Controllers).

A API construída trata-se de um sistema de gerenciamento de vendas, onde será possível criar, visualizar, deletar e atualizar produtos e vendas.

Através dessa aplicação, é possível realizar as operações básicas que se pode fazer em um determinado banco de dados: Criação, Leitura, Atualização e Exclusão (ou `CRUD`, pros mais íntimos 😜).

Foi utilizado o banco MongoDB para a gestão de dados. Além disso, a API segue o padrão RESTful.

Como requisito para esse projeto, é possível que o usuário, independente de cadastramento ou login, possa adicionar, ler, deletar e atualizar produtos no seu estoque. O usuário pode também enviar vendas para o sistema. Essas vendas validam se o produto em questão existe. Também é possível ler, deletar e atualizar vendas.

---
### Todos os endpoints estão no padrão REST

- Verbos HTTP adequados para cada operação.

- Os endpoints sempre retornam uma resposta, havendo sucesso nas operações ou não.

- Retorna o status correto (recurso criado, erro de validação, autorização, etc).

---

## Tecnologias utilizadas

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

- [Express](https://expressjs.com/pt-br/)

- [Git](https://git-scm.com/)

- [Node.js](https://nodejs.org/en/)

- [MongoDB](https://www.mongodb.com/)
