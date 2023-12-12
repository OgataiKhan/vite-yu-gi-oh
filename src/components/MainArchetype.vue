<script>

export default {
  name: 'ArchetypeSelector',

};

</script>

<template>
  <label for="archetype-selector">Choose an archetype:</label>
  <select name="archetype" id="archetype-selector">
    <option value="alien">Alien</option>
  </select>
</template>

<style lang="scss" scoped>
label {
  display: none;
}

#archetype-selector {
  width: 163px;
  border: 1px solid #CED4DA;
  border-radius: 5px;
  padding: 8px 15px 8px 10px;
  margin: 0 10px 25px 10px;
}
</style>