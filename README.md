# Acuttis - Frontend da Avaliação Técnica

> Os commits foram realizados buscando se basear em [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/)

> O projeto foi executado usando o NPM 8.5.0 e Node.js 16.14.2.

Projeto criado com [Create React App](https://github.com/facebook/create-react-app).

## Scripts disponíveis

> Executar no diretório raiz do projeto:

### `npm start`

Executa o sistema no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

### `npm test`

Executa os testes em modo de monitoramento, que faz reexecutar sempre que acontece modificações.\
[Saiba mais](https://facebook.github.io/create-react-app/docs/running-tests)

### `npm run build`

Gera o sistema para produção na pasta `build`.\
[Saiba mais](https://facebook.github.io/create-react-app/docs/deployment)

## Versão disponível online

Foi realizado deploy na Heroku e está acessível na seguinte URL:\
Frontend: https://acuttis-frontend-avaliacao.herokuapp.com <br>
Backend: https://acuttis-backend-avaliacao.herokuapp.com

> A primeira execução pode ser lenta porque no plano grátis a máquina virtual hiberna.

## Execução do sistema

É possível verificar que a API está em funcionamento apenas usando os testes ou acessando a publicação na Heroku. Mas também pode rodar em máquina local da seguinte forma:
- Abrir o arquivo `.env.example` na raiz do projeto e seguir as intruções.
  - A URL do backend pode ser a publicação na Heroku ou o ambiente no computador local.
  - Se o backend for executado localmente sem alterar a porta será o seguinte endereço: http://localhost:4000 (siga as instruções do README.md no backend).
- Executar na raiz `npm start` e acessar [http://localhost:3000](http://localhost:3000).
  - **Atenção!** Certifique que a porta 3000 esteja disponível.

> Também é possível executar a versão de produção. No lugar de executar `npm start`, execute na raiz os comandos `npm run build` e depois `serve -s build`.

> Usar a mesma versão do Node.js se encontrar problemas, para isso basta utilizar a ferramenta nvm ([Node Version Manager](https://github.com/nvm-sh/nvm)).
