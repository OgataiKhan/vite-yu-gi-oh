<script>
import MainArchetype from './MainArchetype.vue';
import MainCards from './MainCards.vue';

export default {
  name: 'Main',
  components: {
    MainArchetype,
    MainCards,
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