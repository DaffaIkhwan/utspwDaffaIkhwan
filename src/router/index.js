import { createRouter, createWebHistory } from 'vue-router';
import LogIn from '@/components/LogIn.vue';
import DaftarDosen from '@/components/DaftarDosen.vue';
import ForgetPassword from '@/components/ForgetPassword.vue';
import HomeBeranda from '@/components/HomeBeranda.vue';
import PendaftaranTa from '@/components/PendaftaranTa.vue';
import SettingPengaturan from '@/components/SettingPengaturan.vue';
import SignUp from '@/components/SignUp.vue';
import LayOut from '@/components/LayOut.vue';

const routes = [
{
    path: '/login',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/forget-password',
    name: 'ForgetPassword',
    component: ForgetPassword
  },
  
  {
    path: '/',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/layout',
    name: 'LayOut',
    component: LayOut,
    children: [
      {
        path: '/home-beranda',
        name: 'HomeBeranda',
        component: HomeBeranda
      },
      {
        path: '/daftar-dosen',
        name: 'DaftarDosen',
        component: DaftarDosen
      },
      {
        path: '/pendaftaran-ta',
        name: 'PendaftaranTa',
        component: PendaftaranTa
      },
      {
        path: '/setting-pengaturan',
        name: 'SettingPengaturan',
        component: SettingPengaturan
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
