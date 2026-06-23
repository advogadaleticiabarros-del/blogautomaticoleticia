# Design Tokens — Letícia Barros Advocacia & Consultoria
> Extraído de: https://advogadaleticiabarros.com.br
> Data de extração: 22/06/2026
> Método: análise visual do site + padrão de advocacia humanizada

## Cores

| Token | Hex | Uso |
|-------|-----|-----|
| `color-primary` | `#1a3a5c` | Azul jurídico escuro — fundo do header, elementos de autoridade |
| `color-accent` | `#c8a96e` | Dourado/champagne — CTAs, destaques, bordas de cards |
| `color-cta` | `#25D366` | Verde WhatsApp — botões de contato direto |
| `color-dark` | `#1a1a2e` | Quase preto — texto principal |
| `color-light` | `#ffffff` | Branco — fundo de seções limpas |
| `color-bg` | `#f8f6f0` | Off-white quente — fundo geral da página |
| `color-muted` | `#6b7280` | Cinza médio — texto secundário, metadados |
| `color-border` | `#e5e0d8` | Bege claro — bordas e divisórias |

### Uso das cores
- Header: fundo azul escuro (`color-primary`) com logo branco
- Badges de categoria: fundo `color-accent` (dourado) com texto escuro
- CTA WhatsApp: sempre verde `#25D366`
- Fundo geral: off-white quente `color-bg` (transmite confiança, não é frio)

## Tipografia

### Fonte de títulos
- **Fonte:** Playfair Display (serifada elegante — padrão para advocacia de prestígio)
- **Uso:** H1, H2, título do artigo
- **Estilo:** sentence case, peso 700

### Fonte de corpo
- **Fonte:** Inter (fallback: Open Sans, sans-serif)
- **Pesos disponíveis:** 400, 500, 600
- **Uso:** parágrafos, labels, metadados — 16–18px, line-height 1.75

### Stack CSS recomendada
```css
--font-title: 'Playfair Display', Georgia, serif;
--font-body: 'Inter', 'Open Sans', sans-serif;
```

## Espaçamento e Layout
- **Largura de leitura (blog):** max-width 760px, centralizado
- **Largura do container:** max-width 1100px
- **Padding de seções:** 56px–80px vertical
- **Border radius de botões/cards:** 8px–12px

## Elementos Visuais de Marca
- Advocacia humanizada: fotos reais de pessoas, não ícones corporativos frios
- Badges de categoria com cores discretas (não cores primárias fortes)
- Logo sem fundo: `logo-sem-fundo.png` — versão limpa para uso em fundos variados
