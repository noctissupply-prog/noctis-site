document.addEventListener('DOMContentLoaded', ()=> {
  // Replace these IDs/links with your values when editing
  const vendorLink = document.getElementById('vendor-link');
  const shopLink = document.getElementById('shop-link');
  const discordLink = document.getElementById('discord-link');

  if(vendorLink) vendorLink.href = "https://YOUR_MYAUTH_LINK";
  if(shopLink) shopLink.href = "https://YOUR_SHOP_LINK";
  if(discordLink) discordLink.href = "https://YOUR_DISCORD_INVITE";

  // Language toggle (EN / DE)
  const enBtn = document.getElementById('lang-en');
  const deBtn = document.getElementById('lang-de');
  const textMap = {
    en:{
      heroTitle: "Noctis Supply — Built Different. Powered by Community.",
      heroSub: "Premium vendors, verified drops and curated products. No gimmicks — real value.",
      whoTitle: "Who we are",
      whoText: "Noctis Supply connects trusted vendors with a focused community. Automation, reliability, and quality come together to offer curated streetwear, fragrances and tech essentials.",
      card1: "Verified Vendor Links",
      card1t: "Secure MyAuth delivery and automation for digital products.",
      card2: "Physical Products",
      card2t: "Selected products via Shopify — secure shipping and tracking.",
      card3: "VIP Access",
      card3t: "One-time VIP membership (manual approval). Priority drops & support."
    },
    de:{
      heroTitle: "Noctis Supply — Anders gebaut. Von einer Community getragen.",
      heroSub: "Premium Vendoren, verifizierte Drops und exklusive Produkte. Kein Hype. Echter Wert.",
      whoTitle: "Über uns",
      whoText: "Noctis Supply verbindet vertrauenswürdige Vendoren mit einer fokussierten Community. Wir kombinieren Automatisierung, Zuverlässigkeit und Qualität.",
      card1: "Verifizierte Vendor-Links",
      card1t: "Sichere MyAuth-Lieferung und Automatisierung für digitale Produkte.",
      card2: "Physische Produkte",
      card2t: "Ausgewählte Produkte über Shopify — sichere Lieferung und Tracking.",
      card3: "VIP Zugang",
      card3t: "Einmalige VIP-Mitgliedschaft (manuelle Freischaltung). Priorisierte Drops & Support."
    }
  };

  function setLang(l){
    if(!textMap[l]) return;
    document.getElementById('hero-title').textContent = textMap[l].heroTitle;
    document.getElementById('hero-sub').textContent = textMap[l].heroSub;
    document.getElementById('who-title').textContent = textMap[l].whoTitle;
    document.getElementById('who-text').textContent = textMap[l].whoText;
    document.getElementById('offer-1').textContent = textMap[l].card1;
    document.getElementById('offer-1-t').textContent = textMap[l].card1t;
    document.getElementById('offer-2').textContent = textMap[l].card2;
    document.getElementById('offer-2-t').textContent = textMap[l].card2t;
    document.getElementById('offer-3').textContent = textMap[l].card3;
    document.getElementById('offer-3-t').textContent = textMap[l].card3t;
    enBtn.classList.toggle('active', l === 'en');
    deBtn.classList.toggle('active', l === 'de');
  }

  if(enBtn) enBtn.addEventListener('click', ()=> setLang('en'));
  if(deBtn) deBtn.addEventListener('click', ()=> setLang('de'));
  setLang('en'); // default
});
