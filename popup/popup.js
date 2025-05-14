// === Fonction utilitaire pour éviter les erreurs lors de l'ajout d'événements ===
function safeAddEventListener(selector, event, callback) {
  const el = document.querySelector(selector);
  if (el) el.addEventListener(event, callback);
}

// === Références aux éléments critiques ===
const elements = {
  header: null,
  advanced: null,
  toggleBtn: null,
  modal: null,
};

// === Injecter un wrapper global pour isoler le style ===
const wrapper = document.createElement('div');
wrapper.className = 'zahao-ui';
document.body.insertAdjacentElement('afterbegin', wrapper);

// === Injecter le header ===
(function injectHeader() {
  const header = document.createElement('div');
  header.id = 'zahao-header';

  header.innerHTML = `
    <!-- Avatar -->
    <div class="avatar">
      <img src="https://i.pravatar.cc/150 " alt="Photo de profil">
    </div>

    <!-- Formulaire réduit -->
    <div class="search-form-wrapper">
      <form id="zahaoBaseForm">
        <input type="text" id="zahaoBase" placeholder="Recherche..." autofocus />
      </form>
    </div>

    <!-- Boutons à droite -->
    <nav class="navbar">
      <button id="zahaoToggleBtn" aria-label="Afficher/Masquer les options Dorks">▶</button>
      <button id="zahaoToolsButton" aria-label="Ouvrir mes plateformes">
        <i class='bx bx-customize'></i>
      </button>
    </nav>
  `;

  wrapper.appendChild(header);

  // Stockage des références
  elements.header = header;
  elements.toggleBtn = document.getElementById('zahaoToggleBtn');
  header.style.position = 'fixed';
  header.style.top = '0';
  header.style.right = '0'; // <== Fixé à droite
  header.style.width = '100%';
})();

// === Injecter la zone de recherche étendue ===
(function injectAdvancedSearch() {
  const advanced = document.createElement('div');
  advanced.id = 'zahaoAdvanced';
  advanced.className = 'search-advanced-wrapper';

  advanced.innerHTML = `
    <div class="container">
      <div class="layout-grid">
        <!-- Colonne de gauche -->
        <div class="left-column">
          <form id="zahaoForm">
            <div class="input-group">
              <span>Site:</span>
              <input type="text" id="zahaoSite" placeholder="site:" />
            </div>
            <div class="input-group">
              <span>Lien:</span>
              <input type="text" id="zahaoInurl" placeholder="inurl:" />
            </div>
            <div class="input-group">
              <span>Titre:</span>
              <input type="text" id="zahaoIntitle" placeholder="intitle:" />
            </div>
            <div class="input-group">
              <span>Texte:</span>
              <input type="text" id="zahaoIntext" placeholder="intext:" />
            </div>
            <div class="input-group">
              <span>Fichier:</span>
              <input type="text" id="zahaoFiletype" placeholder="filetype:" />
            </div>
            <input type="text" id="zahaoBaseExpanded" placeholder="Recherche..." />
            <button type="submit" id="zahaoSearchBtn">Rechercher sur Google</button>
          </form>

          <!-- Liens rapides -->
          <div class="quick-links">
            <a href="https://github.com " target="_blank">GitHub</a>
            <a href="https://notion.so " target="_blank">Notion</a>
            <a href="https://mail.google.com " target="_blank">Mail</a>
            <a href="https://youtube.com " target="_blank">YouTube</a>
          </div>
        </div>

        <!-- Colonne de droite : Commandes Dorks -->
        <div class="right-column">
          <div class="dorks-sidebar">
            <h3>Commandes utiles</h3>
            <div class="dork-tag-list">
              <span class="dork-tag" title="Trouve des résultats sur un site ou domaine spécifique.">site:</span>
              <span class="dork-tag" title="Recherche un mot-clé dans l’URL d’une page.">inurl:</span>
              <span class="dork-tag" title="Trouve un mot-clé dans le titre d’une page web.">intitle:</span>
              <span class="dork-tag" title="Localise des fichiers d’un type particulier (PDF, XLS, etc.).">filetype:</span>
              <span class="dork-tag" title="Trouve des pages qui pointent vers une URL spécifique.">link:</span>
              <span class="dork-tag" title="Recherche un mot-clé dans le texte d’une page.">intext:</span>
              <span class="dork-tag" title="Trouve des pages contenant plusieurs mots dans leur titre.">allintitle:</span>
              <span class="dork-tag" title="Affiche la version mise en cache d’une page web.">cache:</span>
              <span class="dork-tag" title="Affiche des pages similaires à une URL donnée.">related:</span>
              <span class="dork-tag" title="Donne des informations détaillées sur un site.">info:</span>
              <span class="dork-tag" title="Cherche des fichiers ayant une extension spécifique.">ext:</span>
              <span class="dork-tag" title="Affiche la définition d’un mot ou d’une expression.">define:</span>
              <span class="dork-tag" title="Recherche des numéros de téléphone et coordonnées personnelles.">phonebook:</span>
              <span class="dork-tag" title="Affiche une carte d’un lieu ou adresse.">map:</span>
              <span class="dork-tag" title="Trouve des pages contenant plusieurs mots dans l’URL.">allinurl:</span>
              <span class="dork-tag" title="Trouve du contenu indexé avant une date précise.">before:</span>
              <span class="dork-tag" title="Trouve du contenu indexé après une date précise.">after:</span>
              <span class="dork-tag" title="Recherche des nombres compris dans une plage donnée.">numrange:</span>
              <span class="dork-tag" title="Trouve deux termes situés à proximité dans une page.">AROUND(X):</span>
              <span class="dork-tag" title="Recherche des mots dans les ancres (liens) d’une page.">inanchor:</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  wrapper.appendChild(advanced);
  elements.advanced = advanced;
})();

// === Injecter la modale ===
(function injectModal() {
  const modal = document.createElement('div');
  modal.id = 'zahaoModal';
  modal.className = 'modal';
  modal.style.display = 'none';

  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2>Mes Plateformes</h2>
      <div class="modal-grid">
        <div class="modal-card">
          <img src="https://picsum.photos/60/60?random=1 " alt="FlexyFrog">
          <a href="https://flexyfrog.com " target="_blank">FlexyFrog</a>
        </div>
        <div class="modal-card">
          <img src="https://picsum.photos/60/60?random=2 " alt="CodinGame">
          <a href="https://codingame.com " target="_blank">CodinGame</a>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  elements.modal = modal;
})();

// === Toggle de la barre étendue ===
safeAddEventListener('#zahaoToggleBtn', 'click', () => {
  elements.advanced.classList.toggle('expanded');
  elements.toggleBtn.classList.toggle('rotated');
});

// === Soumission du formulaire principal ===
safeAddEventListener('#zahaoBaseForm', 'submit', (e) => {
  e.preventDefault();
  const base = document.getElementById('zahaoBase').value.trim();
  performGoogleSearch(base);
});

// === Soumission du formulaire Dorks ===
safeAddEventListener('#zahaoForm', 'submit', (e) => {
  e.preventDefault();

  const fields = {
    site: document.getElementById('zahaoSite').value.trim(),
    inurl: document.getElementById('zahaoInurl').value.trim(),
    intitle: document.getElementById('zahaoIntitle').value.trim(),
    intext: document.getElementById('zahaoIntext').value.trim(),
    filetype: document.getElementById('zahaoFiletype').value.trim(),
    base: document.getElementById('zahaoBaseExpanded').value.trim()
  };

  let query = "";
  if (fields.site) query += `site:${fields.site} `;
  if (fields.inurl) query += `inurl:${fields.inurl} `;
  if (fields.intitle) query += `intitle:${fields.intitle} `;
  if (fields.intext) query += `intext:${fields.intext} `;
  if (fields.filetype) query += `filetype:${fields.filetype} `;
  if (fields.base) query += `${fields.base}`;

  performGoogleSearch(query);
});

// === Fonction centrale de recherche Google ===
function performGoogleSearch(query) {
  window.location.href = `https://www.google.fr/search?q= ${encodeURIComponent(query.trim())}`;
}

// === Gestion des modales ===
safeAddEventListener('#zahaoToolsButton', 'click', () => {
  if (elements.modal) elements.modal.classList.add('show');
});

safeAddEventListener('.close', 'click', () => {
  if (elements.modal) elements.modal.classList.remove('show');
});

safeAddEventListener('body', 'click', (e) => {
  if (elements.modal && e.target === elements.modal) {
    elements.modal.classList.remove('show');
  }
});

// Fermeture avec Échap
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && elements.modal?.classList.contains('show')) {
    elements.modal.classList.remove('show');
  }
});
