import { GetServerSidePropsContext } from 'next';
import React from 'react';
import { AdminLayout } from '../../components/layout/AdminLayout';
import { withAuth } from '../../withAuth';

interface IProps {
    token: string
}

const AdminSupportPage = ({ token }: IProps) => {
    return <AdminLayout title='Dashboard - ADMIN' token={token}>
        <p>AdminSupportPage</p>

    </AdminLayout>;
};

export default AdminSupportPage;

export const getServerSideProps = withAuth((context: GetServerSidePropsContext) => {
    return {
        props: {
            //  @ts-ignore
            token: context.token
        }
    }
})