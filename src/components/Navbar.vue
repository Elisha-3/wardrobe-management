<template>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/dashboard">Dashboard</router-link></li>
        <li><router-link to="/clothing">Clothing</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/register">Register</router-link></li>
      </ul>
      
      <!-- Search Input -->
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search clothing..."
        @input="updateSearch"
      />
    </nav>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useClothingStore } from '../store/clothingStore';
  
  export default {
    setup() {
      const searchQuery = ref('');
      const clothingStore = useClothingStore();
  
      const updateSearch = () => {
        clothingStore.setSearchQuery(searchQuery.value);
      };
  
      return { searchQuery, updateSearch };
    }
  };
  </script>
  
  <style scoped>
  nav {
    background: #333;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    margin-right: 15px;
  }
  
  a {
    color: white;
    text-decoration: none;
  }
  
  input {
    padding: 5px;
    border: none;
    border-radius: 4px;
  }
  </style>
  