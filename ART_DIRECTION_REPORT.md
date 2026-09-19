# Direção de arte — refinamento final

## Objetivo
Refinar a percepção de qualidade sem aumentar a quantidade de conteúdo ou de componentes. O foco foi composição, ritmo, hierarquia, consistência e utilidade visual.

## Ajustes realizados

### Entrada / Home
- Removido o grande conjunto de órbitas decorativas, que criava uma linguagem visual genérica e pouco relacionada ao atlas.
- A composição agora usa uma única linha vertical de orientação, discreta e funcional como eixo editorial.
- Removida a nota promocional sobre o produto/episódio 1 para reduzir ruído.
- A ação principal **Começar a explorar** agora leva primeiro ao **Mundo**, respeitando o percurso de um iniciante: espaço antes de nomes.
- Botões ganharam estados mais discretos; o movimento foi reduzido a uma pequena resposta de interação.

### Mundo / mapa
- O mapa continua sendo o elemento visual dominante.
- O painel lateral deixou de parecer um card genérico: virou uma coluna editorial com linha divisória e menos enquadramento.
- Bordas, fundos e sombras foram reduzidos para deixar a cartografia carregar a identidade.
- Estados de hover/foco do mapa agora alteram apenas o necessário para orientar a seleção.

### Explorar
- Removido o callout genérico com ícone de brilho e CTA duplicado.
- A listagem permanece como uma estrutura editorial de linhas, não como coleção de cards.
- A hierarquia entre nome, resumo e expansão foi mantida com menos decoração.

### Busca
- Removido o `autoFocus` para não abrir o teclado inesperadamente em dispositivos móveis.
- Campo, filtros e resultados foram mantidos em uma hierarquia simples e funcional.
- Estado vazio foi reduzido a uma estrutura editorial, sem caixa decorativa pesada.

### Entidades / modais
- Mantida a folha contextual como principal superfície de consulta.
- Bordas, sombras e cantos foram reduzidos para uma aparência mais arquitetônica.
- A animação de entrada foi mantida curta porque comunica a relação entre o item selecionado e seu contexto.
- O mapa de relações continua sendo um elemento de compreensão, não uma decoração.

### Sistema visual
- Redução geral de efeitos e ornamentos.
- Tipografia serifada concentrada em títulos/editorial; Inter permanece na camada funcional.
- Contraste e espaçamento passaram a fazer mais trabalho do que efeitos.
- Textura global pontilhada foi removida por não acrescentar informação e por aproximar o produto de uma estética de template.
- Estados interativos usam principalmente contraste, linha e posição, em vez de brilho ou movimento.
- `prefers-reduced-motion` continua desativando animações e transições.

## Revisão de iniciante
Percurso principal revisado:

**Entrada → Mundo → localização espacial → Casas/Pessoas/Conceitos → contexto individual → conexões.**

A ação principal da Home foi ajustada para começar pelo mapa, reduzindo a chance de o usuário ser lançado diretamente em uma lista de nomes que ainda não consegue contextualizar.

## Verificação de zero spoilers
Foi feita nova busca textual no conteúdo e na interface por linguagem antecipatória e termos associados a revelações futuras. Não foram encontrados, no material atual, os padrões proibidos previamente auditados.

A revisão também evitou criar hierarquia visual que sugira importância futura de personagens ou eventos.

## Limitação de validação
A instalação do npm foi tentada novamente para executar uma validação real do bundle/runtime, mas o acesso ao registro excedeu o tempo limite. Portanto, esta etapa final foi validada por inspeção estrutural, revisão de interface, conteúdo e código; **não é correto afirmar que o build foi executado com sucesso neste ambiente**.
