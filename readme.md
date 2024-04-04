# Pass In API

## Descrição

Uma API desenvolvida para criar, gerenciar e se inscrever em eventos. Ela fornece endpoints para realizar operações como criar eventos, listar participantes, gerenciar inscrições, fazer check-ins, entre outros.

Este projeto foi desenvolvido durante o evento NLW Unite, organizado pela Rocketseat.

## Tecnologias Utilizadas

- NodeJs
- Fastify
- Zod
- Fastify Type Provider Zod
- Prisma

## Como Utilizar

Para começar a utilizar a Pass In API, siga estas etapas:

1. Clone o repositório em sua máquina local:

```
git clone https://github.com/nilloferreiira/pass-in-api.git
```

2. Navegue até o diretório do projeto:

```
cd pass-in-api
```

3. Instale as dependências do projeto:

```
npm install
```

4. Alimente o banco de dados:

   Certifique-se de ter as bibliotecas `dayjs` e `@faker-js/faker` instaladas. Em seguida, execute o seguinte comando para alimentar o banco de dados com dados de exemplo:

```
npx prisma db seed
```

5. Crie a build da aplicação:

```
npm run build
```

6. Inicie o servidor:

```
npm run start
```

7. Acesse a documentação:

Abra o seu navegador e acesse o seguinte endereço para ver a documentação da API:

```
http://localhost:3333/docs
```

## Documentação

A documentação da Pass In API está disponível em [http://localhost:3333/docs](http://localhost:3333/docs). Nela, você encontrará informações detalhadas sobre todas as rotas da aplicação, incluindo o que cada rota faz e os tipos de retorno de cada uma.

---

Espero que estas instruções sejam úteis para começar a utilizar a Pass In API. Se tiver alguma dúvida ou encontrar algum problema durante o processo, não hesite em entrar em contato conosco.