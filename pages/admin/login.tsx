import { useRouter } from 'next/router';
import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { MainLayout } from '../../components/layout';
import { AdminLogin } from '../../src/page-components/admin/Login.admin';
import { IAuthResponse } from '../../src/response-types/auth-response.types';
import { addUserToLocalStorage } from '../../src/utils/jwt';
import { addUser } from '../../store/slices/userSlice';
import axios, { AxiosError } from 'axios'
import { ADMIN_LINKS } from '../../src/utils/Links';

const AdminLoginPage = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const redirect = router.query.redirect as string;
    const handleSubmit = async (values: { email: string, password: string }) => {
        try {
            const response = await axios.post('/api/login', values);
            const data = response.data as IAuthResponse;
            addUserToLocalStorage(data)
            dispatch(addUser(data))
            if (redirect) return router.push(decodeURIComponent(redirect))
            router.push(ADMIN_LINKS.DASHBOARD);
        } catch (error) {
            const err = error as AxiosError;
            toast.error(err.response?.data.message);
        }

    }
    return <MainLayout title='Admin Login'>
        <AdminLogin handleSubmit={handleSubmit} />
    </MainLayout>;
};

export default AdminLoginPage;
