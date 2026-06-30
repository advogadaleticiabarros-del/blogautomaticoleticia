# Squad Memory — Criativos Estáticos
# Cliente: Letícia Barros Advocacia & Consultoria

## Sobre esta squad

Recebe briefings aprovados (da squad `blog-para-social`) e produz criativos estáticos 4:5 (1080×1350) para feed do Instagram, em HTML, no design system da Letícia Barros.

## Design system aplicado (resumo — fonte de verdade em squads/design-system/_memory/)

- Tema ESCURO: fundo `#231E1A` / `#2E2720`
- Destaque: gradiente DOURADO `linear-gradient(135deg,#E8D7A6,#C9A962,#A8863F)` (claro→base→escuro)
- Texto: off-white `#F5F1EB`
- **CTA: DOURADO** (gradiente dourado + texto escuro + sombra dourada + borda clara). NÃO usar verde WhatsApp no botão — a identidade do Instagram @adv.leticiabarros2 é dourado sobre escuro/sépia. Manter o ícone 💬 antes do texto do CTA.
- Elementos dourados: kicker com filete dourado (`::before`), palavra-chave da headline em gradiente dourado (background-clip:text), categoria em gradiente dourado, moldura dourada mais presente (border rgba .55).
- Fontes: Playfair Display (títulos) + Inter (corpo)
- **LOGOTIPO:** emblema dourado (balança da justiça + monograma LB, fundo transparente) em `assets/logo-lb.png`. SEMPRE no topo, à esquerda do nome "Letícia Barros / Advocacia & Consultoria". Referenciar por `file:///` (caminho absoluto) e renderizar com `--allow-file-access-from-files`. Fonte original: C:\Users\prosy\Desktop\modelo-visual-site\assets\logo\logo-sem-fundo.png.
- Rodapé fixo: @adv.leticiabarros2 + OAB/ES 39.948
- NÃO: fundo vermelho, CTA genérico, promessa de resultado (regra OAB)
- Referência visual: feed do Instagram da cliente — molduras douradas ornamentadas, selo dourado, tipografia dourada sobre fundo sépia/escuro.

## Template

- `templates/criativo-4x5.html` (1080×1350, placeholders entre [COLCHETES])
- Suporta IMAGEM DE FUNDO: `<img class="bg-image">` (opacity 0.42) + `.bg-overlay` (gradiente escuro) garantem legibilidade do texto. Para criativo só-tipografia, remover essas 2 tags.

## Pipeline (2 passos)

1. **Renata Vidal (curador-imagens)** — cura 1 imagem de fundo por criativo (Unsplash/assets), ou decide só-tipografia. Foto humanizada, lado limpo p/ texto, sem texto em inglês/watermark.
2. **Helena Prado (designer-criativos)** — monta a arte 4:5 com a imagem curada e exporta PNG.

## Curadoria — aprendizados

- Evitar fotos com TEXTO em inglês visível (ex.: formulários "Tax Withholding") — não casa com público BR. Trocar por cena neutra.
- Overlay escuro resolve legibilidade na maioria das fotos; ainda assim evitar fotos muito claras/estouradas.
- Renderizar PNG com `--virtual-time-budget=8000` para a imagem externa carregar antes do screenshot.
- **Borda preta:** o `<body>` NÃO pode ter `padding` nem `background` escuro (gerava faixa preta no PNG). Body deve ser só `margin:0`. Renderizar com janela EXATA do criativo: `--window-size=1080,1350 --force-device-scale-factor=1` → PNG sai 1080×1350 limpo, sem moldura preta. (Conferir dimensão: bytes 16-24 do PNG.)

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
