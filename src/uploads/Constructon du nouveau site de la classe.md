# Constructon du nouveau site de la classe
Costruire un site interet pour les classes d'ITs

## Technologies
- nodeJs
- mysql
- vueJs/web components
## Front end
### Style graphique
Flat UI design 
### Couleurs
Blanc bleu
## back end

### routes gestion des utilisateurs
- creation d'utilisateur
- destruction d'utilisaeur
- modification d'un utilisateur
### gestion des fichiers
#### modelm

- nom du fihier
- filiere
- annee (facultatif)
- semestre
- Unite d'enseigement
- cours/exercices/TDs
- date de publication
- taille du fichier
- type de fichier
- chemin du fichier
#### routes
- Affichage de semestre
- Affichage d'UE
- Affichage de cours/exercices/TDs
- affichage de fichiers
- recherche des fichiers par nom
- envoi de fichier
- telechargement de fichier

### droits
#### visiteurs
- lecture de fichiers
#### eleves
- lecture de fichiers
- telechargement 
#### comite de classe
- lecture de fichiers
- telechargement 
- televersement de fichier
- suppression de fichier
#### professeurs et au dessus
- lecture de fichiers
- telechargement 
- televersement de fichier
- suppression de fichier
- modification de l'emploi du temps

### Emploi du temps et evenements
#### Model emploi du temps
- UE
- profeeseur
- heure de debut
- heure de fin
- semestre
#### Model evenement
- Nom
- date 
- duree (facultatif)
#### foncionalites 
- garder un historique des emploi du temps
#### Routes
- Afficher l'emploi du temps ofiiciel
- Afficher l'emploi du temps apres alteration
- Afficher les matieres du jour
- Modifier une matiere de l'emploi du temps
- Creer un evenemet
- Modifier un evenement
- Afficher un evenement
- Suprimer un evenement