import { defineStore } from 'pinia';

export const useClothingStore = defineStore('clothingStore', {
  state: () => ({
    items: [
      { id: 1, name: 'T-Shirt', category: 'Tops', image: 'tshirt.jpg' },
      { id: 2, name: 'Jeans', category: 'Bottoms', image: 'jeans.jpg' },
      { id: 3, name: 'Sneakers', category: 'Shoes', image: 'sneakers.jpg' }
    ],
    searchQuery: ''
  }),
  actions: {
    setSearchQuery(query) {
      this.searchQuery = query;
    }
  },
  getters: {
    filteredItems(state) {
      if (!state.searchQuery) return state.items;
      return state.items.filter(item =>
        item.name.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    }
  }
});
