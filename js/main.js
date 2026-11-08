/* Ce fichier construit les liens à partir de config.js. Normalement, tu n'as rien à changer ici. */
(function () {
  var I = { /* icônes (SVG), clé = nom du contact */
    whatsapp: '<path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.1-1.3A10 10 0 1 0 12 2z"/><path d="M8.6 8.2c.3-.5 1-.5 1.3 0l.8 1.5c.2.4 0 .8-.3 1.1l-.4.4a6 6 0 0 0 3.1 3.1l.4-.4c.3-.3.7-.5 1.1-.3l1.5.8c.5.3.5 1 0 1.3-1 .8-2.3 1.1-3.6.6a9 9 0 0 1-5-5c-.5-1.3-.2-2.6.6-3.6z"/>',
    email: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/>',
    github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
    instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/>',
    facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
    download: '<path d="M12 3v12m0 0l-4.5-4.5M12 15l4.5-4.5M4 19h16"/>'
  };
  function svg(k) { return '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + I[k] + '</svg>'; }

  var c = CONTACTS, wa = c.whatsapp ? 'https://wa.me/' + c.whatsapp + '?text=' + encodeURIComponent(c.whatsappMessage || '') : '';
  /* [clé, nom, texte affiché, lien] : un lien vide = contact masqué */
  var list = [
    ['whatsapp', 'WhatsApp', 'Écrire un message', wa],
    ['email', 'E-mail', c.email, c.email ? 'mailto:' + c.email : ''],
    ['github', 'GitHub', 'Voir mes projets', c.github],
    ['linkedin', 'LinkedIn', 'Voir mon profil', c.linkedin],
    ['phone', 'Téléphone', c.telAffiche, c.telephone ? 'tel:' + c.telephone : ''],
    ['instagram', 'Instagram', 'Me suivre', c.instagram],
    ['facebook', 'Facebook', 'Mon profil', c.facebook]
  ].filter(function (x) { return x[3]; });

  function ext(h) { return /^https?:/.test(h) ? ' target="_blank" rel="noopener"' : ''; }

  document.querySelectorAll('[data-contact-icons]').forEach(function (box) {
    box.innerHTML = list.map(function (x) {
      return '<a class="ib" href="' + x[3] + '"' + ext(x[3]) + ' aria-label="' + x[1] + '" title="' + x[1] + '">' + svg(x[0]) + '</a>';
    }).join('');
  });
  document.querySelectorAll('[data-contact-cards]').forEach(function (box) {
    box.innerHTML = list.map(function (x) {
      return '<a class="ccard" href="' + x[3] + '"' + ext(x[3]) + '>' + svg(x[0]) + '<span><small>' + x[1] + '</small>' + x[2] + '</span></a>';
    }).join('');
  });

  document.querySelectorAll('[data-cv]').forEach(function (a) {
    a.href = CV_FILE; a.setAttribute('download', 'CV-Fitia-Herivola-Raharijaona.pdf');
    a.insertAdjacentHTML('afterbegin', svg('download'));
  });

  document.querySelectorAll('[data-repo]').forEach(function (a) {
    var url = PROJECT_LINKS[a.dataset.repo];
    if (url) { a.href = url; a.target = '_blank'; a.rel = 'noopener'; a.insertAdjacentHTML('afterbegin', svg('github')); }
    else a.remove();
  });

  var st = document.getElementById('stack-list');
  if (st) st.innerHTML = Object.keys(STACK).map(function (g) {
    return '<div class="sgroup"><h3>' + g + '</h3><ul>' + STACK[g].map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ul></div>';
  }).join('');
})();
