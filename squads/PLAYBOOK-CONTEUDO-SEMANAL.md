# 📘 PLAYBOOK — Conteúdo Jurídico Semanal · Letícia Barros
> Processo oficial e repetível. Toda semana segue EXATAMENTE estes passos.
> Criado com base no fluxo desenvolvido em 30/06–01/07/2026.
> Cliente: Letícia Barros Advocacia · @adv.leticiabarros2 · OAB/ES 39.948

---

## 🎯 O QUE ESTE FLUXO PRODUZ (por semana)

**1 assunto jurídico completo**, tratado por dois ângulos, transformado em:

| Item | Quantidade | Formato |
|------|-----------|---------|
| Artigos no blog | 2 | HTML (site no ar) |
| Criativos de feed | 10 (5 por artigo) | PNG 1080×1350 |
| Legendas | 10 | texto + hashtags |
| Stories | 3 | PNG 1080×1920 |
| Calendário de postagem | 1 | HTML organizado |

**Ritmo de publicação no Instagram:** 2 posts por dia · 12h e 19h · de quarta a domingo.

---

## 🧭 PRINCÍPIOS INEGOCIÁVEIS (a alma do conteúdo)

1. **Foco no trabalhador/segurado.** O conteúdo existe para proteger e informar quem mais precisa.
2. **Dois lados sempre: DIREITOS + SINCERIDADE.** Um artigo mostra o direito/oportunidade; o outro mostra os riscos e a verdade dura. Isso diferencia a Letícia de quem só promete.
3. **Sem juridiquês.** Linguagem humanizada, direta, segunda pessoa ("você").
4. **Conformidade OAB (SEMPRE):** nunca prometer resultado, nunca garantir vitória, nunca comparar com outros advogados. Usar "pode ter direito", "a lei prevê", "vamos avaliar". Sempre convidar para consulta.
5. **Metodologia Andromeda** nos criativos: distribuição 2×C1 + 2×C2 + 1×C3 por artigo.
6. **Manual de Proibições** nas legendas: sem travessão dramático (—), sem clichê de IA ("a verdade é que", "no fim das contas", "chega de X, Y, Z"), sem superlativo vazio, sem lista automática de três.

---

## 📅 ESTRUTURA DA SEMANA (a narrativa)

- **12h = lado OPORTUNIDADE** (você tem direito) → artigo 1 (direitos)
- **19h = lado CAUTELA** (mas jogue limpo) → artigo 2 (riscos)
- Andromeda ao longo da semana: **4×C1 → 4×C2 → 2×C3** (aquece consciência, fecha convertendo)
- **Último dia = conversão:** os 2 posts C3 com CTA de WhatsApp

---

# 🔧 PASSO A PASSO

## PASSO 0 — Escolher o assunto da semana
- Consultar o banco de pautas: `squads/juridico/conteudo/pautas-fora-da-caixa.md`
- Pesquisar fundamentação atual (WebSearch) para precisão jurídica + prazos vigentes.
- Definir os DOIS ângulos do mesmo tema:
  - **Artigo 1 (direitos):** "o que é / quando tenho direito / o que recebo"
  - **Artigo 2 (sinceridade):** "vale a pena? os riscos reais / o que avaliar antes"

## PASSO 1 — Escrever e publicar os 2 artigos
Para CADA artigo:
1. **Molde:** clonar a estrutura de um artigo REAL no ar (ex.: `carga-horaria-maxima-clt.html`).
   NÃO usar o template antigo `templates/blog-article.html` (desatualizado).
2. **Design system real (tema escuro):** CSS externo `../css/pages.css?v=20260626` + `micro-interactions.css`;
   vars `--dourado #C9A962`, `--fundo-escuro #231E1A`; fontes Cormorant Garamond + Playfair + Inter + Font Awesome.
   Header/nav completo, footer completo, GA4 (`G-5B513VWB4D`), Meta Pixel (`858690737244687`), JSON-LD BlogPosting, breadcrumb, gold-line, whatsapp-float, back-top.
3. **WhatsApp real:** `5527995151402`. Nunca placeholder.
4. **Tamanho:** ~1.200–1.800 palavras. Sempre: intro com gancho, H2s com keyword, "Perguntas frequentes", "Leia também" (links internos), 1 caso típico do escritório, 2 CTAs.
5. **Publicar via SFTP** (ver Referências) na pasta pública real.
6. **Adicionar card no `index.html`** do blog (grid "Publicados recentemente" com selo "Novo" + grid "Todos os artigos") — baixar o index atual do servidor antes de editar.
7. **Adicionar entrada no `sitemap.xml`**.
8. **Verificar no ar** (HTTP 200 no artigo, card no index, url no sitemap).
9. **Backup:** git add + commit + push (origin master).

## PASSO 2 — Gerar os 10 criativos de feed (5 por artigo)
1. Para cada artigo, criar **5 briefings Andromeda** (2×C1 + 2×C2 + 1×C3): headline (≤8 palavras),
   subheadline (≤15), CTA (≤5), kicker, categoria, nível. Aplicar Manual de Proibições.
2. **Curadoria de imagens (Renata Vidal):** 1 foto de fundo humanizada por criativo (Unsplash),
   coerente com o ângulo, lado limpo para o texto, SEM texto em inglês, sem watermark.
3. **Design (Helena Prado):** usar `templates/criativo-4x5.html` (1080×1350).
   - Logo emblema no topo (`assets/logo-lb.png`, via `file:///`)
   - CTA DOURADO (gradiente), NÃO verde. Kicker com filete, keyword da headline em gradiente dourado.
   - Imagem de fundo + overlay escuro.
4. **Render PNG** via Chrome headless: `--window-size=1080,1350 --allow-file-access-from-files --virtual-time-budget=10000`.
   (body sem padding/bg → PNG sai 1080×1350 limpo, sem borda preta.)
5. Revisar visualmente cada PNG (texto dentro da moldura, legibilidade, imagem coerente).
6. Salvar em `outputs/[Mês_Ano]/` (artigo 1) e `outputs/[Mês_Ano]/[slug-artigo-2]/` (artigo 2).

## PASSO 3 — Escrever as 10 legendas
1. Uma legenda por criativo (Isabela Moura): gancho distinto da headline, 3-4 parágrafos de
   raciocínio progressivo (sem lista de tópicos), CTA integrado, 7 hashtags do setor.
2. **Revisão editorial (Marcos Vinicius):** checar Manual de Proibições e OAB. Corrigir clichês.
3. Salvar `legendas.md` na mesma pasta dos criativos de cada artigo.

## PASSO 4 — Gerar os 3 Stories (9:16, 1080×1920)
Usar `templates/story-9x16.html` (dourado + logo). Render `--window-size=1080,1920`.
1. **Story 1 — Anúncio:** "Essa semana no perfil: [TEMA]" + pílula "2 conteúdos por dia".
2. **Story 2 — Agenda:** "12h e 19h" + "Ativa o 🔔". Explica a lógica oportunidade/cautela.
3. **Story 3 — Links:** 2 cards (um por artigo) com pílula "👆 Toque para ler" para o
   sticker de link do Instagram apontando às URLs dos artigos.
Salvar em `outputs/[Mês_Ano]/stories/`.

## PASSO 5 — Montar o calendário de postagem
1. Gerar `calendario-postagem.html` (design dourado, grande, legível) com:
   - 5 dias, 2 posts/dia (12h oportunidade / 19h cautela)
   - miniatura de cada criativo + horário + nível + título + CTA
   - **legenda completa embutida + botão "Copiar legenda"**
   - tabela-resumo da semana
2. Abrir no navegador para a cliente conferir.

## PASSO 6 — Fechar
- Atualizar memórias das squads (temas publicados, aprendizados).
- Commit + push de tudo.
- Entregar à cliente: caminho das pastas + como postar (calendário + stories).

---

# 📌 REFERÊNCIAS TÉCNICAS

### Publicação no blog (Hostinger via SFTP)
- Host `147.93.38.211` · Porta SSH **65002** · Usuário `u528898188`
- **Pasta pública REAL:** `/home/u528898188/domains/advogadaleticiabarros.com.br/public_html/`
  (artigos em `.../public_html/blog/`)
- ⚠️ NÃO usar a conta FTP porta 21 (cai numa pasta antiga que dá 404).
- Comando: `curl -k --user "u528898188:<senha>" -T <arq> "sftp://147.93.38.211:65002/home/u528898188/domains/advogadaleticiabarros.com.br/public_html/blog/<arq>"`
- Verificar: `curl -o /dev/null -w "%{http_code}" https://advogadaleticiabarros.com.br/blog/<slug>.html` → 200
- GitHub (`advogadaleticiabarros-del/blogautomaticoleticia`, branch master) = só BACKUP, não publica.

### Squads e arquivos
- Squad de criativos/stories: `squads/@squad-design/criativos-estaticos/`
  - Templates: `templates/criativo-4x5.html`, `templates/story-9x16.html`
  - Logo: `assets/logo-lb.png` (emblema dourado balança + LB)
  - Saídas: `outputs/[Mês_Ano]/...`
- Squad de artigos (referência de agentes/metodologia): `squads/@softwarehouseexponencial/blog-escritor-seo-v2/`
- Squad de briefings sociais (metodologia Andromeda/Manual de Proibições): `squads/@sh10x/blog-para-social/`
- Banco de pautas: `squads/juridico/conteudo/pautas-fora-da-caixa.md`

### Identidade visual (criativos e stories)
- Tema ESCURO. Dourado gradiente `linear-gradient(135deg,#E8D7A6,#C9A962,#A8863F)`.
- Fontes: Playfair Display (títulos) + Inter (corpo). Logo emblema sempre no topo.
- CTA dourado (nunca verde). Rodapé: @adv.leticiabarros2 + OAB/ES 39.948.
- Render: Chrome headless em `C:\Program Files\Google\Chrome\Application\chrome.exe`.

### Dados fixos da marca
- WhatsApp: 5527995151402 · Tel exibido (27) 99515-1402
- E-mail: advogadaleticia.barros@gmail.com · Endereço: R. José Alexandre Buaiz, 160, Enseada do Suá, Vitória-ES
- Instagram @adv.leticiabarros2 · LinkedIn leticia-barros-996699158 · Facebook id=61576777010109
- Categorias: Trabalhista, Previdenciário, Família, Consumidor

---

# ✅ CHECKLIST DE ENTREGA (por semana)

- [ ] 2 artigos no ar (HTTP 200), com card no index e entrada no sitemap
- [ ] Design real (pages.css), WhatsApp real, sem promessa de resultado (OAB)
- [ ] 10 criativos 1080×1350 (dourado + logo + imagem), Andromeda 2C1+2C2+1C3 por artigo
- [ ] 10 legendas revisadas (sem clichê/travessão, com hashtags)
- [ ] 3 stories (anúncio, agenda, links) 1080×1920
- [ ] Calendário HTML com botão copiar legenda
- [ ] Memórias atualizadas + commit/push

---

## COMO ME PEDIR (gatilhos)
- "Roda a semana sobre [tema]" → executo o playbook inteiro, parando nos checkpoints de aprovação.
- "Só os artigos de [tema]" / "só os criativos" / "só os stories" → executo a parte pedida.
- Sempre apresento os briefings para aprovação antes de gerar as artes finais.
