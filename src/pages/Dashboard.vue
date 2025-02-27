<template>
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your wardrobe management dashboard.</p>
  
      <router-link to="/clothing">
        <button>Manage Clothing</button>
      </router-link>
      <router-link to="/">
        <button>Logout</button>
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
    background-color: #28a745;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #218838;
  }
  </style>
  