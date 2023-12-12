<script>
import MainCardsFound from './MainCardsFound.vue';
import MainCardsCard from './MainCardsCard.vue';
import { store } from '../store';

export default {
  name: 'MainCards',
  props: ['name', 'archetype', 'image'],
  components: {
    MainCardsFound,
    MainCardsCard,
  },
  data() {
    return {
      store,
    };
  },
};

</script>

<template>
  <section>
    <div class="cards-container">
      <MainCardsFound />
      <ul class="cards-list">
        <MainCardsCard v-for="card in store.cards" :name="card.name" :archetype="card.archetype" :image="card.card_images[0].image_url" />
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;

section {
  background-color: $secondary-color;
  padding: 49px;
  .cards-list {
    display: flex;
    column-gap: 25px;
    row-gap: 16px;
    flex-wrap: wrap;
  }
}

</style>