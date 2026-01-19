# Scenarios de test

Ce document resume des scenarios pour verifier le bon fonctionnement du projet et aider l'utilisateur a comprendre comment l'utiliser.

## Scenario 1: Demarrage local
- Objectif: verifier que l'application demarre en local.
- Etapes:
  1. Installer les dependances.
  2. Lancer le serveur de developpement.
  3. Ouvrir l'application dans le navigateur.
- Resultat attendu: la page d'accueil s'affiche sans erreur.

## Scenario 2: Creation de compte
- Objectif: verifier le flux d'inscription.
- Etapes:
  1. Acceder a la page d'inscription.
  2. Saisir un email valide et un mot de passe.
  3. Valider le formulaire.
- Resultat attendu: le compte est cree et l'utilisateur est connecte.

## Scenario 3: Connexion
- Objectif: verifier le flux de connexion.
- Etapes:
  1. Acceder a la page de connexion.
  2. Saisir les identifiants.
  3. Valider le formulaire.
- Resultat attendu: l'utilisateur est connecte et redirige.

## Scenario 4: Deconnexion
- Objectif: verifier le flux de deconnexion.
- Etapes:
  1. Depuis un compte connecte, cliquer sur Deconnexion.
- Resultat attendu: la session est fermee et l'utilisateur revient a l'accueil.

## Scenario 5: Acces protege
- Objectif: verifier la protection des pages privees.
- Etapes:
  1. Tenter d'acceder a une page protegee sans etre connecte.
- Resultat attendu: redirection vers la page de connexion.
