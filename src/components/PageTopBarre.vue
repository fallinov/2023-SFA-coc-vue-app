<script setup>
defineProps(['totalOr', 'troupesFormees'])

</script>

<template>
  <aside class="solde-or">
    <div>
      <img src="img/piece-or-note.jpg" alt="Solde Or">
      {{ totalOr.toLocaleString('fr-CH') }} pièces d'or
    </div>
    <div>
      <img src="img/troupes-icon.png" alt="Troupes">
      {{ troupesFormees.length }} troupes formées
    </div>
  </aside>
</template>

<style scoped>

</style>
