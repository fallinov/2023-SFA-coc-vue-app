<script setup>
import {onMounted, ref} from "vue";
import PageFooter from "@/components/PageFooter.vue";
import PageTopBarre from "@/components/PageTopBarre.vue";
import PageHeader from "@/components/PageHeader.vue";
import TroupeCarte from "@/components/TroupeCarte.vue";

const totalOr = ref(20000)
const troupes = ref([])
const troupesFormees = ref([])

/* Méthodes */
function formerTroupe(troupe) {
  if (totalOr.value < troupe.cout) {
    alert("Vous n'avez pas assez d'or mon seigneur !")
    return
  }
  totalOr.value -= troupe.cout
  troupesFormees.value.push(troupe)
}

// Quand le composant est monté, on va chercher les données
onMounted(() => {
  fetch('https://cocapi.divtec.me/troupes')
      .then((res) => res.json())
      .then((data) => {
        troupes.value = data
      })
})
</script>

<template>
  <PageTopBarre :total-or="totalOr" :troupes-formees="troupesFormees"/>
  <PageHeader/>
  <main>
    <ul class="cartes">
      <li v-for="troupe in troupes" :key="troupe.id">
        <TroupeCarte
            :troupe="troupe"
            :or="totalOr"
            @former="formerTroupe"
        />
      </li>
    </ul>
  </main>
  <PageFooter/>
</template>

<style scoped>

</style>
