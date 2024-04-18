<template>
    <div class="container light-style flex-grow-1 container-p-y">
      <div class="card overflow-hidden">
        <div class="col-md-9">
          <div class="tab-content">
            <div class="tab-pane fade active show" id="account-general">
              <div class="card-body media align-items-center">
                <img src="@\assets\daffa.jpg" alt="Profile Picture" class="d-block ui-w-80">
                <div class="media-body ml-4">
                  <label class="btn btn-outline-primary">
                    Upload new photo
                    <input type="file" class="account-settings-fileinput">
                  </label>
                  <button type="button" class="btn btn-default md-btn-flat ml-2">Reset</button>
                  <div class="text-light small mt-1">Allowed JPG, GIF or PNG. Max size of 800K</div>
                </div>
              </div>
              <hr class="border-light m-0">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="form-label">Nama Awal</label>
                      <input type="text" class="form-control mb-1" value="Daffa">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="form-label">Nama Akhir</label>
                      <input type="text" class="form-control" value="Ikhwan">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label class="form-label">E-mail</label>
                      <input type="text" class="form-control mb-1" value="dapaikhwan@gmail.com">
                      <div class="alert alert-warning mt-3">
                        Email anda belum terverifikasi. Periksa kotak masuk.<br>
                        <a href="javascript:void(0)">Kirim ulang konfirmasi</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label class="form-label">Password</label>
                      <input type="password" class="form-control" value="">
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-left mt-3" style="margin: 50px;">
                <a href="index.html" class="btn btn-primary btn-block mb-2" style="max-width: 200px; background-color: green;">Simpan</a>
                <button type="button" class="btn btn-default btn-block" style="max-width: 200px;color: white; background-color: red;">Batal</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    // Script section for component logic
  };
  </script>
  
  <style>
  @import url('https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/css/bootstrap.min.css');

  body {
    background: #f5f5f5;
    margin-top: 20px;
  }
  
  .ui-w-80 {
    width : 80px !important;
    height: auto;
  }
  
  .btn-default {
    border-color: rgba(24, 28, 33, 0.1);
    background  : rgba(0, 0, 0, 0);
    color       : #4E5155;
  }
  
  label.btn {
    margin-bottom: 0;
  }
  
  .btn-outline-primary {
    border-color: #26B4FF;
    background  : transparent;
    color       : #26B4FF;
  }
  
  .btn {
    cursor: pointer;
  }
  
  .text-light {
    color: #babbbc !important;
  }
  
  .btn-facebook {
    border-color: rgba(0, 0, 0, 0);
    background  : #3B5998;
    color       : #fff;
  }
  
  .btn-instagram {
    border-color: rgba(0, 0, 0, 0);
    background  : #000;
    color       : #fff;
  }
  
  .card {
    background-clip: padding-box;
    box-shadow     : 0 1px 4px rgba(24, 28, 33, 0.012);
    margin-left: 100px;
  }
  
  .row-bordered {
    overflow: hidden;
  }
  
  .account-settings-fileinput {
    position  : absolute;
    visibility: hidden;
    width     : 1px;
    height    : 1px;
    opacity   : 0;
  }
  
  .account-settings-links .list-group-item.active {
    font-weight: bold !important;
  }
  
  html:not(.dark-style) .account-settings-links .list-group-item.active {
    background: transparent !important;
  }
  
  .account-settings-multiselect~.select2-container {
    width: 100% !important;
  }
  
  .light-style .account-settings-links .list-group-item {
    padding     : 0.85rem 1.5rem;
    border-color: rgba(24, 28, 33, 0.03) !important;
  }
  
  .light-style .account-settings-links .list-group-item.active {
    color: #4e5155 !important;
  }
  
  .material-style .account-settings-links .list-group-item {
    padding     : 0.85rem 1.5rem;
    border-color: rgba(24, 28, 33, 0.03) !important;
  }
  
  .material-style .account-settings-links .list-group-item.active {
    color: #4e5155 !important;
  }
  
  .dark-style .account-settings-links .list-group-item {
    padding     : 0.85rem 1.5rem;
    border-color: rgba(255, 255, 255, 0.03) !important;
  }
  
  .dark-style .account-settings-links .list-group-item.active {
    color: #fff !important;
  }
  
  .light-style .account-settings-links .list-group-item.active {
    color: #4E5155 !important;
  }
  
  .light-style .account-settings-links .list-group-item {
    padding     : 0.85rem 1.5rem;
    border-color: rgba(24, 28, 33, 0.03) !important;
  }
  
  /* Additional CSS to move the Reset button below the Upload new photo button */
  .media-body .btn-default {
    margin-right: 50px;
  }
  
  .move-right {
    margin-left:100px; /* Move the container to the right */
    margin-right: 0; /* Reset any right margin */
  }
  
  </style>