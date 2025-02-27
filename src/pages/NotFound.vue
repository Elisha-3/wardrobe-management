<template>
    <div class="not-found">
      <h2>404 - Page Not Found</h2>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <router-link to="/">Go Back Home</router-link>
    </div>
  </template>
  
  <style scoped>
  .not-found {
    text-align: center;
    margin-top: 50px;
  }
  
  h2 {
    color: red;
  }
  </style>
  