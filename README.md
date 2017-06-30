# moncv-bmittem

> A Vue.js project

## Outils

* Visual Studio Code
* GitHub
* GitShell

## Mise en place de l'environement de développement

* Télécharger et installer Node.js 
    * Il permet d'utiliser JavaScript en dehors du navigatueur

```bash
# 1. installer la vue-cli en global
npm install -g vue-cli

# 2. Utiliser vue init pour créer notre nouveau proget
vue init webpack moncv

# 3. Ouverture du project et installation des dépendances
code .
npm install

# 4. Nettoyage et configuration
# 4.1 Supprimer *src/components* et *src/App.vue*
# 4.2 Supprimer les dépendances
npm uninstall vue --save
# 4.3 Installer Jquery et Bootstrap
npm install jquery bootstrap@3 --save

```

### 5 Configuration du code linting
#### 5.1 Ajouter des règles suivantes dans *.eslintrc.js* (En-dessous de ` "rules": { `)
    "semi": ["error", "always"],
    "indent": ["error", 4],`

### 6 Corriger le webpack pour qu'il supporte jquery
#### 6.1 Ajouter les lignes suivantes dans *build/webpack.dev.conf* et *build/webpack.prod.conf*
    new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
    }),
#### 6.2 Corriger la ligne `devtoll`
    devtool: 'source-map',

### 7. Finir l'installation de Jquery et Bootstrap
#### 7.1 Dans le fichier *src/main.js*
    import $ from 'jquery';
    import 'bootstrap';
    import 'bootstrap/dist/css/bootstrap.min.css';

    $(document).ready(() => {
        console.log('it works!');
    });

### 8. Créer un fichier pour customiser personnelement vos pages
#### 8.1 Créer un main.css dans votre dossier src
*src/main.css*
#### 8.2 Ajouter l'import de votre CSS à la suite de `bootstrap.min.css` du fichier *main.js*
    import './main.css';

## Framework

> Bootstrap
> Bootswatch

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
