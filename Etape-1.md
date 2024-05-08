# Étape 1
Configuration de l'application Vue et intégration de l'ancien site CoC

## 1. Configuration du projet
### 1.1 Installer les paquets 
```sh
npm install
```
### 1.2 Ajouter le paquet pour Sass et SCSS
```sh
npm install -D sass
```
### 1.3 Démarrer le serveur de développement
```sh
npm run dev
```
### 1.4 Résultat
 ![1-vue-app-base.png](_medias%2F1-vue-app-base.png)
---
## 2. Titre du site, CSS et images
### 2.2 Remplacer le titre et la langue de la page dans `index.html`
```html
<html lang="fr">
```
```html
<title>Clash of Clans</title>
```
### 2.3 Remplacer la favicon
Remplacer le fichier `public/favicon.ico` par celui de la maquette `_maquette/favicon.ico`
### 2.4 Supprimer les CSS de l'application de démonstration
* Supprimer le fichier `src/assets/base.css`
* Remplacer le fichier `src/assets/main.css` par celui de la maquette `_maquette/css/main.css`
### 2.5 Ajouter les images
Copier le dossier `_maquette/img/` de la maquette dans `public/`
### 2.6 Résultat
![2-coc-avec-css.png](_medias%2F2-coc-avec-css.png)

## 3. Code HTML de base 
### 3.1 Remplacement App.vue
Remplacer le contenu de `src/App.vue` par le code ci-dessous.
```vue
<script setup>
// Cheat Sheet: https://steve-fallet.notion.site/Vue-3-script-setup-Cheat-Sheet-b12192ceae244ecda65f771579ca02bc
import {ref} from 'vue'

// Tableau des troupes
const troupes = ref([
  {
    "id": 2,
    "nom": "Archer",
    "niveau": 3,
    "formation": 25,
    "vitesse": 24,
    "cout": 200,
    "description": "Les archers sont des tireurs d'élite qui attaquent à distance. Ils sont rapides et bon marché à former, mais ils sont faibles en mêlée et doivent être protégés.",
    "couleur": "#EE5487",
    "image": "https://cocapi.divtec.me/img/archer.png"
  },
  {
    "id": 1,
    "nom": "Barbare",
    "niveau": 4,
    "formation": 20,
    "vitesse": 16,
    "cout": 150,
    "description": "Ce guerrier intrépide compte sur ses muscles saillants et sa fière moustache pour semer le chaos dans les villages ennemis. Faites charger une horde de barbares et profitez du spectacle !",
    "couleur": "#ebb428",
    "image": "https://cocapi.divtec.me/img/barbare.png"
  },
  {
    "id": 3,
    "nom": "Géant",
    "niveau": 5,
    "formation": 12,
    "vitesse": 12,
    "cout": 2250,
    "description": "Les géants sont de grands guerriers qui attaquent les défenses ennemies en premier. Ils sont lents mais résistants.",
    "couleur": "#F6901A",
    "image": "https://cocapi.divtec.me/img/geant.png"
  }
])
</script>

<template>
  <h1>Clash Of Clans</h1>
  <ul>
    <li v-for="troupe in troupes" :key="troupe">
      {{ troupe.nom }}
    </li>
  </ul>
</template>

<style scoped lang="sass">
/* https://sass-lang.com/guide */
$primary: #800080
$secondary: #fefefe

h1
  color: $primary
  text-align: center

ul
  list-style: none
  display: flex
  flex-wrap: wrap
  justify-content: center
  li
    color: $secondary
    background-color: $primary
    margin: 1rem
    padding: 1rem
    max-width: 200px
</style>
```

### 3.2 Résultat
  ![3-coc-app-base.png](_medias%2F3-coc-app-base.png)

## 4. Intégration du HTML de la maquette
Aide : [Vue 3 "script setup" Cheat Sheet](https://divtec.gitbook.io/vuejs/vue-3-less-than-script-setup-greater-than-cheat-sheet)

### 4.1 Intégrer dans `src/App.vue` le HTML de la maquette `_maquette/index.html`.

1. Supprimer le contenu du `<style>` de `src/App.vue`
2. Copier le contenu du `<body>` de la maquette `_maquette/index.html` dans le `<template>` de `src/App.vue`

### 4.1 Contenus dynamique
1. Dans la `<ul class="cartes">` répéter avec une `v-for` le `<li>` pour chaque troupe du tableau `troupes` 
2. La carte de l'archer doit maintenant s'afficher 3x.
3. Dans `<article>` qui représent une troupe intégrer les données dynamiques
   * image et son texte alternatif
   * niveau
   * nom de la troupe
   * description
   * formation (secondes)
   * vitesse
   * cout
### 4.1 Style dynamique
Modifier également le style CSS en pour les éléments suivants
   * Dégradé de l'entête de l'article
   * Couleur de la police du niveau
   * Couleur de fond des données de formation, vitesse et coût

### 4.3 Résultat   
![4-coc-integration.png](_medias%2F4-coc-integration.png)
---

## 5. Utilisation de l'API CoC

Ajouter `import {onMounted, ref} from "vue";` à `src/App.vue`.

Utiliser la méthode onMounted dans `src/App.vue`.

```javascript
// Quand le composant est monté, on va chercher les données
onMounted(() => {
  fetch('https://cocapi.divtec.me/troupes')
      .then((res) => res.json())
      .then((data) => {
        troupes.value = data
      })
})
```
