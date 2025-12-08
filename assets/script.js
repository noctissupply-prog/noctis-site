document.addEventListener('DOMContentLoaded', ()=> {
  // ---------- Replace placeholders with real links ----------
  const vendorLink = document.getElementById('vendor-link');
  const shopLink = document.getElementById('shop-link');
  const discordLink = document.getElementById('discord-btn') || document.getElementById('discord-link');
  if(vendorLink) vendorLink.href = "https://noctis-supply.mysellauth.com/";
  if(shopLink) shopLink.href = "https://noctissupply.myshopify.com/";
  if(discordLink) discordLink.href = "https://discord.gg/jRuStP7yXw";

  // ---------- Language toggle ----------
  const enBtn = document.getElementById('lang-en');
  const deBtn = document.getElementById('lang-de');
  const texts = {
    en:{
      heroTitle: "Noctis Supply — Built Different. Powered by Community.",
      heroSub: "Premium vendors, verified drops and curated products. No gimmicks — real value.",
      whoTitle: "Who we are",
      whoText: "Noctis Supply connects trusted vendors with a focused community. Automation, reliability, and quality meet to offer curated streetwear, fragrances and tech essentials."
    },
    de:{
      heroTitle: "Noctis Supply — Anders gebaut. Von einer Community getragen.",
      heroSub: "Premium Vendoren, verifizierte Drops und exklusive Produkte. Kein Hype. Echter Wert.",
      whoTitle: "Über uns",
      whoText: "Noctis Supply verbindet vertrauenswürdige Vendoren mit einer fokussierten Community. Automatisierung, Zuverlässigkeit und Qualität."
    }
  };
  function setLang(l){
    const d = texts[l]; if(!d) return;
    if(document.getElementById('hero-title')) document.getElementById('hero-title').textContent = d.heroTitle;
    if(document.getElementById('hero-sub')) document.getElementById('hero-sub').textContent = d.heroSub;
    if(document.getElementById('who-title')) document.getElementById('who-title').textContent = d.whoTitle;
    if(document.getElementById('who-text')) document.getElementById('who-text').textContent = d.whoText;
    if(enBtn) enBtn.classList.toggle('active', l === 'en');
    if(deBtn) deBtn.classList.toggle('active', l === 'de');
  }
  if(enBtn) enBtn.addEventListener('click', ()=> setLang('en'));
  if(deBtn) deBtn.addEventListener('click', ()=> setLang('de'));
  setLang('en');

  // ---------- lucide icons ----------
  try { if(window.lucide) lucide.createIcons(); } catch(e){/* fail silently */ }

  // ---------- Testimonials (visible + rotating) ----------
  const testimonials = [
    {name:'M. K.', text:'Fast delivery, quality matches description. Highly recommend.', stars:5},
    {name:'L. P.', text:'Good experience — will buy again.', stars:4},
    {name:'S. R.', text:'Great service & quick replies in Discord.', stars:5},
    {name:'T. B.', text:'Products were exactly as shown, neat packaging.', stars:5},
    {name:'E. G.', text:'Solid vendor links, worked instantly.', stars:4}
  ];
  const avgEl = document.querySelector('.avg-rating-value');
  const countEl = document.querySelector('.review-count');
  if(avgEl) avgEl.textContent = '4.8';
  if(countEl) countEl.textContent = '84 Feedbacks';

  const carouselEl = document.querySelector('.test-carousel');
  let idx = 0;
  function renderTestimonial(i){
    if(!carouselEl) return;
    const t = testimonials[i % testimonials.length];
    carouselEl.innerHTML = `
      <div class="test-item">
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="font-weight:700;color:var(--accent)">${t.name}</div>
          <div style="color:var(--muted);font-size:14px">• ${t.stars}★</div>
        </div>
        <p style="margin-top:8px;color:var(--muted)">${t.text}</p>
      </div>
    `;
  }
  renderTestimonial(0);
  setInterval(()=>{ idx++; renderTestimonial(idx); }, 4200);

  // ---------- Board messages (copy) ----------
  const boardContainer = document.getElementById('board-list');
  if(boardContainer){
    const messages = [
      {title:'/bsay Drop Update', text:'Heads up — new drop live now. Check vendor links in #drops and stay tuned for VIP early access.'},
      {title:'/bsay Shipping Delay', text:'Update: Some international shipments are delayed due to customs. We are tracking and will post updates in #shipping.'},
      {title:'/bsay VIP Release', text:'VIPs: early access live. Use your VIP link to claim your order. DM support with order ID for verification.'},
      {title:'/bsay Restock Notice', text:'Restock incoming — limited quantity. Join the Discord to get the link first.'}
    ];
    messages.forEach((m, i) => {
      const el = document.createElement('div');
      el.className = 'board-card';
      el.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:start;gap:10px;">
          <div>
            <div style="font-weight:800;color:var(--accent)">${m.title}</div>
            <div style="color:var(--muted);margin-top:6px">${m.text}</div>
          </div>
          <div>
            <button class="copy-btn" data-idx="${i}">Copy</button>
          </div>
        </div>
        <div style="margin-top:10px;color:var(--muted);font-size:13px">${new Date().toLocaleString()}</div>
      `;
      boardContainer.appendChild(el);
    });
    boardContainer.addEventListener('click', (e)=>{
      if(e.target && e.target.matches('.copy-btn')){
        const i = Number(e.target.dataset.idx);
        const message = messages[i].text;
        navigator.clipboard.writeText(message).then(()=>{
          e.target.textContent = 'Copied';
          setTimeout(()=> e.target.textContent = 'Copy',1200);
        }).catch(()=>{ alert('Copy failed — select and copy manually.')});
      }
    });
  }

});
