import { GetServerSidePropsContext } from 'next';
import React from 'react';
import { SellerLayout } from '../../../components/layout/SellerLayout';
import { withAuth } from '../../../withAuth';

interface IProps {
    token?: string;
}
const SellerSupportPage = ({ token }: IProps) => {
    return <SellerLayout token={token} title='Dashboard - Seller'>
        Seller Support Page
    </SellerLayout>;
};

export default SellerSupportPage;

export const getServerSideProps = withAuth((context: GetServerSidePropsContext) => {
    return {
        props: {
            //  @ts-ignore
            token: context.token,
        }
    }
})