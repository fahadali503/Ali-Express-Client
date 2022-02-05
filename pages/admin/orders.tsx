import { GetServerSidePropsContext } from 'next';
import React from 'react';
import { AdminLayout } from '../../components/layout/AdminLayout';
import { withAuth } from '../../withAuth';

interface IProps {
    token: string
}

const AdminOrdersPage = ({ token }: IProps) => {
    return <AdminLayout title='Dashboard - ADMIN' token={token}>
        <p>AdminOrdersPage</p>

    </AdminLayout>;
};

export default AdminOrdersPage;

export const getServerSideProps = withAuth((context: GetServerSidePropsContext) => {
    return {
        props: {
            //  @ts-ignore
            token: context.token
        }
    }
})