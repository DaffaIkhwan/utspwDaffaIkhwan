<template>
    <div class="wrapper">
      <div class="logo_details">
        <i class='bx bx-code-alt'></i>
        <div class="logo_name">
          ADAPTATIF
        </div>
      </div>
      <div class="form-box">
        <div class="login-container" id="login">
          <div class="top">
            <header>Login</header>
          </div>
          <div class="input-box">
            <input type="text" class="input-field" placeholder="Username atau Email">
            <i class="bx bx-user"></i>
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
                <router-link to="/forget-password" class="link-black">Lupa password?</router-link>
            </div>
          </div>
          <div class="input-box">
            <button class="submit" @click="redirectToIndex">Log In</button>
          </div>
          <div class="input-box">
            <button class="submit" @click="loginWithGoogle">Log In Dengan Google</button>
          </div>
          <div class="top">
            <span>Belum punya akun? <router-link to="/signup">Sign Up</router-link></span>
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

.link-black {
  color: black;
  /* Atau gunakan kode warna hitam yang sesuai dengan kebutuhan Anda */
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
  background: #f0f0f0;
  color: gray;
  height: 50px;
  margin-top: 20px;
  width: 100%;
  padding: 0 10px 0 45px;
  border: none;
  border-radius: 10px;
  outline: none;
  transition: .2s ease;
}
.input-field:hover,
.input-field:focus {
  background: rgba(255, 255, 255, 0.25);
}
::-webkit-input-placeholder {
  color: gray;
}
.input-box i {
  position: relative;

  top: -35px;
  left: 17px;
  color: gray;
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
  background: (blue);
  cursor: pointer;
  transition: .3s ease-in-out;
}
.submit:hover {
  background: rgba(blue);
  box-shadow: 1px 5px 7px 1px rgba(0, 0, 0, 0.2);
}
</style>
