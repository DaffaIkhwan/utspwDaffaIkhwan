<template>
    <div class="app">
      <!-- Navigation bar -->
      <Navbar/>
  
      <!-- Main content area -->
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </template>
  
  <script>
  // Import the Navbar component
  import Navbar from './NavBar.vue'; // Adjust the path as per your project structure
  
  export default {
    components: {
      Navbar // Register the Navbar component
    }
  }
  </script>
  
  <style>
  /* Add your CSS styles for the layout here */
  .container {
    margin-top: 50px;
  }
  </style>
  