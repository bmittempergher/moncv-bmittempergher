# moncv-bmittem

Ce projet a été réalisé dans le cadre du cours "**Projet de technologie WEB de présentation**" de la Haute école de gestion de Neuchâtel par Bastien Mittempergher de la classe IG16-TP.

Il consiste en un curriculum vitae réalisé en html/css avec un framework et l'ajout d'élément JavaScript via jQuery et deux plugin (chart.js et jQuery-colorbox). 

## Outils

* Visual Studio Code
    * [Lien VSC](https://code.visualstudio.com/docs/setup/setup-overview)
* GitHub Desktop + GitShell
    * [Lien windows](https://windows.github.com)
    * [Lien Mac](https://mac.github.com)
* Google Chrome

## Mise en place de l'environement de développement

Intaller les outils cités plus haut si ce n'est pas déjà fait.

Télécharger et installer Node.js 
* Il permet d'utiliser JavaScript en dehors du navigatueur
* [Lien de téléchargement](https://nodejs.org/en/download/)


### 1. installer la vue-cli en global
    npm install -g vue-cli

### 2. Utiliser vue init pour créer notre nouveau proget
    vue init webpack moncv

### 3. Ouverture du projet et installation des dépendances
Pour ouvrir le projet, il faut se positionner sur le dossier de votre projet à l'intérieur de GitShell. Pour se faire utiliser les commandes de navigation `cd`. 
Dans mon cas cela donne : `~\Documents\moncv-bmittem`

    code .
    npm install

### 4. Nettoyage et configuration
#### 4.1 Supprimer src/components et src/App.vue
#### 4.2 Supprimer les dépendances
    npm uninstall vue --save
#### 4.3 Installer Jquery et Bootstrap
    npm install jquery bootstrap@3 --save

### 5 Configuration du code linting
#### 5.1 Ajouter des règles suivantes dans **.eslintrc.js** (En-dessous de ` "rules": { `)
    "semi": ["error", "always"],
    "indent": ["error", 4],`

### 6 Corriger le webpack pour qu'il supporte jquery
#### 6.1 Ajouter les lignes suivantes dans **build/webpack.dev.conf** et **build/webpack.prod.conf**
    new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
    }),
#### 6.2 Corriger la ligne `devtoll`
    devtool: 'source-map',

### 7. Finir l'installation de Jquery et Bootstrap
#### 7.1 Dans le fichier **src/main.js**
    import $ from 'jquery';
    import 'bootstrap';
    import 'bootstrap/dist/css/bootstrap.min.css';

    $(document).ready(() => {
        console.log('it works!');
    });

### 8. Créer un fichier pour customiser personnelement vos pages
#### 8.1 Créer un main.css dans votre dossier src
**src/main.css**
#### 8.2 Ajouter l'import de votre CSS à la suite de `bootstrap.min.css` du fichier **main.js**
    import './main.css';

## Framework

> Bootstrap

> Bootswatch - Readable

## Git

> Après l'installation de git, il faut modifier le fichier de config
> Il se trouve dans le dossier cacher à la racine de votre projet : **.git/config**

> Ajouter une section `[user]` avec les informations suivantes :

    email = votre@email.ch
    name = votre_nom

### Commandes git utiles

``` bash
# Permet de créer le dépôt .git
git init

# Permet de savoir ce qui n'a pas encore été validé
git status

# Affiche tous les commit qui ont été effectués
git log

# Permet d'ajouter tout le contenu (fichier et dossier) du dossier. 
git add --all

# Met à jour votre version local
git pull

# Effectue un commit contenant les fichiers ajoutés avec `git add`
git commit

# Envoie le commit dans la branche master du dépôt Origin
git push origin master

```
## Build Setup

``` bash
# installe les dépendances
npm install

# Démarre le serveur sur localhost:8080
npm run dev

# Construit pour la production avec des minifications
npm run build

# Déploie votre site en static sur GitHub
npm run deploy
```

## jQuery
> jQuery est une petit librairie JavaScript, qui permet entre-autres de rendre plus facile les actions suivantes :

* Parcourir et manipuler de documents
* Traiter des événements
* Gérer des animations
* L'utilisation d'Ajax 

Dans ce projet 2 plugin jQuery ont été mis en place :
* chart.js
* jquery-colorbox.js

### Sélectionner un élément avec jQuery

Sélectionner un élément via son ID

    $('#myId');

Sélectionner un élément via son nom de Class

    $('.myClass');

Sélectionner un élément via ses attributs

    $('input[name="first_name"]'); 

Sélectionner un élément via le selecteur CSS

    $('#myId ul.people li');

### Le plugin Chart.js
Il permet dans le cas de ce projet de remplacer les progress-bar obtenu via bootstrap par des graphiques en cercle.

#### Mise en place
1. Installation du plugin via npm
    
    npm install chart.js --save

2. Importer la source dans notre **mains.js**

    import Chart from 'chart.js';

3. Configurer/paramétrer le plugin via des fonctions qui vont permettre de remplacer les progress-bar par les charts, sans toucher à notre **index.html**
* Avant l'exécution des fonctions, il faut rechercher les éléments avec la class progress et les stocker dans une variable :  `let ListProg = $('.progress');`
* `transformPage()`
    * Boucle sur la liste `ListProg`
    * Appel les deux autres fonctions pour chaque progress-bar
    * Remplace le code HTML par un canvas (Le canvas permet de dessiner un graphique)
* `extractDataFromProgressBar(progress)`
    * Cherche la valeur de la progress-bar passée en paramètre
    * Retourne la valeur trouvée
* `drawChart(val, nbID)`
    * Retrouve le canvas à l'aide de l'ID passé en parmettre (`nbID`)
    * Crée le context qui accueillera le graphique
    * Crée le nouveau chart en utilisant la valeur reçue (`val`)

Toutes les progress-bars sont alors remplacées par un graphique (doughnut)

### Le plugin jquery-colorbox.js
Il permet de visualiser les images d'un même groupe dans une gallerie navigable (suivant, précédent,...)

#### Mise en place
1. Installation du plugin via npm
    
    npm install jquery-colorbox --save

2. Importer la source dans notre **mains.js**

    import 'jquery-colorbox.js';
    import 'jquery-colorbox/jquery.colorbox-min.js';

3. Configurer/paramétrer le plugin
* Pour ce plugin les cibles choisies sont les liens (`<a>`) avec la class gallery (`... class="gallery" ...`)
    * Pour ce plugin contrairement à celui vu précédemment, les éléments HTML sont juste ciblés à l'aide de la class `gallery` et non-remplacés à l'aide de fonctions JavaScript.
* Cibler les éléments voulus avec la colorbox 
    * `$("a.gallery").colorbox();`
* Configurer la colorbox en y ajoutant des options telque ([Liste des options possibles](http://www.jacklmoore.com/colorbox/)): 
    * current, previous, next, close, title
        * Représente les boutons et informations se trouvant en bas de la gallery
    * maxWidth, MaxHeight
        * Définit la taille maximale
    * scalePhotos
        * Indique si les images peuvent être redimensionnées ou non

### Contact

Auteur : Bastien Mittempergher

Email : bastien.mittempergher@he-arc.ch
