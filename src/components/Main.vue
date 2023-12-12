<script>
import axios from 'axios';
import MainArchetype from './MainArchetype.vue';
import MainCards from './MainCards.vue';
import { store } from '../store';

export default {
  name: 'Main',
  components: {
    MainArchetype,
    MainCards,
  },
  data() {
    return {
      store,
    };
  },
  created() {
    axios.get(store.apiURL).then((response) => {
      store.cards = response.data.data;
      console.log(store.cards);
    });
  },
};

</script>

<template>
  <main>
    <div class="container">
      <MainArchetype />
      <MainCards />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;


main {
  background-color: $primary-color;

  .container {
    max-width: 1250px;
    margin: 0 auto;
    padding: 25px 15px;
  }
}
</style>