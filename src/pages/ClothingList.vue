<template>
    <div>
      <h2>Clothing Management</h2>
  
      <!-- Search & Filter -->
      <div class="filter-container">
        <input type="text" v-model="searchQuery" placeholder="Search Clothing..." />
        <select v-model="selectedCategory">
          <option value="">All Categories</option>
          <option value="Tops">Tops (Shirts, T-Shirts, Coats, etc)</option>
          <option value="Bottoms">Bottoms (All Bottom Wears)</option>
          <option value="Shoes">Shoes</option>
        </select>
      </div>
  
      <!-- Add/Edit Form -->
      <div class="form-container">
        <h3>{{ isEditing ? 'Edit Clothing' : 'Add Clothing' }}</h3>
        <form @submit.prevent="handleSubmit">
          <input type="text" v-model="name" placeholder="Name" required />
          <select v-model="category" required>
            <option value="">Select Category</option>
            <option value="Tops">Tops</option>
            <option value="Bottoms">Bottoms</option>
            <option value="Shoes">Shoes</option>
          </select>
          <input type="text" v-model="image" placeholder="Image URL" required />
          <button type="submit">{{ isEditing ? 'Update' : 'Add' }}</button>
          <button v-if="isEditing" @click="cancelEdit">Cancel</button>
        </form>
      </div>
  
      <hr />
  
      <!-- Clothing List -->
      <ul>
        <li v-for="item in filteredClothing" :key="item.id">
          <img :src="item.image" alt="Clothing Image" width="50" />
          <strong>{{ item.name }}</strong> - {{ item.category }}
          <button @click="editItem(item)">Edit</button>
          <button @click="deleteItem(item.id)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref, computed, onMounted } from 'vue';
  import { useClothingStore } from '../store/clothingStore';
  
  export default {
    setup() {
      const clothingStore = useClothingStore();
  
      const name = ref('');
      const category = ref('');
      const image = ref('');
      const searchQuery = ref('');
      const selectedCategory = ref('');
      const isEditing = ref(false);
      const editingId = ref(null);
  
      onMounted(() => {
        clothingStore.fetchClothing();
      });
  
      const handleSubmit = () => {
        const clothingItem = { name: name.value, category: category.value, image: image.value };
  
        if (isEditing.value) {
          clothingStore.updateClothing(editingId.value, clothingItem);
        } else {
          clothingStore.addClothing(clothingItem);
        }
  
        resetForm();
      };
  
      const editItem = (item) => {
        name.value = item.name;
        category.value = item.category;
        image.value = item.image;
        editingId.value = item.id;
        isEditing.value = true;
      };
  
      const deleteItem = (id) => {
        clothingStore.deleteClothing(id);
      };
  
      const cancelEdit = () => {
        resetForm();
      };
  
      const resetForm = () => {
        name.value = '';
        category.value = '';
        image.value = '';
        editingId.value = null;
        isEditing.value = false;
      };
  
      // Filtered List
      const filteredClothing = computed(() => {
        return clothingStore.items.filter((item) => {
          const matchesSearch = item.name.toLowerCase().includes(searchQuery.value.toLowerCase());
          const matchesCategory = selectedCategory.value ? item.category === selectedCategory.value : true;
          return matchesSearch && matchesCategory;
        });
      });
  
      return {
        clothingStore,
        name,
        category,
        image,
        searchQuery,
        selectedCategory,
        filteredClothing,
        isEditing,
        handleSubmit,
        editItem,
        deleteItem,
        cancelEdit,
      };
    },
  };
  </script>
  
  <style scoped>
  .filter-container {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .filter-container input,
  .filter-container select {
    padding: 8px;
    width: 200px;
  }
  </style>
  