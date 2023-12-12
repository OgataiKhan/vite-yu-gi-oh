<script>
import { store } from '../store';

export default {
  name: 'MainCardsFound',
  data() {
    return {
      store,
    };
  },
};

</script>

<template>
  <p class="cards-found">Found {{ store.cards.length }} cards</p>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;

  .cards-found {
    padding: 20px 17px;
    background-color: $tertiary-color;
  }
</style>