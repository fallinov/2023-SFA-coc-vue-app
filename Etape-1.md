# Étape 1
Configuration de l'application Vue et intégration de l'ancien site CoC

## 1. Configuration du projet
   * Installer les paquets 
      ```sh
      npm install
      ```
   * Ajouter le paquet pour Sass et SCSS
      ```sh
      npm install -D sass
      ```
   * Démarrer le serveur de développement
      ```sh
      npm run dev
      ```
     ![1-vue-app-base.png](_medias%2F1-vue-app-base.png)
---
## 2. Titre du site, CSS et images
   * Changer le titre de la page, de l'application, dans `src/index.html`
     ```html 
     <!-- Ancienne valeur -->
     <title>Vite App</title>
     <!-- Nouvelle valeur -->
     <title>Clash of Clans</title>
     ```
   * Supprimer le fichier `src/assets/base.css`
   * Remplacer le fichier `src/assets/main.css`
     par celui du site CoC `_sources/css/main.css`
   * Copier le dossier `_sources/img/` du site CoC dans `public/`
   * Remplacer le fichier `public/favicon.ico` par celui du site CoC `_sources/favicon.ico`

![2-coc-avec-css.png](_medias%2F2-coc-avec-css.png)

## 3. Page d'accueil de base
Remplacer le contenu de `src/App.vue` par le code ci-dessous.
```vue
<script setup>
// Cheat Sheet: https://steve-fallet.notion.site/Vue-3-script-setup-Cheat-Sheet-b12192ceae244ecda65f771579ca02bc
import {ref} from 'vue'

// Tableau des troupes
const troupe = ref([
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
  ![3-coc-app-base.png](_medias%2F3-coc-app-base.png)
---

## 4. Intégration du site CoC
Intégrer dans `src/App.vue` les contenus des fichiers `_sources/index.html`.
1. Supprimer le contenu du `<style>` de `src/App.vue`
2. Copier le contenu de `<div id="app">` du fichier `_sources/index.html` du site CoC
  dans le `<template>` de `src/App.vue`
2. Créer le JavaScipt du site CoC dans `<script setup>` de `src/App.vue` pour afficher correctement les cartes des toupres
   en utilisant la composition API de Vue 3.
   [Vue 3 "script setup" Cheat Sheet](https://steve-fallet.notion.site/Vue-3-script-setup-Cheat-Sheet-b12192ceae244ecda65f771579ca02bc)
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
