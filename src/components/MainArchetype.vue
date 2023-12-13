<script>
import axios from 'axios';
import { store } from '../store';

export default {
  name: 'ArchetypeSelector',
  emits: ['archetypeSelection'],
  data() {
    return {
      store,
    };
  },
  created() {
    axios.get(store.apiArchetypesURL).then((response) => {
      store.archetypes = response.data;
    })
      .finally(() => {
        store.isLoading = false;
      });;
  },
};

</script>

<template>
  <label for="archetype-selector">Choose an archetype:</label>
  <select name="archetype" id="archetype-selector" v-model="store.selectedArchetype" @change="$emit('archetypeSelection')">
    <option selected value="">Select Archetype...</option>
    <option v-for="archetype in store.archetypes" :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
  </select>
</template>

<style lang="scss" scoped>
label {
  display: none;
}

#archetype-selector {
  min-width: 267px;
  border: 1px solid #CED4DA;
  border-radius: 5px;
  padding: 8px 15px 8px 10px;
  margin: 0 10px 25px 10px;
}
</style>