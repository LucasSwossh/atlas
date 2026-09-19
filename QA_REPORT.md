# Auditoria QA — Atlas de Westeros

## Resultado
A auditoria foi feita como revisão independente de UX, UI, responsividade, interação, performance, acessibilidade e conteúdo.

## Problemas encontrados e corrigidos

### UX
- O menu móvel estava presente no JSX, mas sem estilos de exibição/linhas de navegação funcionais → corrigido.
- O fluxo “Estou perdido” mantinha o modal aberto ao selecionar uma entidade → corrigido: o fluxo fecha antes de abrir o contexto.
- O mapa dizia que podia ser arrastado, mas a implementação inicial não suportava arraste → corrigido com pointer drag, além de zoom e reset.
- Componentes principais estavam concentrados em um único arquivo → refatorados em componentes separados.

### UI
- Símbolos das Casas usavam emoji, destoando da direção “atlas histórico/premium” → substituídos por marcas tipográficas discretas.
- Navegação e modal receberam estados/foco mais consistentes.
- O menu móvel passou a seguir a mesma linguagem visual do restante da interface.

### Mobile
- Menu móvel corrigido.
- Mapa mantém controles acessíveis e permite arraste por pointer/touch.
- Alvos principais permanecem adequados para toque.
- Bottom navigation continua disponível em telas pequenas.

### Interação
- Busca e filtros foram verificados por leitura do fluxo e permanecem derivados diretamente do dataset.
- Modais possuem fechamento por botão, clique no backdrop e Escape.
- Diagrama usa nós clicáveis e relações derivadas dos dados.
- Accordion de exploração mantém o contexto.

### Acessibilidade
- Foco visível já presente no design system.
- Modais passaram a ter foco inicial, Escape e foco preso por Tab.
- `aria-selected`, `aria-expanded`, `aria-label` e roles relevantes foram reforçados.
- Reduced motion continua coberto por `prefers-reduced-motion`.
- Elementos puramente decorativos recebem `aria-hidden` quando aplicável.

### Performance
- Nenhuma imagem pesada é necessária.
- A dependência `@vitejs/plugin-react`, não utilizada pelo projeto, foi removida.
- O mapa é CSS/HTML e não depende de biblioteca cartográfica pesada.
- O diagrama é renderizado diretamente no DOM/CSS.
- O dataset é local e pequeno.

## Auditoria de spoilers
Não foram encontrados termos explícitos relacionados a mortes, destinos futuros, traições, guerras futuras, vencedores/derrotados, profecias, teorias ou parentescos secretos posteriores.

O conteúdo permanece limitado a contexto introdutório: localização, Casas, cargos, instituições, relações familiares ou institucionais apresentadas como contexto básico e conceitos necessários para orientação.

Não foram adicionadas frases como “você descobrirá depois”, “preste atenção”, “mais tarde” ou equivalentes que criem antecipação narrativa.

## Limitação da validação de runtime
Foi tentada a instalação das dependências com `npm install`, mas o ambiente não concluiu o acesso ao registry dentro do limite disponível. Por isso, esta auditoria não declara um build de produção executado neste ambiente. A revisão incluiu inspeção estrutural dos arquivos e dos fluxos implementados.
