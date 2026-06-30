# Squad Memory — Blog Escritor SEO v2
# Cliente: Letícia Barros Advocacia & Consultoria

## Artigos Já Publicados (NÃO repetir esses temas)

| Slug | Tema | Área |
|------|------|------|
| fui-demitida-gravida-o-que-fazer | Demissão durante gravidez | Trabalhista |
| trabalhei-sem-registro-posso-processar | Trabalho sem carteira assinada | Trabalhista |
| insalubridade-quem-tem-direito | Insalubridade | Trabalhista |
| empresa-pode-obrigar-limpar-banheiro | Funções degradantes no trabalho | Trabalhista |
| pensao-alimenticia-como-funciona | Pensão alimentícia | Família |
| aposentadoria-hibrida-como-funciona | Aposentadoria híbrida | Previdenciário |
| bpc-loas-como-funciona | BPC/LOAS | Previdenciário |
| compra-online-direitos-do-consumidor | Direitos na compra online | Consumidor |
| quanto-tempo-processar-apos-demissao | Prazo para processar após demissão | Trabalhista |
| nome-negativado-indevidamente-o-que-fazer | Negativação indevida no Serasa | Consumidor |
| rescisao-indireta-o-que-e-quando-tenho-direito | Rescisão indireta (art. 483 CLT) | Trabalhista |
| rescisao-indireta-riscos-vale-a-pena | Riscos da rescisão indireta (sincero) | Trabalhista |
| carga-horaria-maxima-clt | Carga horária máxima CLT | Trabalhista |
| fgts-trabalhador-temporario-direitos-e-como-cobrar | FGTS do trabalhador temporário | Trabalhista |
| aborto-espontaneo-direitos-da-trabalhadora-clt | Aborto espontâneo e direitos | Trabalhista |
| folga-jogo-brasil-copa-direito-do-trabalhador | Folga em jogo do Brasil/Copa | Trabalhista |
| plano-de-saude-negou-cobertura-o-que-fazer | Plano de saúde negou cobertura | Consumidor |
| guarda-compartilhada-como-funciona | Guarda compartilhada | Família |
| ex-nao-paga-pensao-o-que-fazer | Ex não paga pensão | Família |

> ⚠️ Lista sincronizada com a pasta pública em 30/06/2026 (havia artigos no ar que não estavam aqui).

## Padrão do Blog (identidade visual)  ⚠️ ATUALIZADO 30/06/2026 — LER ANTES DE REDIGIR

- **❌ NÃO USAR** `templates/blog-article.html` NEM o artigo `nome-negativado` como molde — ambos estão DESATUALIZADOS (tema claro, CSS inline). O design REAL do blog é OUTRO.
- **✅ MOLDE CORRETO:** copiar a estrutura de um artigo recente que está NO AR, ex:
  `/home/u528898188/domains/advogadaleticiabarros.com.br/public_html/blog/carga-horaria-maxima-clt.html`
  (baixar via SFTP 65002 — ver seção Deploy).
- **Design system real (TEMA ESCURO):**
  - CSS externo: `<link rel="stylesheet" href="../css/pages.css?v=20260626">` + `../css/micro-interactions.css`. NÃO usar CSS inline próprio (só um `<style>` pequeno com as classes do artigo: `.article-hero`, `.article-body`, `.callout-box`, `.article-cta`, `.related-grid`, tabelas).
  - Variáveis (definidas no pages.css): `--dourado #C9A962`, `--fundo-escuro #231E1A`, `--fundo-alt #2E2720`, `--texto-claro`, `--radius-md 12px`, `--radius-lg 20px`.
  - Fontes: **Cormorant Garamond + Playfair Display + Inter** (Google Fonts) + Font Awesome 6.5.1.
  - Header completo com `nav-menu` (Home, Sobre, Escritório, Áreas, Blog, FAQ, Contato, Fale Comigo). Footer completo (4 colunas: brand+redes, Navegação, Áreas, Contato).
  - Extras obrigatórios: GA4 (`G-5B513VWB4D`), Meta Pixel (`858690737244687`), JSON-LD BlogPosting, breadcrumb, `.gold-line` entre seções, `.whatsapp-float`, `.back-top`, scripts `../../js/scroll-animations.js` e `../js/pages.js`.
  - Estrutura do corpo: `article-hero` (cat-badge + h1 com `<span class="highlight">` + article-meta + article-cover) → `article-body` (1º <p> em destaque com borda dourada) → `related-posts` grid → `cta-section` → footer.
- **WhatsApp REAL:** `5527995151402` (NÃO usar `5527999999999`). Tel exibido: (27) 99515-1402. E-mail: advogadaleticia.barros@gmail.com. Endereço: R. José Alexandre Buaiz, 160, Enseada do Suá, Vitória-ES.
- **Redes:** Instagram @adv.leticiabarros2 · LinkedIn leticia-barros-996699158 · Facebook id=61576777010109.
- **OAB:** 39.948 / ES. **Logo:** `../assets/logo/logo-sem-fundo.png`.
- **Após publicar artigo: SEMPRE adicionar o card no `index.html`** (grids `#blogGridRecent` com selo "Novo" + `#blogGrid` "Todos") e a entrada no `sitemap.xml`. Sem isso, o artigo não aparece navegando.
- **Autor:** Dra. Leticia Barros | OAB/ES · **Categorias:** Trabalhista, Previdenciário, Família, Consumidor · **Tom:** direto, empático, sem juridiquês.
- **Regra OAB:** nunca prometer resultado, sempre convidar para consulta.

## Configuração de Deploy  ⚠️ ATUALIZADO 30/06/2026 — LER ANTES DE PUBLICAR

- **Blog ao vivo:** https://advogadaleticiabarros.com.br/blog/index.html
- **Hospedagem:** Hostinger (NÃO é GitHub Pages — Pages está desativado; não há workflow).
- **MÉTODO DE PUBLICAÇÃO QUE FUNCIONA: SFTP via porta SSH 65002.**
  - Host: `147.93.38.211` | Porta: `65002` | Usuário: `u528898188`
  - **PASTA PÚBLICA REAL (a única que aparece no site):**
    `/home/u528898188/domains/advogadaleticiabarros.com.br/public_html/blog/`
  - Comando: `curl -k --user "u528898188:<senha>" -T <arquivo.html> "sftp://147.93.38.211:65002/home/u528898188/domains/advogadaleticiabarros.com.br/public_html/blog/<arquivo.html>"`
  - Verificar: `curl -sS -o /dev/null -w "%{http_code}" https://advogadaleticiabarros.com.br/blog/<slug>.html` → deve dar 200.
- **⚠️ ARMADILHA:** existe uma pasta `/home/u528898188/public_html/blog/` (sem `domains/...`) que é ANTIGA/órfã. Subir lá dá **404** no site. NÃO usar. A conta FTP simples (porta 21) cai justamente nessa pasta errada e está enjaulada (chroot) — por isso FTP na porta 21 NÃO publica. Usar sempre SFTP 65002 + caminho completo de `domains/`.
- **Backup/versionamento:** git push para https://github.com/advogadaleticiabarros-del/blogautomaticoleticia.git (branch `master`) — só backup, NÃO publica no site.
- **A pasta pública também é um repo git** (`.git/` dentro de `public_html/`).

## Preferências Editoriais

- Artigos: 1.200 a 1.800 palavras
- Sempre incluir seção "Perguntas frequentes" (melhora SEO para Featured Snippets)
- Sempre incluir seção "Leia também" (links internos para outros artigos)
- CTA: sempre convidar para WhatsApp ou consulta — nunca garantia de resultado
- Exemplos práticos: pelo menos um "caso típico do escritório" por artigo

## Keywords de Alto Desempenho
(registrar após publicações com dados do Search Console)

## Aprendizados do Pipeline

## Histórico de Execuções
_(Atualizado automaticamente após cada publicação)_

- **30/06/2026** — Artigo "Rescisão indireta: o que é e quando tenho direito" (Trabalhista, ~1.700 palavras). Commit `14d6718`, push para `origin/master` OK. Tema solicitado pelo usuário.
  - Aprendizado: o template oficial é o do artigo em produção (`nome-negativado...`) — azul `#1a3a5c` + dourado `#c8a96e` + WhatsApp `#25D366`, Playfair/Inter. **NÃO usar** `templates/blog-article.html` (vermelho/Impact, desatualizado e contra as brand-guidelines).
  - Nota: links internos do "Leia também"/sidebar apontam para artigos da memória que NÃO estão versionados neste repo local (só existem em produção). Manter os links — consistente com o artigo já publicado.
  - WhatsApp em produção usa placeholder `5527999999999` — confirmar com o usuário se há número real a substituir.
