<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="register">
        <input type="text" v-model="name" placeholder="Full Name" required />
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useAuthStore } from '../store/authStore';
  
  export default {
    setup() {
      const name = ref('');
      const email = ref('');
      const password = ref('');
      const authStore = useAuthStore();
  
      const register = () => {
        authStore.register(name.value, email.value, password.value);
      };
  
      return { name, email, password, register };
    }
  };
  </script>
  