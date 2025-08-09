# Plataforma de Conexão entre Casas de Acolhimento, Voluntários e Beneficiários

Este projeto tem como objetivo criar uma plataforma que conecte casas de acolhimento de adultos em situação de vulnerabilidade com voluntários, doadores e pessoas em necessidade de apoio.

## 🚀 Funcionalidades principais

- Cadastro e validação de casas de acolhimento por administradores voluntários
- Página pública com:
  - Testemunhos de pessoas recuperadas
  - Divulgação de necessidades das casas (itens, serviços, voluntariado)
- Sistema de candidatura de voluntários e beneficiários
- Área de administração para triagem de novos cadastros
- Painel para gestão interna das casas de acolhimento

## 🛠️ Tecnologias

- **Backend:** NestJS + Prisma
- **Banco de Dados:** PostgreSQL (ou SQLite para dev)
- **Frontend:** React (em breve)
- **Hospedagem:** Vercel (frontend) / Railway (backend)

## 📦 Instalação

```bash
# clone o projeto
git clone https://github.com/seuusuario/casas_acolhem-back.git
cd casas_acolhem-back

# instale as dependências
npm install

# rode as migrations do prisma
npx prisma migrate dev

# inicie a API
npm run start:dev
