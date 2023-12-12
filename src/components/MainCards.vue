<script>
import MainCardsFound from './MainCardsFound.vue';
import MainCardsCard from './MainCardsCard.vue';

export default {
  name: 'Cards',
  components: {
    MainCardsFound,
    MainCardsCard,
  },
};

</script>

<template>
  <section>
    <div class="cards-container">
      <MainCardsFound />
      <ul class="cards-list">
        <MainCardsCard />
        <MainCardsCard />
        <MainCardsCard />
        <MainCardsCard />
        <MainCardsCard />
        <MainCardsCard />
        <MainCardsCard />
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