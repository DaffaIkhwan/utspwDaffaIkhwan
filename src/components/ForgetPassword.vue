<template>
    <div class="wrapper">
      <nav class="nav">
        <!-- Add your navigation content here if needed -->
      </nav>
      <div class="form-box">
        <div class="login-container">
          <div class="top">
            <header>Lupa password?</header>
            <p>Jangan panik, Kami akan mengirimkan pesan untuk me-reset password anda</p>
          </div>
          <div class="input-box">
            <input type="text" class="input-field" placeholder="Username atau Email">
            <i class="bx bx-user"></i>
          </div>
          <div class="input-box">
            <router-link to="login" class="submit">Kirim tautan reset password</router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    // Add your script logic here if needed
  }
  </script>
  
  <style scoped>
  /* Add your CSS styles here */
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  * {  
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
  }
  body {
      background: white;
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;
  }
  
  .wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 110vh;
      position: relative;
  }
  
  .nav {
      position: fixed;
      top: 0;
      display: flex;
      justify-content: space-around;
      width: 100%;
      line-height: 100px;
      background-color: white;
      z-index: 100;
  }
  
  .form-box {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 512px;
      height: 600px;
      overflow: hidden;
      z-index: 2;
  }
  
  .login-container {
      position: absolute;
      left: 4px;
      width: 500px;
      display: flex;
      flex-direction: column;
      transition: .5s ease-in-out;
  }
  
  .top {
      color: black;
      font-size: small;
      padding: 10px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  
  header {
      color: black;
      font-size: 30px;
      text-align: center;
      padding: 10px 0 30px 0;
  }
  
  p {
      margin-top: 20px;
      font-size: small;
      text-align: center;
  }
  
  .input-field {
      font-size: 15px;
      background: gray;
      color: black;
      height: 50px;
      width: 100%;
      padding: 0 10px 0 45px;
      border: none;
      border-radius: 10px;
      outline: none;
      transition: .2s ease;
  }
  
  .input-field:hover,
  .input-field:focus {
      background: darkgrey;
  }
  
  .input-box i {
      position: relative;
      
      top: -35px;
      left: 17px;
      color: black;
  }
  


  ::-webkit-input-placeholder {
    color: black;
  }
  
  .submit {
      font-size: 15px;
      font-weight: 500;
      color: black;
      height: 50px;
      width: 100%;
      margin-top: 30px;
      border: none;
      margin-bottom: 10px;
      border-radius: 30px;
      outline: none;
      background:gray;
      cursor: pointer;
      transition: .3s ease-in-out;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
  }
  
  .submit:hover {
      background: rgba(0, 0, 0, 0.2);
      box-shadow: 1px 5px 7px 1px rgba(0, 0, 0, 0.2);
  }
  </style>
  