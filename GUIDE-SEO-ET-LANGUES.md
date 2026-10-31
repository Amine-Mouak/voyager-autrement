# Guide de mise en ligne — Voyager Autrement

## Langues

Le sélecteur propose maintenant Français, English, Deutsch et Italiano. Le choix est mémorisé dans le navigateur et peut être partagé avec `?lang=en`, `?lang=de` ou `?lang=it`. Si aucun choix n'a encore été enregistré, le site essaie de reconnaître la langue du navigateur parmi ces quatre langues.

Les éléments d'interface principaux, les formulaires, la navigation, les pages Expériences, Voyages, Destinations et Contact disposent de textes traduits. Certaines descriptions éditoriales longues, fiches détaillées de circuits et pages juridiques restent à relire/traduire intégralement par langue : ne pas considérer cette version comme une localisation SEO complète.

Pour un vrai référencement multilingue, prévoir une prochaine étape avec des URL distinctes par langue (par exemple `/fr/`, `/en/`, `/de/`, `/it/`), des balises `hreflang`, des titres/descriptions uniques par langue et un sitemap qui liste chaque URL localisée. Le paramètre `?lang=` et le stockage navigateur assurent le changement de langue côté visiteur, mais ne remplacent pas ces URL SEO dédiées.

## Photos de la page Expériences

Placer les fichiers `1.jpg` à `11.jpg` directement dans `public/`. Les noms doivent être exactement ceux-ci, en minuscules. Un pense-bête est disponible dans `public/PHOTOS-EXPERIENCES.txt`.

## Configuration SEO avant publication

1. Dans les variables d'environnement de l'hébergement (Vercel, par exemple), définir `VITE_SITE_URL` avec le domaine canonique réel, sans slash final. Ne pas conserver la valeur d'exemple.
2. Relancer le build : le script `scripts/generate-sitemap.mjs` génère alors `public/sitemap.xml` et ajoute son adresse dans `public/robots.txt`.
3. Déclarer le sitemap dans Google Search Console et Bing Webmaster Tools.
4. Vérifier les pages indexables, les titres/descriptions, les images, les liens internes et les données structurées avant d'investir en publicité.
5. Ajouter uniquement de vrais avis clients, références, coordonnées et informations commerciales vérifiables.

## Formulaires

La connexion email/backend est volontairement laissée pour la dernière étape, comme demandé. Les formulaires ne sont donc pas encore reliés à une boîte email ou à un CRM. Ne pas lancer de campagne publicitaire avant d'avoir branché et testé la réception des demandes.

## Installation locale

```bash
npm install
npm run dev
```

Avant déploiement :

```bash
npm run build
npm test
```
