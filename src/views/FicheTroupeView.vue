<script setup>
import { computed } from "vue"
import { useRoute } from 'vue-router';
import TroupeCarte from "@/components/TroupeCarte.vue";
// Définit les props
const props = defineProps({
  troupes: {
    type: Array,
    required: true
  },
  or: {
    type: Number,
    required: true
  }
})
// Récupère les infos de la route. Notamment pour y récupérer les paramètres
const route = useRoute();

// Création d'une donnée calculée "Computed" qui récupère les données de la troupe ou null si id non trouvé
const troupe = computed(() => {
  return props.troupes.find((element) => element.id === Number(route.params.id)) || null
});

// Evénements du composant
const emit = defineEmits(["former"]);
</script>

<template>
  <h1>Fiche troupe</h1>
  <p>ID : {{ route.params.id }}</p>
  <pre>
    {{ troupe }}
  </pre>
  <ul class="cartes">
    <li>
      <TroupeCarte v-if="troupe"
          :troupe="troupe"
          :or="or"
          @former="$emit('former', $event)"
      />
    </li>
    </ul>
</template>

<style scoped lang="sass">
  pre
    background: black
    color: greenyellow
</style>
