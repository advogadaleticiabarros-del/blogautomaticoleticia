# Plano de Automação — Blog Jurídico Dra. Leticia Barros

## Cadência Semanal

| Dia | Ação | Squad |
|-----|------|-------|
| Segunda | Publicar novo artigo jurídico | `blog-escritor-seo-v2` |
| Quarta | Publicar novo artigo jurídico | `blog-escritor-seo-v2` |
| Sexta | Gerar posts de Instagram dos 2 artigos da semana | `blog-para-social` |

---

## Como Executar Cada Dia

### Segunda e Quarta — Novo Artigo

```
/expxagents run @softwarehouseexponencial/blog-escritor-seo-v2
```

A squad vai:
1. Pesquisar temas jurídicos com alto volume de busca
2. Definir estratégia SEO e estrutura do artigo
3. Redigir o artigo completo (1.200–1.800 palavras)
4. Revisar linguagem e conformidade OAB
5. Gerar o HTML do artigo e atualizar o index
6. Fazer commit + push para o GitHub automaticamente

### Sexta — Conteúdo Instagram

```
/expxagents run @sh10x/blog-para-social
```

A squad vai:
1. Acessar os artigos publicados na semana
2. Extrair os melhores ângulos e insights
3. Criar 5 briefings de posts para Instagram (feed + stories)
4. Revisar conformidade OAB
5. Entregar os textos prontos para publicar

---

## Pauta Sugerida — Semanas 1 a 4

### Semana 1
- **Segunda:** Fui mandada embora e estou grávida — guia completo dos meus direitos
- **Quarta:** Trabalhei sem carteira assinada por anos — posso receber o que perdi?

### Semana 2
- **Segunda:** Como funciona a pensão alimentícia quando o pai some?
- **Quarta:** Comprei pela internet e o produto chegou errado — o que fazer?

### Semana 3
- **Segunda:** Posso me aposentar pelo INSS mesmo sem ter trabalhado o tempo todo?
- **Quarta:** Meu chefe me humilha no trabalho — isso é assédio moral? O que fazer?

### Semana 4
- **Segunda:** Licença-maternidade: tudo que a gestante CLT precisa saber em 2026
- **Quarta:** Dívidas no nome: o banco pode me ligar a qualquer hora?

---

## Artigos Já Publicados (não repetir)

- fui-demitida-gravida-o-que-fazer.html
- trabalhei-sem-registro-posso-processar.html
- insalubridade-quem-tem-direito.html
- empresa-pode-obrigar-limpar-banheiro.html
- pensao-alimenticia-como-funciona.html
- aposentadoria-hibrida-como-funciona.html
- bpc-loas-como-funciona.html
- compra-online-direitos-do-consumidor.html
- quanto-tempo-processar-apos-demissao.html

---

## Repositório GitHub

- **URL:** https://github.com/advogadaleticiabarros-del/blogautomaticoleticia.git
- **Branch:** master
- **Blog ao vivo:** https://advogadaleticiabarros.com.br/blog/index.html

---

## Problema Conhecido: Autenticação GitHub

O push automático requer que o usuário `prosystemcomercial-JESSICA` (conta Git local) 
tenha permissão de escrita no repositório `advogadaleticiabarros-del`.

**Solução:** A titular do repositório deve:
1. Acessar o repositório no GitHub
2. Ir em Settings > Collaborators > Add people
3. Adicionar `prosystemcomercial-JESSICA` como colaboradora

**Ou:** Configurar um Personal Access Token da conta `advogadaleticiabarros-del`:
```
git remote set-url origin https://<TOKEN>@github.com/advogadaleticiabarros-del/blogautomaticoleticia.git
```
