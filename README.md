# Atlas de Westeros

Guia interativo mobile-first, sem spoilers, construído em React + Vite.

## Stack
- React 18
- Vite
- Lucide React
- CSS puro com design system próprio

## Estrutura
- `src/components/` — reservado para componentes extraídos/reutilizáveis
- `src/data/content.js` — entidades e relações, separados da UI
- `src/lib/` — lógica auxiliar
- `src/styles/global.css` — tokens, responsividade, acessibilidade e componentes visuais
- `src/main.jsx` — composição da aplicação

## Rodar
```bash
npm install
npm run dev
```

Build de produção:
```bash
npm run build
npm run preview
```

## Princípios
- zero spoilers;
- mobile-first;
- progressive disclosure;
- mapa funcional em SVG/CSS;
- busca e filtros reais;
- relações como dados de primeira classe;
- teclado, foco visível e reduced motion;
- sem imagens externas obrigatórias.

## Conteúdo
O dataset inicial contém apenas contexto introdutório. A base foi deliberadamente mantida curta para preservar a experiência de descoberta. Antes de adicionar qualquer entidade ou relação, aplicar a auditoria de spoiler definida na especificação do produto.
