# Voyager Autrement

Site web de circuits et voyages au Maroc, développé avec React, TanStack Start, Vite et Nitro (preset Vercel).

## Lancer le projet en local

Prérequis : Node.js 22+ et npm.

```bash
npm install
npm run dev
```

Pour vérifier la compilation de production :

```bash
npm run build
```

## Déploiement sur GitHub et Vercel

1. Créer un nouveau dépôt GitHub nommé **voyager-autrement**.
2. Importer le contenu de ce dossier à la racine du dépôt, puis pousser la branche `main`.
3. Importer ce dépôt dans Vercel.
4. Nommer le projet Vercel **voyagerautrement** si ce nom est disponible. Vercel pourra alors attribuer `https://voyagerautrement.vercel.app`.
5. Dans Vercel → Settings → Environment Variables, ajouter :
   - Name : `VITE_SITE_URL`
   - Value : `https://voyagerautrement.vercel.app`
   - Environments : Production, Preview et Development (selon les besoins)
6. Relancer un déploiement pour que le sitemap soit généré avec cette URL.

Le nom de domaine `voyagerautrement.vercel.app` dépend de sa disponibilité dans Vercel et de son association à un projet. Le dépôt GitHub et le projet Vercel ont des noms distincts.

## Langues

Les pages de circuits sont prévues en français, anglais, allemand et italien. La langue peut être passée dans l’URL avec `?lang=fr`, `?lang=en`, `?lang=de` ou `?lang=it`.
