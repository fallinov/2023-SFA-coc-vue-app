<script setup>
defineProps(['totalOr', 'troupesFormees'])
// TODO afficler la liste des troupes sous format d'icones avec une puce indiquant le nombre de troupes formées
// TODO ajouter une barre de recherche pour filtrer les troupes
// TODO ajouter un liste déroulante pour trier les troupes par nom, coût, temps de formation
</script>

<template>
  <aside class="solde-or">
    <div>
      <img src="/img/piece-or-note.jpg" alt="Solde Or">
      {{ totalOr.toLocaleString('fr-CH') }} pièces d'or
    </div>
    <div>
      <img src="/img/troupes-icon.png" alt="Troupes">
      {{ troupesFormees.length }} troupes formées
    </div>
  </aside>
</template>

<style scoped>

</style>
