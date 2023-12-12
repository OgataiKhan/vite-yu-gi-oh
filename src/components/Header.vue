<script>

export default {
  name: 'Header',
  
};

</script>

<template>
  <header>
    <div class="logo">
      <img src="/public/img/logo.png" alt="Yu-Gi-Oh logo">
    </div>
    <h1>Yu-Gi-Oh Api</h1>
  </header>
</template>

<style lang="scss" scoped>
  header {
    display: flex;
    align-items: center;
    .logo {
      width: 100px;
      padding: 20px;
    }
    h1 {
      padding-top: 10px;
      padding-bottom: 15px;
    }
    background-color: green;
  }
</style>