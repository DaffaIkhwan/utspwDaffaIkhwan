<template>
    <section class="container">
      <h1>Pendaftaran Tugas Akhir</h1>
      <form action="#" class="form">
        <div class="input-box">
          <label>Nama Mahasiswa</label>
          <input type="text" placeholder="Masukkan Nama Lengkap" required />
        </div>
        <div class="input-box">
          <label>Email Mahasiswa</label>
          <input type="text" placeholder="Masukkan Alamat Email" required />
        </div>
        <div class="input-box">
          <label>NIM Mahasiswa</label>
          <input type="text" placeholder="Masukkan NIM" required />
        </div>
        <div class="input-box">
          <label>Judul Tugas Akhir</label>
          <input type="text" placeholder="Masukkan Judul Tugas Akhir" required />
        </div>
        <div class="input-box">
          <label>Kategori Tugas Akhir  </label>
          <div class="select-box" required>
            <select>
              <option hidden>Pilih Kategori</option>
              <option>Laporan</option>
              <option>Jurnal</option>
              <option>Projek</option>
            </select>
          </div>
        </div>
        <div class="input-box">
            <label>Dosen Pembimbing 1</label>
            <div class="select-box" required>
              <select>
                <option hidden>Pilih Dosen</option>
                <option>Iwan Iskandar, S.T., M.T</option>
                <option>Reski Mai Candra, S.T., M.Sc.</option>
                <option>Muhammad Affandes, S.T., M.T.</option>
                <option>Fadhilah Syafria, S.T., M.Kom.</option>
              </select>
            </div>
          </div> 
          <div class="input-box">
            <label>Dosen Pembimbing 2</label>
            <div class="select-box" required>
              <select>
                <option hidden>Pilih Dosen</option>
                <option>Iwan Iskandar, S.T., M.T</option>
                <option>Reski Mai Candra, S.T., M.Sc.</option>
                <option>Muhammad Affandes, S.T., M.T.</option>
                <option>Fadhilah Syafria, S.T., M.Kom.</option>
              </select>
            </div>
          </div> <div class="input-box">
            <label>Dosen Penguji 1</label>
            <div class="select-box" required>
              <select>
                <option hidden>Pilih Dosen</option>
                <option>Iwan Iskandar, S.T., M.T</option>
                <option>Reski Mai Candra, S.T., M.Sc.</option>
                <option>Muhammad Affandes, S.T., M.T.</option>
                <option>Fadhilah Syafria, S.T., M.Kom.</option>
              </select>
            </div>
          </div> <div class="input-box">
            <label>Dosen Penguji 2</label>
            <div class="select-box" required>
              <select>
                <option hidden>Pilih Dosen</option>
                <option>Iwan Iskandar, S.T., M.T</option>
                <option>Reski Mai Candra, S.T., M.Sc.</option>
                <option>Muhammad Affandes, S.T., M.T.</option>
                <option>Fadhilah Syafria, S.T., M.Kom.</option>
              </select>
            </div>
          </div>
          <div class="container_cloud">
            <div class="header-section">
                <h1>Unggah Berkas</h1>
                <p>Dalam Format PDF.</p>
            </div>
            <div class="drop-section">
                <div class="col">
                    <div class="cloud-icon">
                        <img src="@/assets/cloud.png" alt="cloud">
                    </div>
                    <span>Tarik Berkas</span>
                    <span>ATAU</span>
                    <button class="file-selector">Cari Berkas</button>
                    <input type="file" class="file-selector-input" multiple>
                </div>
                <div class="col">
                    <div class="drop-here">Letak disini</div>
                </div>
            </div>
            <div class="list-section">
                <div class="list-title">Berkas </div>
                <div class="list"></div>
            </div>
        </div>

        <button>Serahkan</button>
      </form>
    </section>
  </template>
 <script>
 export default {
   mounted() {
     let sidebar = document.querySelector(".sidebar");
     let closeBtn = document.querySelector("#btn");
 
     closeBtn.addEventListener("click", () => {
       sidebar.classList.toggle("open");
       // call function
       this.changeBtn();
     });
   },
   methods: {
     changeBtn() {
       let closeBtn = document.querySelector("#btn");
       if (this.$refs.sidebar.classList.contains("open")) {
         closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
       } else {
         closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
       }
     }
   }
 };
 </script>
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
  
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
  
  .container {
    position: relative;
    max-width: 700px;
    align-items: center;
    width: 100%;
    background: #fff;
    margin-left: 300px;
    margin-top: 20px;
    padding: 25px;
    border-radius: 10px;
  }
  
  .container h2 {
    color: var(--dark-blue);
    margin-bottom: 20px;
  }
  
  .container label {
    font-size: 18px;
    font-weight: 500;
    color: var(--dark-blue);
  }
  
  .container input,
  .container select {
    width: 100%;
    align-items: center;
    padding: 10px;
    margin: 8px 0;
    border: 1px solid var(--gray);
    border-radius: 5px;
  }
  
  .container button {
    width: 100%;
    padding: 10px;
    margin-top: 20px;
    border: none;
    border-radius: 5px;
    background: var(--dark-blue);
    color: var(--white);
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
  }
  
  .container button:hover {
    background: #000;
  }
  
  .file-upload {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .file-upload input[type="file"] {
    display: none;
  }
  
  .file-upload label {
    width: 100%;
    padding: 10px;
    margin-top: 20px;
    border: none;
    border-radius: 5px;
    background: var(--dark-blue);
    color: var(--white);
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    text-align: center;
  }
  
  .file-upload label:hover {
    background: #000;
  }
  
  .file-upload .file-name {
    margin-top: 10px;
  }
  
  .select-box select {
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
    color: #707070;
    font-size: 1rem;
  }
  
  .form button {
    height: 55px;
    width: 100%;
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 30px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    background: #28a745; /* Warna hijau */
  }
  
  .form button:hover {
    background: #218838; /* Warna hijau gelap saat dihover */
  }
  
  .container_cloud {
    text-align: center;
    width: 80%;
    height: 60%;
    max-width: 900px;
    min-height: 435px;
    margin: auto;
    background-color: white;
    border-radius: 16px;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
  
  .header-section {
    padding: 25px 0px;
  }
  
  .header-section h1 {
    font-weight: 500;
    font-size: 1.7rem;
    text-transform: uppercase;
    color: #707EA0;
    margin: 0px;
    margin-bottom: 8px;
  }
  
  .header-section p {
    margin: 5px;
    font-size: 0.95rem;
    color: #707EA0;
  }
  
  .drop-section {
    min-height: 250px;
    border: 1px dashed #A8B3E3;
    background-image: linear-gradient(180deg, white, #F1F6FF);
    margin: 5px 35px 35px 35px;
    border-radius: 12px;
    position: relative;
  }
  
  .drop-section div.col:first-child {
    opacity: 1;
    visibility: visible;
    transition-duration: 0.2s;
    transform: scale(1);
    width: 200px;
    margin: auto;
  }
  
  .drop-section div.col:last-child {
    font-size: 40px;
    font-weight: 700;
    color: #c0cae1;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin: auto;
    width: 200px;
    height: 55px;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    transform: scale(0.6);
    transition-duration: 0.2s;
  }
  
  /* we will use "drag-over-effect" class in js */
  .drag-over-effect div.col:first-child {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: scale(1.1);
  }
  
  .drag-over-effect div.col:last-child {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
  }
  
  .drop-section .cloud-icon {
    margin-top: 25px;
    margin-bottom: 20px;
  }
  
  .drop-section span,
  .drop-section button {
    display: block;
    margin: auto;
    color: #707EA0;
    margin-bottom: 10px;
  }
  
  .drop-section button {
    color: white;
    background-color: #5874C6;
    border: none;
    outline: none;
    padding: 7px 20px;
    border-radius: 8px;
    margin-top: 20px;
    cursor: pointer;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
  
  .drop-section input {
    display: none;
  }
  
  .list-section {
    display: none;
    text-align: left;
    margin: 0px 35px;
    padding-bottom: 20px;
  }
  
  .list-section .list-title {
    font-size: 0.95rem;
    color: #707EA0;
  }
  
  .list-section li {
    display: flex;
    margin: 15px 0px;
    padding-top: 4px;
    padding-bottom: 2px;
    border-radius: 8px;
    transition-duration: 0.2s;
  }
  
  .list-section li:hover {
    box-shadow: #E3EAF9 0px 0px 4px 0px, #E3EAF9 0px 12px 16px 0px;
  }
  
  .list-section li .col {
    flex: .1;
  }
  
  .list-section li .col:nth-child(1) {
    flex: .15;
    text-align: center;
  }
  
  .list-section li .col:nth-child(2) {
    flex: .75;
    text-align: left;
    font-size: 0.9rem;
    color: #3e4046;
    padding: 8px 10px;
  }
  
  .list-section li .col:nth-child(2) div.name {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 250px;
    display: inline-block;
  }
  
  .list-section li .col .file-name span {
    color: #707EA0;
    float: right;
  }
  
  .list-section li .file-progress {
    width: 100%;
    height: 5px;
    margin-top: 8px;
    border-radius: 8px;
    background-color: #dee6fd;
  }
  
  .list-section li .file-progress span {
    display: block;
    width: 0%;
    height: 100%;
    border-radius: 8px;
    background-image: linear-gradient(120deg, #6b99fd, #9385ff);
    transition-duration: 0.4s;
  }
  
  .list-section li .col .file-size {
    font-size: 0.75rem;
    margin-top: 3px;
    color: #707EA0;
  }
  
  .list-section li .col svg.cross,
  .list-section li .col svg.tick {
    fill: #8694d2;
    background-color: #dee6fd;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
  
  .list-section li .col svg.tick {
    fill: #50a156;
    background-color: transparent;
  }
  
  .list-section li.complete span,
  .list-section li.complete .file-progress,
  .list-section li.complete svg.cross {
    display: none;
  }
  
  .list-section li.in-prog .file-size,
  .list-section li.in-prog svg.tick {
    display: none;
  }
  
  /*Responsive*/
  @media screen and (max-width: 500px) {
    .form .column {
      flex-wrap: wrap;
    }
    .form :where(.gender-option, .gender) {
      row-gap: 15px;
    }
  }
  
  .user-input-box:nth-child(2n) {
    justify-content: flex-end;
  }
  
  .user-input-box {
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    padding-bottom: 15px;
  }
  
  .user-input-box label {
    width: 95%;
    color: white;
    font-size: 20px;
    font-weight: 400;
    margin: 5px 0;
  }
  
  .user-input-box input {
    height: 40px;
    width: 95%;
    border-radius: 7px;
    outline: none;
    border: 1px solid grey;
    padding: 0 10px;
  }
  </style>
  