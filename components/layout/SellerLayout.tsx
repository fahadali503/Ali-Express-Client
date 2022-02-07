import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ROLES } from '../../src/api/auth/register.api';
import { getUserFromLocalStorage } from '../../src/utils/jwt';
import { SELLER_LINKS } from '../../src/utils/Links';
import { RootState } from '../../store';
import { addUser, logoutUser } from '../../store/slices/userSlice';
import { SellerSidebar } from '../seller/Navbar';
import { Spinner } from '../spinner/Spinner';

interface IProps {
    title: string;
    token?: string
}

const jwt = getUserFromLocalStorage();
export const SellerLayout: React.FC<IProps> = ({ children, title, token }) => {
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
            else if (user?.role !== ROLES.SELLER) {
                router.push({ pathname: SELLER_LINKS.LOGIN, query: { redirect: router.asPath } })
            }
        } else {
            router.push({ pathname: SELLER_LINKS.LOGIN, query: { redirect: router.asPath } })
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
                    <div>
                        <SellerSidebar />
                    </div>
                    <div className='col-span-3'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    };
}