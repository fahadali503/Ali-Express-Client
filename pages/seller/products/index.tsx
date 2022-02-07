import { GetServerSidePropsContext } from 'next';
import React from 'react';
import { SellerLayout } from '../../../components/layout/SellerLayout';
import { withAuth } from '../../../withAuth';

interface IProps {
    token?: string;
}
const SellerProductsPage = ({ token }: IProps) => {
    return <SellerLayout token={token} title='Dashboard - Seller'>
        Seller Products Page
    </SellerLayout>;
};

export default SellerProductsPage;

export const getServerSideProps = withAuth((context: GetServerSidePropsContext) => {
    return {
        props: {
            //  @ts-ignore
            token: context.token,
        }
    }
})