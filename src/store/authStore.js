import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || ''
  }),
  actions: {
    async login(email, password) {
      try {
        const response = await axios.post('http://localhost:8000/api/login', { email, password });
        this.token = response.data.token;
        localStorage.setItem('token', this.token);
      } catch (error) {
        console.error('Login failed', error);
      }
    },
    async register(name, email, password) {
      try {
        const response = await axios.post('http://localhost:8000/api/register', { name, email, password });
        this.token = response.data.token;
        localStorage.setItem('token', this.token);
      } catch (error) {
        console.error('Registration failed', error);
      }
    },
    logout() {
      this.token = '';
      localStorage.removeItem('token');
    }
  }
});
