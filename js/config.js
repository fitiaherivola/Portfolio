/* =====================================================================
   ✏️  FICHIER À MODIFIER : c'est ici que tu changes tes liens et ta stack.
   Règle simple : un lien laissé vide ("") disparaît automatiquement du site.
   ===================================================================== */

/* ---------- 1. TES CONTACTS (boutons du haut + section Contact) ---------- */
const CONTACTS = {
  email:      "herivolaraharijaona@gmail.com",
  telephone:  "+261382434740",          // format international, sert au lien d'appel
  telAffiche: "038 24 347 40",          // texte affiché sur le site
  whatsapp:   "261382434740",           // chiffres seulement : pas de + ni d'espaces
  whatsappMessage: "Bonjour Fitia, j’ai vu votre portfolio.",

  github:    "https://github.com/TON-PSEUDO",                          // ✏️ remplace TON-PSEUDO
  linkedin:  "https://www.linkedin.com/in/fitia-herivola-raharijaona", // ✏️ vérifie ce lien
  instagram: "",                        // ✏️ ex : "https://instagram.com/ton.pseudo"
  facebook:  ""                         // ✏️ ex : "https://facebook.com/ton.profil"
};

/* ---------- 2. LIENS GITHUB DE CHAQUE PROJET (laisse "" pour cacher le bouton) ---------- */
const PROJECT_LINKS = {
  mibika:    "",   // ✏️ ex : "https://github.com/TON-PSEUDO/mi-bika"
  livraison: "",   // ✏️
  tournoi:   ""    // ✏️
};

/* ---------- 3. TON CV (remplace le fichier assets/cv.pdf pour le mettre à jour) ---------- */
const CV_FILE = "assets/cv.pdf";

/* ---------- 4. TA STACK (ajoute ou retire une techno : une ligne = une pastille) ---------- */
const STACK = {
  "Langages & frameworks": [
    "Java", "Spring Boot", "Python", "Django", "Django REST", "PHP", "Laravel",
    "JavaScript", "Angular", "React", "Vue.js", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"   // ✏️ HTML5, CSS3, Bootstrap ajoutés : retire-les si besoin
  ],
  "Bases de données": ["MySQL", "PostgreSQL", "SQLite", "SQL", "pgAdmin"],
  "API & sécurité": ["API REST", "JWT", "bcrypt", "Postman", "Cryptographie"],
  "Conception": ["MERISE", "UML", "Figma", "Canva"],
  "Outils & déploiement": ["Git", "GitHub", "Docker", "Maven", "VS Code", "IntelliJ IDEA", "Eclipse IDE", "Android Studio"],   // ✏️ Maven, IntelliJ ajoutés
  "Systèmes & bureautique": ["Windows", "Linux", "Android", "Cisco", "Pack Office"]
};
