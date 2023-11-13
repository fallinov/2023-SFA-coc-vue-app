const { createApp } = Vue

const app = createApp({
  data() {
    return {
      titre: 'Clash of Clans',
      description: 'Construire un village, former un clan et participer à' +
        ' des guerres de clans épiques !',
      site: 'https://supercell.com/en/games/clashofclans/',
      totalOr: 20000,
      troupes: [
        {
          id: 1,
          nom: 'Barbare',
          description: 'Ce guerrier intrépide compte sur ses muscles saillants et sa fière moustache pour semer le chaos dans les villages ennemis. Faites charger une horde de barbares et profitez du spectacle !',
          image: 'barbare.png',
          imageFond: 'barbare-bg.jpg',
          couleur: '#EC9B3B',
          niveau: 4,
          formation: 20,
          vitesse: 16,
          cout: 150
        },
        {
          id: 2,
          nom: 'Archer',
          description: 'Ces tireurs d\'élite préfèrent garder leurs distances, aussi bien sur le champs de bataille que dans la vie. Ils n\'aiment rien tant que de voir tomber la cible sur laquelle ils ont jeté leur dévolu.',
          image: 'archer.png',
          couleur: '#EE5487',
          niveau: 5,
          formation: 25,
          vitesse: 24,
          cout: 300
        },
        {
          id: 3,
          nom: 'Géant',
          description: 'Ces grands gaillards semblent calmes de prime abord, mais ils se déchaîneront à la simple vue d\'une tourelle ou d\'un canon ! Lents mais résistants, ces guerriers sont faits pour encaisser les coups.',
          image: 'giant.png',
          couleur: '#F6901A',
          niveau: 5,
          formation: 120,
          vitesse: 12,
          cout: 2250
        },
        {
          id: 4,
          nom: 'Gobelin',
          description: 'Ces petites créatures agaçantes ne pensent qu\'à une chose: le BUTIN ! Ils sont plus rapides qu\'un piège à ressort, et leur appétit pour les ressources est sans limite.',
          image: 'goblin.png',
          couleur: '#82BB30',
          niveau: 5,
          formation: 30,
          vitesse: 32,
          cout: 100
        },
        {
          id: 5,
          nom: 'Dragon',
          description: 'Les dragons sont connus à travers tout le territoire pour leur puissance sans égal. Cette terreur écailleuse du ciel ne montre aucune pitié ; et rien n\'échappe à son souffle mortel.',
          image: 'dragon.webp',
          couleur: '#5F3A59',
          niveau: 2,
          formation: 720,
          vitesse: 16,
          cout: 12000
        }
      ]
    }
  },
  methods: {
    formerTroupe(cout) {
      if(this.totalOr < cout) {
        alert("Vous n'avez pas assez d'or mon seigneur !");
        return;
      }
      this.totalOr -= cout;
    }
  }
}).mount('#app')
