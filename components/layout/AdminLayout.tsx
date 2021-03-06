import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserFromLocalStorage } from '../../src/utils/jwt';
import { ADMIN_LINKS } from '../../src/utils/Links';
import { RootState } from '../../store';
import { addUser, logoutUser } from '../../store/slices/userSlice';
import { AdminSidebar } from '../admin/Sidebar';
import { Spinner } from '../spinner/Spinner';

interface IProps {
    title: string;
    token?: string
}

const jwt = getUserFromLocalStorage();
export const AdminLayout: React.FC<IProps> = ({ children, title, token }) => {
    const [loading, setLoading] = useState(false);
    const user = useSelector((state: RootState) => state.user.user);
    const dispatch = useDispatch();
    const router = useRouter()

    useEffect(() => {
        setLoading(true)
        if (token) {
            if (jwt?.token) {
                dispatch(addUser(jwt))
            }
            if (user?.role !== 'admin') {
                router.push({ pathname: ADMIN_LINKS.LOGIN, query: { redirect: router.asPath } })
            }
        } else {
            router.push({ pathname: ADMIN_LINKS.LOGIN, query: { redirect: router.asPath } })
            dispatch(logoutUser())
        }
        setLoading(false);
    }, [dispatch, router, token])


    if (loading) {
        return <Spinner />
    }

    if (!user) {
        return null;
    }

    else {
        return <div>
            <Head>
                <title>{title}</title>
            </Head>
            <div>
                <div className='grid grid-cols-4 gap-3'>
                    <div><AdminSidebar /></div>
                    <div className='col-span-3'>
                        <div className='h-28'>
                            {/* Header */}
                        </div>
                        <div className='block'>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    };
}