const fs = require('fs');
const path = require('path');
const base = 'C:/Users/prosy/blogautomaticoleticia/squads/@squad-design/criativos-estaticos';
const tpl = fs.readFileSync(path.join(base, 'templates/carrossel-4x5.html'), 'utf8');
const outDir = path.join(base, 'outputs/Julho_2026/carrossel-gestante-reverter-demissao');
fs.mkdirSync(outDir, { recursive: true });
const logoSrc = 'file:///' + base + '/assets/logo-lb.png';
const TOTAL = 5;

function pager(active){
  let s = '';
  for(let i=1;i<=TOTAL;i++) s += `<i class="${i===active?'on':''}"></i>`;
  return s;
}
const swipe = '<span class="swipe">Arrasta <span class="arrow">→</span></span><span class="handle">@adv.leticiabarros2</span>';
const cta = '<span class="cta">💬 Fale no WhatsApp</span><span class="handle">@adv.leticiabarros2<br>OAB/ES 39.948</span>';

const slides = [
  { 
    file:'slide-1-capa.html', num:1,
    img:'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1080&q=80',
    kicker:'Segundo chance', foot:swipe,
    headline:'Pedi demissão e me <em>arrependi</em>',
    text:'Se você estava sob coação, sim, pode reverter. Mas precisa provar que pediu sob pressão, não livremente.',
  },
  { 
    file:'slide-2-coacao.html', num:2,
    img:'https://images.unsplash.com/photo-1516534775068-bb57100d4169?w=1080&q=80',
    kicker:'O que é coação?', foot:swipe,
    headline:'Pressão, ameaça, <em>desconhecimento</em>',
    text:'Chefe dizendo "se não pedir, demito", promessas falsas, intimidação, aumentar trabalho. Tudo isso é coação.',
  },
  { 
    file:'slide-3-provas.html', num:3,
    img:'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=1080&q=80',
    kicker:'Como você prova?', foot:swipe,
    headline:'Procure por: <em>mensagens</em>, testemunhas, contexto',
    text:'WhatsApp, email, áudio do chefe pressionando. Colegas que viram. Falta de homologação. Tudo conta.',
  },
  { 
    file:'slide-4-judicial.html', num:4,
    img:'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1080&q=80',
    kicker:'Próximos passos', foot:swipe,
    headline:'Caminho judicial: <em>nulidade</em> da rescisão',
    text:'Você ganha: reintegração (voltar ao trabalho) + salários atrasados + indenização por dano moral. Ou indenização em vez de reintegração.',
  },
  { 
    file:'slide-5-cta.html', num:5,
    img:'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1080&q=80',
    kicker:'Não demore', foot:cta,
    headline:'Você tem <em>2 anos</em> para agir',
    text:'Se foi coagida, procure um advogado. Quanto mais cedo, mais fácil reunir provas e testemunhas.',
  },
];

for (const s of slides) {
  let html = tpl;
  html = html.replace('[LOGO_SRC]', logoSrc);
  html = html.replace('[IMAGEM_FUNDO]', s.img);
  html = html.replace('[PAGER]', pager(s.num));
  html = html.replace('[KICKER]', s.kicker);
  html = html.replace('[HEADLINE]', s.headline);
  html = html.replace('[TEXTO]', s.text);
  html = html.replace('[FOOT]', s.foot);
  fs.writeFileSync(path.join(outDir, s.file), html, 'utf8');
  const ok = html.includes(s.img) && html.includes(logoSrc) && !/\[[A-Z_]+\]/.test(html);
  console.log(`${s.file}  ok=${ok}`);
}
