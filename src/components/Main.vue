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
  methods: {
    cardSearch() {
      store.isLoading = true;
      if (store.selectedArchetype === '') {
        axios.get(store.apiURL + '?num=20&offset=0').then((response) => {
          store.cards = response.data.data;
        })
          .finally(() => {
            store.isLoading = false;
          });;
      } else {
        axios.get(store.apiURL + '?archetype=' + store.selectedArchetype + '&num=20&offset=0').then((response) => {
        store.cards = response.data.data;
      })
        .finally(() => {
          store.isLoading = false;
        });;
      }

    }
  },
  created() {
    this.cardSearch();
  },
};

</script>

<template>
  <main>
    <div class="container">
      <MainArchetype @archetypeSelection="cardSearch" />
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