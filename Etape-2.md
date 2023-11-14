# Étape 2
L'objectif est de découper le composant `src/App.vue` en plusieurs
composants, afin d'en simplifier sa compréhension et sa maintenance.

À la fin de cette étape votre application devrait ressembler à ceci :

![decoupe-composants-1.PNG](_medias%2Fdecoupe-composants-1.PNG)

* `src/App.vue` : composant racine de l'application qui fera appel aux
  composants suivants :
   * `src/components/PageTopBarre.vue` : composant pour la barre du solde d'or
   * `src/components/PageHeader.vue` : composant pour l'en-tête de la page
   * `src/components/PageFooter.vue` : composant pour le pied de page
   * `src/components/TroupeCarte.vue` : composant pour une troupe

## Aperçu dans Vue DevTools des composants créés
![vue-dev-tools.PNG](_medias%2Fvue-dev-tools.PNG)

## Composant PageTopBarre
Le composant `PageTopBarre.vue` remplacera la `<div class="solde-or">` de `App.vue`.

`PageTopBarre.vue` affiche le solde d'or `totalOr` déclaré dans le composant `App.vue`.

Pour passer `totalOr` de `App.vue` à `PageTopBarre.vue`, il faut :

1. Définir une **propriété** `or` dans`PageTobBarre.vue`.
2. Passer `totalOr` de `App.vue` à `PageTobBarre.vue` via la propriété `or` définie.

Ce passage de données via les _props_ est symbolisé par la flèche jaune dans le diagramme ci-dessous.

![decoupe-composants-2.png](_medias%2Fdecoupe-composants-2.png)

### Instructions
1. Créez le composant `src/components/PageTopBarre.vue`
2. Ajouter l'élément HTML `<div class="solde-or">` du composant `src/App.vue` au `<template>` de `PageTopBarre.vue`.
      ```vue
   <div class="solde-or">
       <img src="img/piece-or-note.jpg" alt="Solde Or">
       {{ totalOr.toLocaleString('fr-CH') }}
       pièces d'or
   </div>
   ```
3. Pour que `App.vue` puisse passer `totalOr` à `PageTobBarre.vue`, définir une **propriété `or`**
   dans `PageTobBarre.vue`.
   La propriété `or` est **obligatoire** et doit être de **type `Number`**.
    ```vue
   <script setup>
    defineProps({
        or: {
            type: Number,
            required: true
        }
    })
    </script>
    ```
4. Dans le `<template>` de `PageTobBarre.vue`, remplacer `{{ totalOr }}` par `{{ or }}` pour afficher le solde d'or.
   ```vue
   <div class="solde-or">
       <img src="img/piece-or-note.jpg" alt="Solde Or">
       {{ or.toLocaleString('fr-CH') }}
       pièces d'or
   </div>
   ```
5. Ajouter le composant `PageTopBarre.vue` dans `App.vue` à la place de `<div class="solde-or">`
   et lui passer `totalOr` de `App.vue` via la propriété `or`.

   > Ne pas oublier de mettre `:` devant `or` pour indiquer que vous passez une instruction JavaScript,
   et non une valeur statique.
    ```vue
    <page-top-barre :or="totalOr" />
    ```
5. Couper le style CSS qui concerne `.solde-or` dans `src/assets/main.css` pour le coller
   dans `<style>` de `PageTopBarre.vue`.
6. Réécrire le CSS ajouter dans `<style>` de `PageTopBarre.vue` en **Sass** ou en **SCSS**.

   Ci-après, le CSS réécrit en Sass :
    ```vue
    <style scoped lang="sass">
    .solde-or
        position: fixed
        width: 100%
        background: white
        color: #3B3B3B
        padding: .5rem
        height: 60px
        z-index: 9999
        box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px
        
    .solde-or img
        max-height: 3em
        vertical-align: middle
    </style>
    ```

## Composant PageHeader
Le composant `PageHeader.vue` remplacera la `<header>` de `App.vue`.
Procéder de la même manière que pour `PageTopBarre.vue` :
1. Créez le composant `src/components/PageHeader.vue`
2. Ajouter l'élément HTML `<header>` du composant `src/App.vue` au `<template>` de `PageHeader.vue`.
3. Créer les _props_ nécessaires pour passer les données `titre, description, site` de `App.vue` à `PageHeader.vue`.
4. Ajouter le composant `PageHeader.vue` dans `App.vue` à la place de `<header>`
   et lui passer les données `titre, description, site` de `App.vue` via les _props_.
5. Couper le CSS qui concerne `header` dans `src/assets/main.css`, le coller dans `<style>` de `PageHeader.vue`
   et le réécrire en **Sass** ou en **SCSS**.

## Composant PageFooter
Le composant `PageFooter.vue` remplacera la `<footer>` de `App.vue`.
Procéder de la même manière que pour `PageTopBarre.vue` et `PageHeader.vue`.

1. Créez le composant `src/components/PageFooter.vue`
2. Ajouter l'élément HTML `<footer>` du composant `src/App.vue` au `<template>` de `PageFooter.vue`.
3. Créer une _props_ `site` pour passer le lien vers le site CoC de `App.vue` à `PageHeader.vue`.
4. Ajouter le composant `PageFooter.vue` dans `App.vue` à la place de `<footer>`
   et lui passer le lien vers le site CoC de `App.vue` via la _props_ `site`.
5. Couper le CSS qui concerne `footer` dans `src/assets/main.css`, le coller dans `<style>` de `PageFooter.vue`
   et le réécrire en **Sass** ou en **SCSS**.

## Composant TroupeCarte

![decoupe-composants-3.PNG](_medias%2Fdecoupe-composants-3.PNG)

Le composant `TroupeCarte.vue` remplacera les `<article>` de `App.vue`.
Procéder de la même manière que pour `PageTopBarre.vue`, `PageHeader.vue` et `PageFooter.vue` :

1. Créez le composant `src/components/TroupeCarte.vue`
2. Ajouter l'élément HTML `<article>` du composant `src/App.vue` au `<template>` de `TroupeCarte.vue`.
3. Créer les _props_ `troupe` et `or` pour passer les données de la `troupe` à afficher
   et `totalOr` de `App.vue` à `TroupeCarte.vue`.
   > On passe `totalOr` pour activer ou désactiver le bouton `Recruter` de la carte.
4. Ajouter le composant `TroupeCarte.vue` dans `App.vue` à la place des `<article>`
   et lui passer les données `troupe` de `App.vue` via les _props_.
   ```vue
   <ul class="cartes">
      <li v-for="trp in troupes" :key="trp.id">
        <troupe-carte
            :troupe="trp"
            :or="totalOr"
        />
      </li>
   </ul>
   ```
5. Couper le CSS qui concerne `article` dans `src/assets/main.css`, le coller dans `<style>` de `TroupeCarte.vue`
   et le réécrire en **Sass** ou en **SCSS**.

### Formation des troupes

La méthode qui gère la formation des troupes `formerTroupe` est définie dans `App.vue`.
Le composant `TroupeCarte.vue` doit pouvoir appeler cette méthode, mais ne peut pas le faire directement.
Pour ce faire, il faudra utiliser les **événements**.

![decoupe-composants-4.PNG](_medias%2Fdecoupe-composants-4.PNG)

### Instructions

1. Dans `TroupeCarte.vue`
   2. Définir un **événement** `former`
      ```vue
      const emit = defineEmits(["former"]);
      ```
   2. Créer une méthode `formerTroupe(cout)` qui émettra l'événement `former`
      avec le coût de la troupe en paramètre.
      ```vue
      const formerTroupe = (cout) => {
          emit("former", cout);
      };
      ```
3. Modifier l'**événement** `@click` du bouton `Former` pour qu'il appelle la méthode `formerTroupe`
   et lui passe le coût de formation en paramètre.
     ```vue
     <button
         :style="`background-color: ${troupe.couleur}`"
         @click="formerTroupe(troupe.cout)"
         :disabled="or < troupe.cout"
     > 
         Former
         <img src="/img/piece-or.png" alt="Former" />
    </button>
     ```
2. Dans `App.vue`, ajouter un **écouteur d'événement** `@former` qui appellera la méthode `formerTroupe` de `App.vue`.
   > Le paramètre `cout` est automatiquement passé à la méthode `formerTroupe`
   ```vue
   <troupe-carte
           :troupe="trp"
           :or="totalOr"
           @former="formerTroupe"
   />
   ```


