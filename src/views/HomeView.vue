<script setup>
  import TroupeCarte from "@/components/TroupeCarte.vue";

  defineProps({
    troupes: {
      type: Array,
      required: true
    },
    or: {
      type: Number,
      required: true
    }
  })

  // Evénements
  const emit = defineEmits(["former"]);
</script>

<template>
    <ul class="cartes">
      <li v-for="troupe in troupes" :key="troupe.id">
        <TroupeCarte
            :troupe="troupe"
            :or="or"
            @former="$emit('former', $event)"
        />
      </li>
    </ul>
</template>

<style scoped>

</style>
