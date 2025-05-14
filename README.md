# iZahao

Zahao UI – Recherche Google Dorks Améliorée
Un outil d'interface utilisateur injectable qui améliore la recherche Google grâce aux commandes Dorks. Conçu pour être non intrusif et compatible avec n’importe quel site. 

📌 Fonctionnalités
🔍 Barre de recherche avancée avec support des commandes Google Dorks (site:, inurl:, intitle:, etc.)
📋 Commandes Dorks visibles et cliquables sous forme de tags avec infobulles au survol
💡 Formulaire principal + formulaire étendu pour une recherche rapide ou détaillée
📱 Responsive Design : s’adapte à tous les écrans (mobile inclus)
🔐 Injecté dynamiquement sans altérer le style du site hôte
🎯 Redirection dans le même onglet vers Google.fr

🛠️ Technologies utilisées
- JavaScript (pour injection dynamique et logique de recherche)
- CSS (pour le style isolé et responsive)
- HTML (structure des formulaires et éléments interactifs)

# Comment l'utiliser ?
## Injecter le CSS
Utilise cette fonction pour insérer le CSS dans la page :

function injectCSS(css) {
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
}

Appelle-la avant tout :

injectCSS(`
  /* Colle ici le contenu de zahao.css */
`);

## Injecter l'interface utilisateur
Le script injecte automatiquement :
- Une barre de recherche fixe en haut de l’écran
- Un bouton toggle pour afficher/masquer la zone de recherche étendue
- Des commandes Dorks organisées et cliquables
- Un système de modale pour afficher tes plateformes favorites
## Utiliser les fonctionnalités
### a. Recherche simple
Tape ta requête dans le champ du header et appuie sur Entrée .

### b. Recherche avancée
Clique sur le bouton ▶ pour afficher la barre étendue.
Remplis les champs comme site:, inurl:, etc.

### c. Liste des commandes Dorks
Les commandes sont affichées sous forme de tags cliquables , avec infobulle au survol.

### d. Liens rapides
Accède rapidement à des plateformes utiles (GitHub, Notion, Mail, YouTube).

# Personnalisation possible
Tu peux facilement :

✅ Modifier les commandes Dorks dans le JS
✅ Ajouter/retirer des liens rapides
✅ Changer les couleurs , police ou animations dans le CSS
✅ Adapter les styles via les variables CSS


.zahao-ui {
  --bg-color: #121212;     /* Fond sombre */
  --text-color: #f5f5f5;    /* Couleur du texte */
  --primary-color: #00bcd4; /* Couleur principale */
  --hover-color: #ff9800;   /* Couleur au survol */
}


À utiliser comme
🔹 Bookmarklet : Insère tout le code dans un lien bookmarklet
🔹 Extension Chrome : Transforme-le en extension personnalisée
🔹 Script Tampermonkey : Pour l’exécuter automatiquement sur certains sites

 Licence
MIT License – Libre d'utilisation, modification et redistribution.
