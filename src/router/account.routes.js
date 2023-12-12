import { Layout, Login, Register, QrcodeReader } from '@/views/account';

export default {
    path: '/account',
    component: Layout,
    children: [
        { path: '', redirect: 'login' },
        { path: 'login', component: Login },
        { path: 'register', component: Register },
        { path: 'reader', component: QrcodeReader }
    ]
};
