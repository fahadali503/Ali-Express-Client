import { AxiosError, AxiosResponse } from 'axios';
import { GetServerSidePropsContext } from 'next';
import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { AdminLayout } from '../../../components/layout/AdminLayout';
import { Spinner } from '../../../components/spinner/Spinner';
import { CATEGORIES_END_POINT, ROOT_CATEGORIES_END_POINT } from '../../../src/api';
import { addCategoryToServer, addRootCategoryToServer, addSubCategoryToServer } from '../../../src/api/admin/catgories.api';
import { getAllCategoriesFromTheServer, getAllRootCategoriesFromTheServer } from '../../../src/api/common/categories.api';
import { AdminAddCategory } from '../../../src/page-components/admin/category-page/categories/AddCategory';
import { AdminAddRootCategory } from '../../../src/page-components/admin/category-page/root-categories/AddRootCategory';
import { AdminAddSubCategories } from '../../../src/page-components/admin/category-page/sub-categories/AddSubCategories';
import { ICategory, ICategoryResponse, IRootCategory, ISubCategory } from '../../../src/response-types/categories-response.types';
import { withAuth } from '../../../withAuth';

interface IProps {
    token: string
}

const AdminAddRootCategoryPage = ({ token }: IProps) => {
    const { data: rootCategories, error: rootCategoriesError, isLoading: isRootCategoriesLoading } = useQuery<any, AxiosError, AxiosResponse<IRootCategory[]>>(ROOT_CATEGORIES_END_POINT.GET_ALL_ROOT_CATEGORIES, getAllRootCategoriesFromTheServer)

    const { data: categories, error: categoriesError, isLoading: isCategoriesLoading } = useQuery<any, AxiosError, AxiosResponse<ICategory[]>>(CATEGORIES_END_POINT.GET_ALL_CATEGORIES, getAllCategoriesFromTheServer)

    if (isCategoriesLoading || isRootCategoriesLoading) {
        return <Spinner />
    }

    const handleAddRootCategory = async (value: string) => {
        const response = await addRootCategoryToServer(value, token);
        if (!response.ok) {
            return toast.error(response.originalError.response?.data.message);
        }
        const data = response.data as ICategoryResponse<IRootCategory>
        toast.success(data.message)
    }


    const handleAddCategory = async (title: string, rootCategory: string) => {
        const response = await addCategoryToServer(title, rootCategory, token)
        if (!response.ok) {
            return toast.error(response.originalError.response?.data.message);
        }
        const data = response.data as ICategoryResponse<ICategory>
        toast.success(data.message)

    }

    const handleAddSubCategory = async (title: string, rootCategoryId: string, categoryId: string) => {
        const response = await addSubCategoryToServer(title, rootCategoryId, categoryId, token)
        if (!response.ok) {
            return toast.error(response.originalError.response?.data.message);
        }
        const data = response.data as ICategoryResponse<ISubCategory>
        toast.success(data.message)

    }

    return <AdminLayout title='Dashboard - ADMIN' token={token}>
        {/* Root Category */}
        <AdminAddRootCategory handleAddRootCategory={handleAddRootCategory} />
        {/* Category */}
        <AdminAddCategory handleAddCategory={handleAddCategory} rootCategories={rootCategories?.data} />
        {/* Sub Category */}
        <AdminAddSubCategories categories={categories?.data} rootCategories={rootCategories?.data} handleAddSubCategory={handleAddSubCategory} />

    </AdminLayout>;
};

export default AdminAddRootCategoryPage;

export const getServerSideProps = withAuth((context: GetServerSidePropsContext) => {
    return {
        props: {
            //  @ts-ignore
            token: context.token
        }
    }
})