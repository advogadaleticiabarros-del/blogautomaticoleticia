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

- **30/06/2026** — Lote do artigo "Rescisão indireta" (Trabalhista). 5 criativos 4:5 (HTML+PNG) em `outputs/Junho_2026/`. Distribuição Andromeda 2×C1 + 2×C2 + 1×C3:
  1. C1 Educativo — "Pedir demissão pode te custar caro" (Salva esse post)
  2. C1 Quebra argumentativa — "Dá pra sair do emprego sem perder seus direitos" (Salva pra não esquecer)
  3. C2 Demonstrativo — "A rescisão indireta paga tudo isso a você" (Veja se é o seu caso)
  4. C2 Comparativo — "Demissão ou rescisão indireta?" (Entenda seu caso)
  5. C3 Quebra de objeção/prova — "Mas como eu provo que a empresa errou?" (Fale no WhatsApp)
  - PNG renderizado via Chrome headless (`--window-size=1120,1390 --screenshot`). Todos passaram na revisão visual (texto dentro da moldura, hierarquia ok, dourado nas keywords).
  - Aprendizado: headlines de até ~6 palavras cabem em 2 linhas no font-size padrão (86px). Acima disso, encostam na moldura — reduzir fonte. Briefings vieram de mim (Claude), não da blog-para-social.
