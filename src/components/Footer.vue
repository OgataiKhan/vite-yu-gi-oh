<script>

export default {
  name: 'Footer',

};

</script>

<template>
  <footer>
    <p>Made with &hearts; by Kevin</p>
  </footer>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;

footer {
  background-color: $secondary-color;
  p {
    text-align: center;
    padding: 25px 0;
  }
}

</style>