<template>
    <div class="wrapper">
     <form action="#" class="form">
       <div class="details">
         <div class="recent_project">
           <div class="card_header">
             <h2>Data Dosen</h2>
             <table>
               <thead>
                 <tr>
                   <td>Foto</td>
                   <td>Nama Dosen</td>
                   <td>NIDN</td>
                   <td>Gender</td>
                   <td>Jabatan</td>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <td>
                     <div class="info_img">
                       <img src="@/assets/iwann.jpg" alt="">
                     </div>  
                   </td>
                   <td>Iwan Iskandar, S.T., M.T</td>
                   <td>5865846</td>
                   <td>
                     <span class="badge bg_info">
                       Laki-laki
                     </span>
                   </td>
                   <td>Dosen Pembimbing 1</td>   
                 </tr>
                 <tr>
                   <td>
                     <div class="info_img">
                       <img src="@/assets/reskii.jpg" alt="">
                     </div>  
                   </td>
                   <td>Reski Mai Candra, S.T., M.Sc.</td>
                   <td>5865846</td>
                   <td>
                     <span class="badge bg_info">
                       Laki-laki
                     </span>
                   </td>
                   <td>Dosen Pembimbing 2 </td>   
                 </tr>
                 <tr>
                   <td>
                     <div class="info_img">
                       <img src="@/assets/affandess.jpg" alt="">
                     </div>  
                   </td>
                   <td>Muhammad Affandes, S.T., M.T.</td>
                   <td>5865846</td>
                   <td>
                     <span class="badge bg_info">
                       Laki-laki
                     </span>
                   </td>
                   <td>Dosen Penguji 1</td>   
                 </tr>
                 <tr>
                   <td>
                     <div class="info_img">
                       <img src="@/assets/fadhilahh.jpg" alt="">
                     </div>  
                   </td>
                   <td>Fadhilah Syafria, S.T., M.Kom.</td>
                   <td>5865846</td>
                   <td>
                     <span class="badge bg_danger">
                       Perempuan
                     </span>
                   </td>
                   <td>Dosen Penguji 2</td>   
                 </tr>
               </tbody>
             </table>
           </div>
         </div>
       </div>
     </form>
   </div>
 </template>
 
 <script>
 export default {
   data() {
     return {
       isOpen: false,
       activeItem: 0,
       menuItems: [
         { label: 'Home', icon: 'bx bx-home' },
         { label: 'Profile', icon: 'bx bx-user' },
         { label: 'Messages', icon: 'bx bx-message' },
         { label: 'Settings', icon: 'bx bx-cog' }
       ]
     };
   },
   methods: {
     toggleSidebar() {
       this.isOpen = !this.isOpen;
     }
   }
 };
 </script>


 
 <style scoped>
 /* CSS content goes here */
 
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

.card-view {
   max-width: 200px; /* Mengurangi lebar maksimum card view */
   max-height: 100px; /* Mengurangi tinggi maksimum card view */
   padding: 10px; /* Menambahkan padding di dalam card view */
   border-radius: 10px; /* Mengurangi radius sudut card view */
   box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1); /* Mengurangi efek bayangan */
}


.accept_button {
   width: 100%;
   background-color: #4CAF50;
   color: white;
   padding: 14px 20px;
   margin: 8px 0;
   border: none;
   border-radius: 4px;
   
 }
 
 .accept_button:hover {
   background-color: #45a049;
 }

.wrapper {
   display: flex;
   justify-content: center;
   align-items: center;
   margin-left: 150px
 }
 .container {
 position: relative;
 width: 100%;
 background: #fff;
 margin-left: 200px;
 margin-top: 5px;
 padding: 25px;
 border-radius: 8px;
 box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
 }
 .container header {
 font-size: 1.5rem;
 color: #333;
 font-weight: 500;
 text-align: center
 }
 .image_container {
   margin-left: 350px;
   margin-top: 20px;
   margin-bottom: 20px;
 }
 
 .input_container {
   margin-bottom: 20px; /* Atur jarak antara setiap input */
   margin-left: 5px;
 }


 
 .logo_details {
   display: flex;
   align-items: center;
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
 
 .input_container {
   display: flex;
   align-items: center;
   margin-top: 20px;
 }
 
 .input_container label {
   margin-right: 20px;
 }
 


 .profile_image {
   width: 300px;
   align-items: center;
 }
 
 input[type="text"] {
   height: 40px;
   width: 800px;
   padding: 10px;
   font-size: 16px;
   border: 1px solid #ccc;
   border-radius: 5px;
   outline: none;
 }
 input[type="text"]::placeholder {
   
   color: #000; /* Mengatur warna teks placeholder menjadi hitam */
   font-size: 16px;
 }


 
 .input_container label {
   font-size: 16px; /* Sesuaikan dengan ukuran yang diinginkan */
 }

 
 

 .card-boxes {
  position: relative;
  width: 100%;
  padding: 1rem 1.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
}

.card-boxes .box {
  position: relative;
  background: var(--white);
  padding: 10px;
  justify-content: space-between;
  border-radius: 20px;
  box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
  cursor: pointer;
}

.card-boxes .box .numbers {
  position: relative;
  font-size: 2.5rem;
  font-weight: 500;
  color: var(--dark-blue);
}

.card-boxes .box .box_topic {
  position: relative;
  margin-top: 5px;
  font-size: 1.1em;
  color: var(--gray);
}

.card-boxes .box i {
  position: relative;
  font-size: 3.5em;
  color: var(--dark-blue);
}
.details {
 position: relative;
 width: 100%;
 padding: 20px;
 display: grid;
 grid-template-columns: 3fr ; /* Sesuaikan lebar kolom dengan kebutuhan */
 grid-gap: 20px;
}

.details .recent_project {
 position: relative;
 display: grid;
 min-height: 0px;
 padding: 20px;
 background: var(--white);
 border-radius: 20px;
 box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
 overflow-y: auto;
 white-space: nowrap;
}

.details .recent_project table {
 width: 100%;
 max-width: 100%; /* Sesuaikan dengan lebar maksimum yang diinginkan */
 padding-right: 15px;
 margin-top: 10px;
 border-collapse: collapse;
}

.details .recent_project table tr {
 border-bottom: 1px solid #f0f0f0;
}

.details .recent_project table tbody tr:last-child {
 border-bottom: none;
}

.details .recent_project table tr td {
 padding: 1rem 1rem;
}

.details .recent_project table tbody tr td {
 position: relative;
 font-size: .938rem;
 font-weight: 500;
 line-height: 1.2;
 color: var(--dark-blue);
}

.details .recent_project table tbody tr td:nth-child(2) {
 padding-left: 2rem;
}

.details .recent_project table tbody tr td:last-child {
 padding-left: 2rem;
}

.details .badge {
 position: relative;
 display: inline-block;
 padding: 0.38em 0.65em;
 font-size: 0.75em;
 font-weight: 700;
 line-height: 1;
 color: var(--white);
 border-radius: 0.375rem;
}

.bg_worning {
 background: #ffc107;
}
.bg_danger{
 background: #cd3545;
}
.bg_info{
 background: #0dcaf0;
}
.bg_seccuss{
 background: #198754;
}

.img_group {
 position: relative;
 display: inline-block;
 margin-left: -1.2rem;
}

.img_group img,
.img_group .initial {
 position: relative;
 width: 2rem;
 height: 2rem;
 border-radius: 50%;
 border: 2px solid #fff;
 object-fit: cover;
}

.img_group:hover {
 z-index: 2;
}

.initial {
 position: relative;
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 text-transform: uppercase;
 pointer-events: none;
 background: #624bff;
 color: var(--white);
}

.details .recent_customers {
 position: relative;
}

.details .recent_customers table tr {
 height: 80px;
}

.details .recent_customers table tr td h4 {
 position: relative;
 font-size: 16px;
 font-weight: 500;
 line-height: 1.2em;
 color: var(--dark-blue);
}


.details .recent_customers .info_img img {
 position: relative;
 width: 50px;
 height: 50px;
 border-radius: 50%;
}

/* responsive */

@media screen and (max-width: 991px) {
 .sidebar,
 .sidebar li.login {
   left: -250px;
 }


 .sidebar.open,
 .sidebar.open li.login {
   width: 250px;
   left: 0;
 }

 .sidebar.open ~ .home_section {
   left: 250px;
 }

 .sidebar.open .logo_name,
 .sidebar.open .links_name {
   opacity: 1;
 }

 .card-boxes {
   grid-template-columns: repeat(2, 1fr);
 }
 .details {
   grid-template-columns: repeat(1, 1fr);
 }

 .details .recent_customers table {
   width: 50%;
   margin-top: 30px;
 }
}

@media screen and (max-width: 1200px) {
 .card-boxes {
   grid-template-columns: repeat(2, 1fr);
 }
}

@media screen and (max-width: 600px) {
 .card-boxes {
   width: 100%;
   grid-template-columns: repeat(1, 1fr);
 }
 .details {
   grid-template-columns: repeat(1, 1fr);
 }

 .details .recent_customers table {
   width: 100%;
   margin-top: 30px;
 }

 .home_section .topbar .search_wrapper {
   display: none;
 }

 .sidebar.open,
 .sidebar.open li.login {
   width: 100%;
   left: 0;
 }

 .sidebar.open ~ .home_section {
   left: 0;
 }
 .sidebar.open ~ .home_section .topbar .toggle {
   z-index: 1001;
   color: var(--white);
   position: absolute;
   width: 110%;
   display: flex;
   justify-content: flex-end;
 }

 
}
 </style>
 