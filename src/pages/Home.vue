<template>
    <div>
      <h1>Welcome to Wardrobe Management System</h1>
      <p>Organize your wardrobe with ease.</p>
  
      <router-link to="/login">
        <button>Login</button>
      </router-link>
      <router-link to="/register">
        <button>Register</button>
      </router-link>
    </div>
  </template>
  
  <style scoped>
  h1 {
    text-align: center;
    margin-top: 50px;
  }
  button {
    margin: 10px;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  </style>
  