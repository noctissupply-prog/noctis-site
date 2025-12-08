document.addEventListener('DOMContentLoaded', ()=> {
  // ---------- links: replace these with your real ones ----------
  const vendorLink = document.getElementById('vendor-link');
  const shopLink = document.getElementById('shop-link');
  const discordLink = document.getElementById('discord-link');
  if(vendorLink) vendorLink.href = "https://noctis-supply.mysellauth.com/";
  if(shopLink) shopLink.href = "https://noctissupply.myshopify.com";
  if(discordLink) discordLink.href = "https://discord.gg/jRuStP7yXw";

  // ---------- Language toggle (minimal EN/DE) ----------
  const enBtn = document.getElementById('lang-en');
  const deBtn = document.getElementById('lang-de');
  const texts = {
    en:{
      heroTitle: "Noctis Supply — Built Different. Powered by Community.",
      heroSub: "Premium vendors, verified drops and curated products. No gimmicks — real value.",
      whoTitle: "Who we are",
      whoText: "Noctis Supply connects trusted vendors with a focused community. Automation, reliability and quality meet to offer curated streetwear, fragrances and tech essentials.",
    },
    de:{
      heroTitle: "Noctis Supply — Anders gebaut. Von einer Community getragen.",
      heroSub: "Premium Vendoren, verifizierte Drops und exklusive Produkte. Kein Hype. Echter Wert.",
      whoTitle: "Über uns",
      whoText: "Noctis Supply verbindet vertrauenswürdige Vendoren mit einer fokussierten Community. Automatisierung, Zuverlässigkeit und Qualität."
    }
  };
  function setLang(l){
    const d = texts[l];
    if(!d) return;
    const heroT = document.getElementById('hero-title');
    const heroS = document.getElementById('hero-sub');
    const whoT = document.getElementById('who-title');
    const whoTxt = document.getElementById('who-text');
    if(heroT) heroT.textContent = d.heroTitle;
    if(heroS) heroS.textContent = d.heroSub;
    if(whoT) whoT.textContent = d.whoTitle;
    if(whoTxt) whoTxt.textContent = d.whoText;
    enBtn.classList.toggle('active', l === 'en');
    deBtn.classList.toggle('active', l === 'de');
  }
  if(enBtn) enBtn.addEventListener('click', ()=> setLang('en'));
  if(deBtn) deBtn.addEventListener('click', ()=> setLang('de'));
  setLang('en');

  // ---------- Testimonials carousel (auto rotate) ----------
  // We'll show aggregated rating = 4.8 (84 reviews total)
  const avgEl = document.querySelector('.avg-rating-value');
  const countEl = document.querySelector('.review-count');
  if(avgEl) avgEl.textContent = '4.8';
  if(countEl) countEl.textContent = '84 Feedbacks';

  const testimonials = [
    {name:'M. K.', text: 'Fast delivery, quality matches description. Highly recommend.' , stars:5},
    {name:'L. P.', text: 'Good experience — will buy again.' , stars:4},
    {name:'S. R.', text: 'Great service & quick replies in Discord.' , stars:5},
    {name:'T. B.', text: 'Products were exactly as shown, neat packaging.' , stars:5},
    {name:'E. G.', text: 'Solid vendor links, worked instantly.' , stars:4}
  ];
  let idx = 0;
  const carouselEl = document.querySelector('.test-carousel');
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
});
