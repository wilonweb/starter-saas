# SaaS-Kit

🚧 **En cours de construction** : ce projet a pour but de créer un **starter SaaS** réutilisable, commençant par une **UI d’abonnement avec Notion et Stripe**.

## 🎯 Objectif

* Implémenter une **UI d’inscription avec Notion** (OAuth).
* Mettre en place un **système d’abonnement** avec Stripe.
* Créer une base réutilisable pour mes futurs projets SaaS (YT→GPT→Notion, CRM Notion, Scraper GPT, etc.).

## 🛠️ Technologies prévues

* **Next.js** (frontend + API routes)
* **TypeScript** (robustesse)
* **Notion API** (authentification OAuth + intégration de données)
* **Stripe** (paiement et abonnements)
* **Postgres / Supabase** (stockage utilisateurs et abonnements)
* **Prisma** (ORM pour Postgres)
* **Docker** (environnement portable)
* **Vercel / Render** (déploiement rapide)

*(liste évolutive, on ajoutera au fur et à mesure)*

## 📅 Plan par étapes

1. **Auth Notion** : bouton “S’inscrire avec Notion”, stockage du token.
2. **Stripe** : paiement et gestion des abonnements.
3. **DB** : relier utilisateur ↔ abonnement ↔ notion\_token.
4. **Dashboard minimal** : voir son statut d’abonnement.
5. **Brancher pipeline YT→GPT→Notion** comme premier “produit SaaS”.

## 📝 Journal d’apprentissage

À chaque étape réussie, un petit quiz perso pour valider ce que j’ai appris.

### Exemple : Auth Notion ✅

* ❓ Qu’est-ce qu’un **OAuth redirect URI** ?
* ❓ Que stocke-t-on en base après un login OAuth ?
* ❓ Quelle est la différence entre un `access_token` et un `refresh_token` ?

*(je remplirai ces quiz au fur et à mesure pour ancrer l’apprentissage)*

---

👉 Suggestions bonus si tu veux aller plus loin :

* Ajouter un **schéma d’arbo du projet** (même provisoire).
* Créer une section **“Concepts appris”** que tu mets à jour (style mini-fiche de révision).
* Mettre une **roadmap en cases à cocher** pour suivre ta progression.

---

## Les commandes DB

pnpm db:dev              # lance Postgres (docker)
pnpm db:generate
pnpm db:migrate          # prisma migrate dev --name init
pnpm db:studio
