'use strict';
let D, lang = 'ar';
try { lang = localStorage.getItem('lang') || 'ar'; } catch (e) {}
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const t = o => o ? (o[lang] || o.ar || o.en || '') : '';
const u = k => t(D.ui[k]);
const safeUrl = x => /^https?:\/\//.test(x || '') || /^[\w\-./]+$/.test(x || '') ? x : '';
const NAV = ['home','start','levels','skills','plans','library','catalog','about','contact','faq'];
const ext = (s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.label)} </a>`;

const badge = st => `<span class="badge ${st==='published'?'':'soon'}">${u(st) || esc(st)}</span>`;
const card = (r, extra='') => {
  const lv = r.level ? `<span class="badge">${esc(r.level)}</span>` : '';
  const demo = r.demo ? `<span class="badge demo">${u('demo')}</span>` : '';
  const link = r.status === 'published' && safeUrl(r.url)
    ? `<a class="btn sm" href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">${u(r.type==='lesson'?'open':'download')}</a>`
    : `<p><em>${u('linkPending')}</em></p>`;
  return `<article class="card"><div>${lv}${badge(r.status)}${demo}${extra}</div><h3>${esc(t(r.title||r.name))}</h3><p>${esc(t(r.desc))}</p>${link}</article>`;
};
const cards = (a, f) => a.length ? `<div class="grid">${a.map(f).join('')}</div>` : `<p class="note">${u('none')}</p>`;
const page = p => `<h1>${esc(t(p.title))}</h1>` + p.paras.map(x => `<p>${esc(t(x))}</p>`).join('');
const levelCard = l => `<article class="card"><span class="badge">${l.code}</span><h3>${esc(t(l.name))}</h3><p>${esc(t(l.desc))}</p></article>`;
const skillCard = s => `<article class="card"><h3>${esc(t(s.name))}</h3><p>${esc(t(s.desc))}</p></article>`;
const planCard = p => `<article class="card"><h3>${esc(t(p.title))}</h3><ul>${p.steps.map(s => `<li>${esc(t(s))}</li>`).join('')}</ul></article>`;
const faqList = () => D.faq.map(f => `<details><summary>${esc(t(f.q))}</summary><p>${esc(t(f.a))}</p></details>`).join('');
const socials = () => `<ul>${D.social.map(s => `<li>${ext(s)}</li>`).join('')}</ul>`;

const views = {
  home: () => `<section class="hero"><p class="tag">${esc(t(D.tagline))}</p><h1>Hussein Badr English</h1><p>${u('heroText')}</p><a class="btn" href="#/start">${u('cta')}</a></section>
    <h2>${u('levelsH')}</h2>${cards(D.levels, levelCard)}
    <h2>${u('skillsH')}</h2>${cards(D.skills, skillCard)}
    <h2>${u('featured')}</h2><p class="note">${u('demoNote')}</p>${cards(D.resources, r => card(r))}
    <h2>${u('plansH')}</h2><p class="note">${u('plansNote')}</p>${cards(D.plans, planCard)}
    <h2>${u('faqH')}</h2>${faqList()}`,
  start: () => page(D.pages.start) + `<p><a class="btn" href="#/library">${t(D.ui.nav.library)}</a></p>`,
  levels: () => `<h1>${u('levelsH')}</h1>${cards(D.levels, levelCard)}`,
  skills: () => `<h1>${u('skillsH')}</h1>${cards(D.skills, skillCard)}`,
  plans: () => `<h1>${u('plansH')}</h1><p class="note">${u('plansNote')}</p>${cards(D.plans, planCard)}`,
  library: () => `<h1>${t(D.ui.nav.library)}</h1><p class="note">${u('demoNote')}</p>
    <div class="filters"><input id="q" type="search" placeholder="${u('search')}" aria-label="${u('search')}">
    <select id="lv" aria-label="${u('allLevels')}"><option value="">${u('allLevels')}</option>${D.levels.map(l=>`<option>${l.code}</option>`).join('')}</select>
    <select id="sk" aria-label="${u('allSkills')}"><option value="">${u('allSkills')}</option>${D.skills.map(s=>`<option value="${s.id}">${esc(t(s.name))}</option>`).join('')}</select></div>
    <div id="list" aria-live="polite"></div>`,
  catalog: () => `<h1>${t(D.ui.nav.catalog)}</h1>${cards(D.catalog, c => card(c, `<span class="badge">${u(c.price)}</span>`))}`,
  about: () => page(D.pages.about),
  contact: () => `<h1>${u('contactH')}</h1><p>${u('contactText')}</p>${socials()}`,
  faq: () => `<h1>${u('faqH')}</h1>${faqList()}`,
  privacy: () => page(D.pages.privacy),
  terms: () => page(D.pages.terms)
};

function filterLib() {
  const q = $('#q').value.trim().toLowerCase(), lv = $('#lv').value, sk = $('#sk').value;
  const out = D.resources.filter(r => (!lv || r.level === lv) && (!sk || r.skill === sk) &&
    (!q || (t(r.title) + ' ' + t(r.desc) + ' ' + r.title.en).toLowerCase().includes(q)));
  $('#list').innerHTML = cards(out, r => card(r));
}

function render() {
  const route = (location.hash.replace(/^#\/?/, '') || 'home');
  const html = views[route];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  $('#langBtn').textContent = lang === 'ar' ? 'EN' : 'عربي';
  $('#langBtn').setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
  $('#skip').textContent = u('skip');
  $('#menuBtn').setAttribute('aria-label', u('menu'));
  $('#nav').innerHTML = NAV.map(k => `<a href="#/${k==='home'?'':k}"${k===route?' aria-current="page"':''}>${t(D.ui.nav[k])}</a>`).join('');
  $('#main').innerHTML = html ? html() : `<h1>404</h1><p>${u('notfound')}</p>`;
  $('#footer').innerHTML = `<p>${u('footer')} — ${esc(t(D.tagline))}</p>${socials()}<p><a href="#/privacy">${lang==='ar'?'الخصوصية':'Privacy'}</a> · <a href="#/terms">${lang==='ar'?'الشروط':'Terms'}</a></p>`;
  document.title = (route==='home' ? '' : t(D.ui.nav[route]||D.pages[route]?.title) + ' | ') + 'Hussein Badr English';
  if (route === 'library') { filterLib(); ['#q','#lv','#sk'].forEach(s => $(s).addEventListener('input', filterLib)); }
  $('#nav').classList.remove('open'); $('#menuBtn').setAttribute('aria-expanded', 'false');
}

$('#langBtn').onclick = () => { lang = lang === 'ar' ? 'en' : 'ar'; try { localStorage.setItem('lang', lang); } catch (e) {} render(); };
$('#menuBtn').onclick = () => { const o = $('#nav').classList.toggle('open'); $('#menuBtn').setAttribute('aria-expanded', o); };
window.addEventListener('hashchange', () => { render(); $('#main').focus(); window.scrollTo(0, 0); });

fetch('content/site.json').then(r => { if (!r.ok) throw 0; return r.json(); })
  .then(d => { D = d; render(); })
  .catch(() => { $('#main').innerHTML = '<p class="note">تعذّر تحميل المحتوى / Could not load content. Serve the site over a web server (see README).</p>'; });
