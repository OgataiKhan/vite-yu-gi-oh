<script>

export default {
  name: 'Card',
  props: ['name', 'archetype', 'image'],
};

</script>

<template>
  <li class="card-box">
    <div class="card-img">
      <img :src="image" :alt="name">
      
    </div>
    <h3>{{ name }}</h3>
    <p>{{ archetype }}</p>
  </li>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;

li {
  background-color: $primary-color;
  text-align: center;
  width: calc((100% - (25px * 4)) / 5);
  h3 {
    padding: 20px;
  }
}
</style>