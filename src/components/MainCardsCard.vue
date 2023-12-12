<script>

export default {
  name: 'Card',

};

</script>

<template>
  <li class="card-box">
    <div class="card-img">
      <!-- <img :src="thumb" :alt="series"> -->
      Image
    </div>
    <h3>Card Name</h3>
    <p>Card Archetype</p>
  </li>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;

li {
  background-color: $primary-color;
  text-align: center;
  width: calc((100% - (25px * 4)) / 5);
}
</style>