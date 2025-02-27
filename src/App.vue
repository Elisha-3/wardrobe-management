<template>
  <div>
    <Navbar /> <!-- Navbar at the top -->
    <div class="container">
      <router-view /> <!-- Dynamic page rendering -->
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar
  }
};
</script>

<style scoped>
.container {
  padding: 20px;
}
</style>
