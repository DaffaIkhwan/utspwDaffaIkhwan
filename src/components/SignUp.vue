<template>
    <div class="wrapper">
      <div class="logo_details">
        <i class='bx bx-code-alt'></i>
        <div class="logo_name">
          ADAPTATIF
        </div>
      </div>
      <div class="form-box">
        <div class="login-container">
          <div class="top">
            <header>Sign Up</header>
          </div>
          <div class="two-forms">
            <div class="input-box">
              <input type="text" class="input-field" placeholder="NamaAwal">
              <i class="bx bx-user"></i>
            </div>
            <div class="input-box">
              <input type="text" class="input-field" placeholder="NamaAkhir">
              <i class="bx bx-user"></i>
            </div>
          </div>
          <div class="input-box">
            <input type="text" class="input-field" placeholder="Email">
            <i class="bx bx-envelope"></i>
          </div>
          <div class="input-box">
            <input type="password" class="input-field" placeholder="Password">
            <i class="bx bx-lock-alt"></i>
          </div>
          <div class="two-col">
            <div class="one">
              <input type="checkbox" id="login-check">
              <label for="login-check"> Ingat saya</label>
            </div>
            <div class="two">
            </div>
          </div>
          <div class="input-box">
            <input type="submit" class="submit" value="Sign Up" @click="redirectToIndex">
          </div>
          <div class="input-box">
            <input type="submit" class="submit" value="Sign Up dengan Google" @click="redirectToIndex">
          </div>
          <div class="top">
            <span>Sudah punya akun? <router-link to="/login">Log In</router-link></span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      redirectToIndex() {
        this.$router.push('/home-beranda');
      },
      loginWithGoogle() {
        // Handle login with Google logic
      }
    }
  }
  </script>
  
  <style scoped>
  /* CSS styles */
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
  .logo_details {
    display: flex;
    align-items: center;
    margin-right: 60px;
    margin-bottom: 15px;
  }
  .logo_details i {
    font-size: 60px;
    color: var(--dark-blue);
  }
  .logo_details .logo_name {
    margin-left: 10px;
    font-size: 60px;
    color: var(--dark-blue);
    font-weight: bold;
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
  .top span {
    color: black;
    font-size: small;
    padding: 10px 0;
    display: flex;
  }
  .top span a {
    font-weight: 500;
    color: black;
    margin-left: 5px;
  }
  header {
    color: black;
    font-size: 30px;
    text-align: center;
    padding: 10px 0 30px 0;
  }
  .two-col {
    display: flex;
    justify-content: space-between;
    color: black;
    font-size: small;
    margin-top: 10px;
  }
  .two-col .one {
    display: flex;
    gap: 5px;
  }
  .two label a {
    text-decoration: none;
    color: black;
  }
  .two label a:hover {
    text-decoration: underline;
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
    background: darkgray;
  }
  ::-webkit-input-placeholder {
    color: black;
  }
  .input-box i {
    position: relative;
    top: -35px;
    left: 17px;
    color: black;
  }
  .submit {
    font-size: 15px;
    font-weight: 500;
    color: black;
    height: 50px;
    width: 100%;
    border: none;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    outline: none;
    background: gray;
    cursor: pointer;
    transition: .3s ease-in-out;
  }
  .submit:hover {
    background:darkgray;
    box-shadow: 1px 5px 7px 1px rgba(0, 0, 0, 0.2);
  }
  </style>
  