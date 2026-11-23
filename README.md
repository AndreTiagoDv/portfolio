# Andre Tiago — Portfólio

Portfólio pessoal em pt-BR com experiência profissional, três projetos, formação, cursos, currículo em PDF e contato por e-mail.

## Desenvolvimento

Requisitos: Node.js 22.12 ou superior e npm.

```sh
npm ci
npm run dev
```

## Verificação

```sh
npm run build
npm run lint
npm run preview
```

A build executa a checagem TypeScript e gera o site estático em `dist`.

## Publicação

O projeto Vercel `portfolio` está conectado a `AndreTiagoDv/portfolio`, com produção na branch `main`. Configuração: framework Vite, comando `npm run build`, saída `dist`.

O site não usa backend, banco, formulário ou variáveis de ambiente. Não adicione credenciais ao repositório.

## Conteúdo

- Conteúdo e links: `src/App.vue`.
- Estilos responsivos: `src/portfolio.css`.
- Currículo: `public/andre-tiago-curriculo.pdf`.
- Metadados: `index.html`.

Os projetos profissionais são descritos em nível conceitual; o código deste repositório é apenas o portfólio. As ilustrações não são capturas de sistemas internos. Os cursos foram conferidos no LinkedIn em novembro de 2026; o item AWS é material preparatório, não certificação profissional.
