<template>
  <div>
      <SearchBar @search-changed="onSearchChanged" />
      <CategoryFilter @filter-changed="onFilterChanged" />
      <ClothingItemForm @item-added="onItemAdded" @item-updated="onItemUpdated" />
      <ClothingItemList 
          :clothingItems="filteredItems"
          @item-deleted="onItemDeleted"
          @edit-item="onEditItem"
      />
  </div>
</template>

<script>
import axios from 'axios';
import ClothingItemForm from './components/ClothingItemForm.vue';
import ClothingItemList from './components/ClothingItemList.vue';
import CategoryFilter from './components/CategoryFilter.vue';
import SearchBar from './components/SearchBar.vue';

export default {
  components: {
      ClothingItemForm,
      ClothingItemList,
      CategoryFilter,
      SearchBar,
  },
  data() {
      return {
          clothingItems: [],
          filteredItems: [],
          searchQuery: '',
          selectedCategory: '',
      };
  },
  mounted() {
      axios.get('/clothing-items')
          .then(response => {
              this.clothingItems = response.data;
              this.filteredItems = response.data;
          });
  },
  methods: {
      onSearchChanged(query) {
          this.searchQuery = query;
          this.filterItems();
      },
      onFilterChanged(category) {
          this.selectedCategory = category;
          this.filterItems();
      },
      filterItems() {
          this.filteredItems = this.clothingItems.filter(item => {
              const matchesSearch = item.name.toLowerCase().includes(this.searchQuery.toLowerCase());
              const matchesCategory = !this.selectedCategory || item.category === this.selectedCategory;
              return matchesSearch && matchesCategory;
          });
      },
      onItemAdded(item) {
          this.clothingItems.push(item);
          this.filterItems();
      },
      onItemUpdated(updatedItem) {
          const index = this.clothingItems.findIndex(item => item.id === updatedItem.id);
          this.clothingItems[index] = updatedItem;
          this.filterItems();
      },
      onItemDeleted(id) {
          this.clothingItems = this.clothingItems.filter(item => item.id !== id);
          this.filterItems();
      },
      onEditItem(item) {
          this.$refs.clothingItemForm.setEditMode(item);
      }
  }
};
</script>
