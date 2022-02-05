import { GetServerSidePropsContext } from 'next';
import React from 'react';
import { AdminLayout } from '../../components/layout/AdminLayout';
import { withAuth } from '../../withAuth';

interface IProps {
    token: string
}

const AdminProductsPage = ({ token }: IProps) => {
    return <AdminLayout title='Dashboard - ADMIN' token={token}>
        <p>AdminProductsPage</p>

    </AdminLayout>;
};

export default AdminProductsPage;

export const getServerSideProps = withAuth((context: GetServerSidePropsContext) => {
    return {
        props: {
            //  @ts-ignore
            token: context.token
        }
    }
})