const fs = require('fs');
const path = require('path');
const base = 'C:/Users/prosy/blogautomaticoleticia/squads/@squad-design/criativos-estaticos';
const tpl = fs.readFileSync(path.join(base, 'templates/carrossel-4x5.html'), 'utf8');
const outDir = path.join(base, 'outputs/Julho_2026/carrossel-gestante-pedido-demissao');
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
    img:'https://images.unsplash.com/photo-1505618346881-b72b27e84530?w=1080&q=80',
    kicker:'Seus direitos', foot:swipe,
    headline:'Grávida <em>pode</em> pedir demissão',
    text:'Mas a empresa precisa validar direitinho. E você deve saber seus direitos antes de assinar qualquer coisa.',
  },
  { 
    file:'slide-2-lei.html', num:2,
    img:'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1080&q=80',
    kicker:'O que diz a CLT', foot:swipe,
    headline:'A gestante tem <em>estabilidade</em>',
    text:'CLT 391 protege você durante a gravidez e 5 meses após o parto. Mas essa proteção pode ser "anulada" por coação ou pressão da empresa.',
  },
  { 
    file:'slide-3-validacao.html', num:3,
    img:'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1080&q=80',
    kicker:'Como validar corretamente', foot:swipe,
    headline:'Checklist: a empresa <em>deveria</em> ter feito',
    text:'Homologação + ciência da gravidez + pedido por escrito + testemunhas + informação de direitos = rescisão segura. Sem isso, você pode reverter.',
  },
  { 
    file:'slide-4-riscos.html', num:4,
    img:'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1080&q=80',
    kicker:'Se não validar', foot:swipe,
    headline:'Riscos para a empresa',
    text:'Ação de nulidade, reintegração, salários atrasados, indenização por dano moral. Uma rescisão feita errado pode custar muito caro.',
  },
  { 
    file:'slide-5-cta.html', num:5,
    img:'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1080&q=80',
    kicker:'Você está grávida', foot:cta,
    headline:'Seu direito é <em>estabilidade</em>',
    text:'Se a empresa está pressionando você a pedir demissão, procure orientação. Você não está sozinha nisso.',
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
