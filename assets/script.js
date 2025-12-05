// basic interactivity & EN/DE switch
document.addEventListener('DOMContentLoaded', () => {
  const enBtn = document.getElementById('lang-en');
  const deBtn = document.getElementById('lang-de');
  // default English text mapping (if we want to dynamically switch)
  const texts = {
    en: {
      heroTitle: "Noctis Supply — Built Different. Powered by Community.",
      heroSub: "Premium vendors, verified drops and curated products. No gimmicks — real value.",
      whoTitle: "Who we are",
      whoText: "Noctis Supply connects trusted vendors with a focused community. Automation, reliability, and quality come together to offer curated streetwear, fragrances and tech essentials.",
      offer1: "Verified Vendor Links",
      offer1t: "Secure MyAuth delivery and automation for digital products.",
      offer2: "Physical Products",
      offer2t: "Selected products via Shopify — secure shipping and tracking.",
      offer3: "VIP Access",
      offer3t: "One-time VIP membership (manual approval). Priority drops & support."
    },
    de: {
      heroTitle: "Noctis Supply — Anders gebaut. Von einer Community getragen.",
      heroSub: "Premium Vendoren, verifizierte Drops und exklusive Produkte. Kein Hype. Echter Wert.",
      whoTitle: "Über uns",
      whoText: "Noctis Supply verbindet vertrauenswürdige Vendoren mit einer fokussierten Community. Wir kombinieren Automatisierung, Zuverlässigkeit und Qualität.",
      offer1: "Verifizierte Vendor-Links",
      offer1t: "Sichere MyAuth-Lieferung und Automatisierung für digitale Produkte.",
      offer2: "Physische Produkte",
      offer2t: "Ausgewählte Produkte über Shopify — sichere Lieferung und Tracking.",
      offer3: "VIP Zugang",
      offer3t: "Einmalige VIP-Mitgliedschaft (manuelle Freischaltung). Priorisierte Drops & Support."
    }
  };

  function setLang(l) {
    document.getElementById('hero-title').textContent = texts[l].heroTitle;
    document.getElementById('hero-sub').textContent = texts[l].heroSub;
    document.getElementById('who-title').textContent = texts[l].whoTitle;
    document.getElementById('who-text').textContent = texts[l].whoText;
    document.getElementById('offer-1').textContent = texts[l].offer1;
    document.getElementById('offer-1-t').textContent = texts[l].offer1t;
    document.getElementById('offer-2').textContent = texts[l].offer2;
    document.getElementById('offer-2-t').textContent = texts[l].offer2t;
    document.getElementById('offer-3').textContent = texts[l].offer3;
    document.getElementById('offer-3-t').textContent = texts[l].offer3t;
    if(l === 'en'){ enBtn.classList.add('active'); deBtn.classList.remove('active'); }
    else { deBtn.classList.add('active'); enBtn.classList.remove('active'); }
  }

  enBtn.addEventListener('click', () => setLang('en'));
  deBtn.addEventListener('click', () => setLang('de'));

  // initial
  setLang('en');

  // replace these placeholders with your links
  document.getElementById('vendor-link').href = "https://YOUR_MYAUTH_LINK";
  document.getElementById('shop-link').href = "https://noctissupply.myshopify.com";
  document.getElementById('discord-link').href = "https://discord.gg/YOUR_INVITE";
  document.getElementById('vendor-myauth').href = "https://YOUR_MYAUTH_LINK";
});

