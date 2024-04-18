<template>
    <div class="sidebar" :class="{ open: isSidebarOpen }">
      <div class="logo_details">
        <i class='bx bx-code-alt'></i>
        <div class="logo_name">
          ADAPTATIF
        </div>
      </div>
      <ul>
        <li>
          <router-link to="/home-beranda" :class="{ 'active': isActive('/home-beranda') }">
            <i class='bx bx-home-alt'></i>
            <span class="links_name">
              Beranda
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/pendaftaran-ta" :class="{ 'active': isActive('/pendaftaran-ta') }">
            <i class='bx bx-add-to-queue'></i>
            <span class="links_name">
              Pendaftaran
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/daftar-dosen" :class="{ 'active': isActive('/daftar-dosen') }">
            <i class='bx bx-user'></i>
            <span class="links_name">
              Dosen
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/setting-pengaturan" :class="{ 'active': isActive('/setting-pengaturan') }">
            <i class='bx bx-cog'></i>
            <span class="links_name">
              Setting
            </span>
          </router-link>
        </li>
        <li class="login">
          <a href="/login" >
            <span class="links_name login_out">
              Log Out
            </span>
            <i class='bx bx-log-out' id="log_out"></i>
          </a>
        </li>
      </ul>
    </div>
    <section class="home_section">
      <div class="topbar">
        <div class="toggle" @click="toggleSidebar">
          <i class='bx bx-menu' id="btn"></i>
        </div>
      </div>
    </section>
  </template>
  
  <script>
export default {
  data() {
    return {
      isSidebarOpen: false
    };
  },
  mounted() {
    // Panggil fungsi untuk mengatur event pada saat komponen dimuat
    this.setupSidebar();
  },
  methods: {
    isActive(route) {
      return this.$route.path === route;
    },
    setupSidebar() {
      // Mendapatkan referensi sidebar dan tombol close
      const sidebar = document.querySelector(".sidebar");
      const closeBtn = document.querySelector("#btn");

      // Menambahkan event listener untuk klik pada tombol close
      closeBtn.addEventListener("click", () => {
        // Toggle class "open" pada sidebar
        sidebar.classList.toggle("open");
        // Panggil fungsi untuk mengubah ikon tombol
        this.changeBtn();
      });
    },
    changeBtn() {
      // Mendapatkan referensi tombol close
      const closeBtn = document.querySelector("#btn");
      // Mendapatkan referensi sidebar
      const sidebar = document.querySelector(".sidebar");

      // Periksa apakah sidebar dan closeBtn tidak null
      if (sidebar && closeBtn) {
        // Periksa apakah sidebar memiliki class "open"
        if (sidebar.classList.contains("open")) {
          // Jika iya, ganti ikon tombol menjadi "bx-menu-alt-right"
          closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
        } else {
          // Jika tidak, ganti ikon tombol menjadi "bx-menu"
          closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
        }
      }
    }
  }
};

</script>

  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
  @import url('https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css');
  :root {
    --dark-blue: #11101D;
    --white-blue: #1D1D31;
    --white: #fff;
    --gray: #8390a2;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  
  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    width: 250px;
    height: 100%;
    padding-left: 20px;
    background: white; /* Updated */
    transition: all 0.5s ease;
    z-index: 99;
  }
  
  .sidebar .logo_details {
    position: relative;
    height: 60px;
    display: flex;
    align-items: center;
  }
  
  .sidebar li {
    position: relative;
    margin: 8px 0;
    list-style: none; 
  }
  
  .sidebar i {
    position: relative;
    height: 60px;
    min-width: 50px;
    font-size: 28px;
    line-height: 60px;
    text-align: center;
    color: black;
  }
  
  .sidebar .logo_details .logo_name {
    font-size: 20px;
    font-weight: 600;
    color: black; /* Updated */
    transition: all 0.5s ease;
  }
  
  .sidebar ul li a i {
    position: relative;
    height: 50px;
    font-size: 18px;
    line-height: 50px;
  }
  
  .sidebar ul li a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    border-radius: 30px 0px 0px 30px;
    transition: all 0.5s ease;
  }
  
  .sidebar ul li a .links_name {
    font-size: 15px;
    font-weight: 400;
    color:black; /* Updated */
    transition: 0.4s;
  }
  
  .sidebar li.login {
    position: fixed;
    width: 250px;
    height: 60px;
    left: 0;
    bottom: -8px;
    padding: 20px 20px;
    background: white; /* Updated */
    transition: all 0.5s ease;
  }
  
  .sidebar .login #log_out {
    position: absolute;
    height: 60px;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    line-height: 60px;
    transition: all 0.5s ease;
  }
  
  .sidebar li a.active {
    background: gray;
  }
  
  .sidebar li a:hover {
    background: gray;
  }
  
  .sidebar li a.active .links_name,
  .sidebar li a.active i {
    color: black;
  }
  
  .sidebar li a:hover .links_name,
  .sidebar li a:hover i {
    color: black;
  }
  
  .sidebar li.login a:hover {
    background: gray;
  }
  
  .sidebar li.login a:hover .links_name,
  .sidebar li.login a:hover i {
    color: black;
  }
  
  .sidebar.open,
  .sidebar.open li.login {
    width: 78px;
  }
  
  .sidebar.open .logo_name,
  .sidebar.open .links_name {
    opacity: 0;
  }
  
  .sidebar.open .logo_details #btn {
    text-align: right;
  }
  
  .sidebar.open ~ .home_section {
    width: calc(100% - 78px);
    left: 78px;
  }
  
  /* End Sidebar */
  
  .home_section {
    position: relative;
    margin-top: -16px;
    left: 250px;
    top: 0;
    background: white;
    transition: all 0.5s ease;
  }
  
  .home_section .topbar {
    position: relative;
    width: 100%;
    margin-left: -30px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    background: var(--white-blue); /* Updated */
  }
  
  .home_section .topbar .toggle {
    position: relative;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    cursor: pointer;
  }
  
  .home_section .topbar .search_wrapper {
    position: relative;
    height: 50px;
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 30px;
    overflow-x: hidden;
  }
  
  .home_section .topbar .search_wrapper input {
    position: relative;
    height: 100%;
    padding: 0.5rem;
    border: none;
    outline: none;
  }
  
  .home_section .topbar .search_wrapper span {
    display: inline-block;
    padding: 0rem 1rem;
    transform: translateY(20%);
    font-size: 1.5rem;
  }
  
  .home_section .user_wrapper img {
    width: 40px;
    height: 40px;
    margin-right: 0.5rem;
    border-radius: 50%;
  }
  </style>
  