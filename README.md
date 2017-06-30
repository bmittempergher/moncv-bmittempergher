# moncv-bmittem

> A Vue.js project

## Outils

* Visual Studio Code
* GitHub
* GitShell

## Mise en place de l'environement de développement

Télécharger et installer Node.js 
* Il permet d'utiliser JavaScript en dehors du navigatueur


### 1. installer la vue-cli en global
    npm install -g vue-cli

### 2. Utiliser vue init pour créer notre nouveau proget
    vue init webpack moncv

### 3. Ouverture du project et installation des dépendances
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

### Sélectionner un élément avec jQuery

Sélectionner un élément via son ID

    $('#myId');

Sélectionner un élément via son nom de Class

    $('.myClass');

Sélectionner un élément via ses attributs

    $('input[name="first_name"]'); 

Sélectionner un élément via le selecteur CSS

    $('#myId ul.people li');



For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
