<script>

export default {
  name: 'MainCardsFound',
  
};

</script>

<template>
  <p class="cards-found">Found XX cards</p>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;

  .cards-found {
    padding: 20px 17px;
    background-color: $tertiary-color;
  }
</style>