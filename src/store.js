import { reactive } from 'vue';

export const store = reactive ({
  archetypeChoice: '',
  cards: [],
  archetypes: [],
  apiURL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
  apiArchetypesURL: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
  isLoading: true,
});