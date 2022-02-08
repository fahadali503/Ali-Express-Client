import { GetServerSidePropsContext } from 'next';
import React from 'react';
import { SellerLayout } from '../../../components/layout/SellerLayout';
import { SellerAddProduct } from '../../../src/page-components/seller/products/SellerFAB';
import { withAuth } from '../../../withAuth';

interface IProps {
    token?: string;
}
const SellerProductsPage = ({ token }: IProps) => {
    return <SellerLayout token={token} title='Dashboard - Seller'>
        {/* Add Product FAB */}
        <SellerAddProduct />
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