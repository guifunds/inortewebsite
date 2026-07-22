# Inorte — Contabilidade e Gestão Empresarial

Site institucional em React (Vite + React Router), pronto para deploy na Vercel.

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em http://localhost:5173

## Deploy na Vercel

1. Suba esta pasta para um repositório no GitHub (ou GitLab/Bitbucket).
2. Na Vercel: **Add New Project** → importe o repositório.
3. A Vercel detecta Vite automaticamente (build: `npm run build`, output: `dist`). Só clicar em **Deploy**.

O arquivo `vercel.json` já contém o rewrite necessário para as rotas do React Router funcionarem (`/servicos`, `/sobre`, `/contato`).

Alternativa via CLI:

```bash
npm i -g vercel
vercel
```

## Estrutura

- `src/pages/` — Home, Servicos, Sobre, Contato
- `src/components/` — Header, Footer, WhatsAppFab
- `src/lib/contact.js` — **telefone, e-mail e endereço centralizados** (edite aqui)
- `src/lib/useReveal.js` — animação de scroll-reveal
- `src/index.css` — tokens de cor, tipografia e estilos globais

## Pendências antes de publicar

- Trocar o CNPJ placeholder no `Footer.jsx`
- Revisar os números da seção "Por que a Inorte" (`src/pages/Home.jsx`)
- Adicionar favicon (ex.: `public/favicon.svg` + link no `index.html`)
