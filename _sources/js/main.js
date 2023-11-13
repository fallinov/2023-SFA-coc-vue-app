const {createApp} = Vue

const app = createApp({
  data() {
    return {
      totalOr: 20000,
      troupesFormees: [],
      troupes: [
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
        },
        {
          "id": 4,
          "nom": "Gobelin",
          "niveau": 6,
          "formation": 30,
          "vitesse": 32,
          "cout": 25,
          "description": "Les gobelins sont de petits êtres verts qui pillent les villages pour leur or et leur élixir. Ils sont rapides et bon marché à former, mais ils sont faibles en mêlée et doivent être protégés.",
          "couleur": "#add76d",
          "image": "https://cocapi.divtec.me/img/gobelin.png"
        }
      ]
    }
  },
  methods: {
    formerTroupe(troupe) {
      if (this.totalOr < troupe.cout) {
        alert("Vous n'avez pas assez d'or mon seigneur !");
        return;
      }
      this.totalOr -= troupe.cout;
      this.troupesFormees.push(troupe);
    }
  }
}).mount('#app')
