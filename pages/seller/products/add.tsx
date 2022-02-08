import { GetServerSidePropsContext } from 'next';
import React from 'react';
import { SellerLayout } from '../../../components/layout/SellerLayout';
import { PreviewCreateProduct } from '../../../src/page-components/seller/products/PreviewCreateProduct';
import { SellerAddProductForm } from '../../../src/page-components/seller/products/SellerAddProductForm';
import { withAuth } from '../../../withAuth';

interface IProps {
    token?: string;
}
const SellerAddProductPage = ({ token }: IProps) => {

    const handleCreateNewProduct = async (formData: FormData) => {

    }

    return <SellerLayout token={token} title='Dashboard - Seller'>
        <div className='h-full mt-5'>
            <div className='text-center text-4xl tracking-widest font-bold text-red-400'>Add New Product</div>
            <hr className='w-1/2 mx-auto' />
            <div className='grid mt-10 grid-cols-6 gap-4 h-auto w-full'>
                <div className="col-span-4">
                    <SellerAddProductForm handleCreateNewProduct={handleCreateNewProduct} />
                </div>
                <div className="col-span-2">
                    <PreviewCreateProduct />
                </div>
            </div>
        </div>
    </SellerLayout>;
};

export default SellerAddProductPage;

export const getServerSideProps = withAuth((context: GetServerSidePropsContext) => {
    return {
        props: {
            //  @ts-ignore
            token: context.token,
        }
    }
})