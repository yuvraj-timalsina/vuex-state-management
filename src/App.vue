<script>
import {ref} from 'vue'
import allAirports from '@/data/airports.js'
import AirportCard from '@/components/AirportCard.vue'

export default {
  components: {
    AirportCard
  },
  setup() {
    const airports = ref(allAirports)
    return {airports}
  }
}
</script>
<template>
  <div class="wrapper">
    <p>{{ $store.getters['user/fullName'] }}</p>
    <div v-for="airport in airports" :key="airport.abbreviation">
      <airport-card :airport="airport" @click="$store.dispatch('addToFavorites', airport)"/>
    </div>
    <h2 v-if="$store.state.airports.favourites.length">Favorites</h2>
    <div v-for="airport in $store.state.airports.favourites" :key="airport.abbreviation">
      <airport-card :airport="airport"/>
    </div>
  </div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.wrapper {
  display: grid;
  cursor: pointer;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  max-width: 960px;
  margin: 0 auto;
}

p,
h2,
h3 {
  grid-column: span 3;
  height: 25%;
}
</style>
