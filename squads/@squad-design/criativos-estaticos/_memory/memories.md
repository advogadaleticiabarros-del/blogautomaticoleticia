# Squad Memory — Criativos Estáticos
# Cliente: Letícia Barros Advocacia & Consultoria

## Sobre esta squad

Recebe briefings aprovados (da squad `blog-para-social`) e produz criativos estáticos 4:5 (1080×1350) para feed do Instagram, em HTML, no design system da Letícia Barros.

## Design system aplicado (resumo — fonte de verdade em squads/design-system/_memory/)

- Tema ESCURO: fundo `#231E1A` / `#2E2720`
- Destaque: dourado `#C9A962` | Texto: off-white `#F5F1EB` | CTA: WhatsApp `#25D366`
- Fontes: Playfair Display (títulos) + Inter (corpo)
- Rodapé fixo: @adv.leticiabarros2 + OAB/ES 39.948
- NÃO: fundo vermelho, CTA genérico, promessa de resultado (regra OAB)

## Template

- `templates/criativo-4x5.html` (1080×1350, placeholders entre [COLCHETES])

## Output

- `outputs/[Mês_Ano]/criativo-[N]-[slug].html`

## Encadeamento

- Acionada pela `blog-para-social` (step-06 dispatcher) OU diretamente com um briefing.
- A `blog-para-social` é acionada após a publicação de um novo artigo (ver fluxo de publicação do blog).

## Histórico de execuções
_(Atualizado após cada lote)_
