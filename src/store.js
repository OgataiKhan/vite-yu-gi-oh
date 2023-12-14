import { reactive } from 'vue';

export const store = reactive ({
  cards: [],
  archetypes: [],
  apiURL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
  apiArchetypesURL: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
  isLoading: true,
  selectedArchetype: '',
});