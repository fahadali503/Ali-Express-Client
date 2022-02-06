import { GetServerSidePropsContext } from 'next';
import React, { useEffect, useState } from 'react';
import { AdminLayout } from '../../../components/layout/AdminLayout';
import { withAuth } from '../../../withAuth';
import { getAllRootCategoriesFromTheServer } from '../../../src/api/common/categories.api';
import { IRootCategory } from '../../../src/response-types/categories-response.types';
import { useQuery } from 'react-query';
import { ROOT_CATEGORIES_END_POINT } from '../../../src/api';
import { AxiosError, AxiosResponse } from 'axios';
import { Spinner } from '../../../components/spinner/Spinner';
import { SuccessButton } from '../../../components/buttons/SuccessButton';
import { useRouter } from 'next/router';
import { ADMIN_LINKS } from '../../../src/utils/Links';


interface IProps {
    token: string
}

const AdminCategoryPage = ({ token }: IProps) => {
    const router = useRouter()
    const { data: rootCategories, error: rootCategoriesError, isLoading: isRootCategoriesLoading } = useQuery<any, AxiosError, AxiosResponse<IRootCategory[]>>(ROOT_CATEGORIES_END_POINT.GET_ALL_ROOT_CATEGORIES, getAllRootCategoriesFromTheServer)

    if (isRootCategoriesLoading) {
        return <Spinner className='h-full w-full' />
    }

    return <AdminLayout title='Dashboard - ADMIN' token={token}>
        <div className='w-full'>
            <SuccessButton onClick={() => router.push(ADMIN_LINKS.ADD_ROOT_CATEGORY)} text='Add Root Category' className='right-10 absolute' />
            <div className='w-1/4'>
                <div className='relative'>
                </div>
            </div>
        </div>
    </AdminLayout>;
};

export default AdminCategoryPage;

export const getServerSideProps = withAuth((context: GetServerSidePropsContext) => {
    return {
        props: {
            //  @ts-ignore
            token: context.token
        }
    }
})