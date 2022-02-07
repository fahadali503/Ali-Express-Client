import { GetServerSidePropsContext } from 'next';
import React from 'react';
import { SellerLayout } from '../../components/layout/SellerLayout';
import { withAuth } from '../../withAuth';

interface IProps {
    token?: string;
}
const SellerDashboardPage = ({ token }: IProps) => {
    return <SellerLayout token={token} title='Dashboard - Seller'>
        Seller Dashboard
    </SellerLayout>;
};

export default SellerDashboardPage;

export const getServerSideProps = withAuth((context: GetServerSidePropsContext) => {
    return {
        props: {
            //  @ts-ignore
            token: context.token,
        }
    }
})