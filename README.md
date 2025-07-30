Casas Acolhem Backend
API backend para plataforma de cadastro e conexão de casas de acolhimento para pessoas com dependência química, voluntários e admins.

Tecnologias
NestJS — framework Node.js para construir APIs escaláveis

Prisma — ORM para acesso e gerenciamento do banco de dados

Banco de dados: PostgreSQL (configurável via .env)

Testes com Jest

Linter e formatação com ESLint e Prettier

Funcionalidades
Cadastro de usuários: voluntários, pessoas dependentes químicas e casas de acolhimento

Gerenciamento de dados específicos para casas (capacidade, necessidades, documentos, etc)

Controle de admins para aprovação e gestão de cadastros

Endpoint para consulta de casas disponíveis e status de vagas

Upload e associação de documentos às casas de acolhimento


## INICIA O PRISMA:
npx prisma init;
npx prisma migrate dev;
npx prisma generate;
npx prisma studio;

## CRIA O BANCO DE DADOS:
npx prisma migrate dev;

## CRIA O CLIENTE DO PRISMA:
npx prisma generate
