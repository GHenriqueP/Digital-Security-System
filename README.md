# Digital-Security-System

Este é um projeto de exemplo que demonstra como configurar um ambiente de desenvolvimento local com Docker e Prisma para uma API Node.js que utiliza um banco de dados MySQL.

O objetivo desta API é possibilitar o cadastro de sistemas no banco de dados, bem como a busca dos registros, alteração e criação de novos sistemas.

## Backend

O backend deste projeto foi construído usando as seguintes tecnologias:

- **Node.js:** O ambiente de execução JavaScript que permite a construção de aplicativos do lado do servidor.
- **Express.js:** Um framework web para Node.js que simplifica a criação de APIs e aplicativos web.
- **Prisma:** Um ORM (Object-Relational Mapping) para banco de dados que facilita a interação com o banco de dados.
- **Commitizen:** Uma ferramenta para facilitar a padronização de mensagens de commit no projeto.
- **Swagger:** Uma ferramenta para documentação de APIs que torna a documentação e teste de endpoints mais fácil.
- **TypeScript:** Uma linguagem que adiciona tipagem estática ao JavaScript, trazendo maior segurança e inteligência ao desenvolvimento.

## Frontend

O frontend deste projeto foi desenvolvido usando as seguintes tecnologias:

- **React:** Uma biblioteca JavaScript para construção de interfaces de usuário interativas.
- **Next.js:** Um framework para React que facilita a criação de aplicativos web rápidos e escaláveis.
- **Material Icons:** Um conjunto de ícones de design do Google que são fáceis de incorporar em seu aplicativo.
- **Radix UI:** Uma biblioteca que oferece componentes acessíveis e de alto desempenho para a construção de interfaces de usuário.
- **Tailwind CSS:** Uma estrutura de design utilitária que permite estilizar facilmente os componentes e elementos do frontend.

## Pré-requisitos

Antes de começar, certifique-se de que você tenha o seguinte instalado em sua máquina:

- Docker: [Instalação do Docker](https://docs.docker.com/get-docker/)
- Git: [Instalação do Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- Node: [Instalação do Node](https://nodejs.org/pt-br/download/package-manager)

## Como Executar

Siga estas etapas cuidadosamente para configurar e executar o projeto em sua máquina:

### Configuração do Backend

1. **Clone o repositório:**

`git clone https://github.com/seu-usuario/seu-projeto.git`

2. **Configure as variáveis de ambiente:**

Dentro do diretório do projeto, na pasta "server", crie um arquivo `.env` para armazenar suas variáveis de ambiente, incluindo as informações de conexão do banco de dados. Cole a URL a seguir no arquivo `.env` como exemplo (ajuste-a conforme necessário):

`DATABASE_URL=mysql://root:dbpass123@localhost:3306/database`

3. **Inicie o servidor backend:**

Dentro da pasta "server", execute os seguintes comandos no terminal:

`docker-compose build`
`docker-compose up`

### Configuração do Frontend

1. **Instale as dependências do Frontend:**

Navegue até a pasta "web" e execute o seguinte comando no terminal:

`npm install`

Isso instalará todas as dependências necessárias para o Frontend da aplicação.

2. **Inicie o Frontend:**

Execute o seguinte comando dentro da pasta "web" no terminal:

`npm run dev`

Após a execução, segure a tecla `Shift` e clique com o botão direito na rota fornecida pelo Next.js no terminal para abrir a aplicação em seu navegador.

Agora, seu projeto está configurado e em execução em sua máquina local. Aproveite!

**Observação:** Certifique-se de ajustar as informações específicas do seu projeto nas etapas apropriadas, como a URL do banco de dados e outras configurações personalizadas.

## Acessando a Documentação da API

Este projeto utiliza o Swagger para documentar a API, facilitando a compreensão e o teste dos endpoints disponíveis. Siga as etapas abaixo para acessar a documentação da API:

1. **Inicie o servidor do projeto:**

   Certifique-se de que o servidor do projeto esteja em execução. Se você seguiu as etapas anteriores em "Como Executar", o servidor da API deve estar rodando na porta padrão `localhost:3000`.

2. **Acesse a documentação via navegador:**

   Abra o seu navegador da web de preferência e digite o seguinte URL:

`http://localhost:3000/api-docs`

Isso abrirá a interface Swagger UI, onde você poderá explorar a documentação da API de forma interativa. Você verá informações sobre os endpoints, as requisições suportadas, os parâmetros e as respostas.

3. **Teste os endpoints:**

Com a documentação aberta, você pode experimentar e testar os endpoints da API diretamente na interface Swagger UI. É uma ótima maneira de entender como a API funciona e verificar se tudo está funcionando conforme o esperado.

A documentação Swagger torna mais fácil para desenvolvedores e usuários entenderem a API e interagirem com ela de forma eficiente.

Lembre-se de atualizar esta seção com informações específicas sobre a sua API, se necessário, e certifique-se de que o servidor da API esteja em execução para que a documentação esteja disponível no endereço `localhost:3000/api-docs`.

Aproveite a exploração da sua API!
