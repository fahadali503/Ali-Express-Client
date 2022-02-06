import { AxiosError, AxiosResponse } from 'axios';
import { GetServerSidePropsContext } from 'next';
import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { AdminLayout } from '../../../components/layout/AdminLayout';
import { Spinner } from '../../../components/spinner/Spinner';
import { CATEGORIES_END_POINT, ROOT_CATEGORIES_END_POINT } from '../../../src/api';
import { addCategoryToServer, addRootCategoryToServer, addSubCategoryToServer } from '../../../src/api/admin/catgories.api';
import { getAllCategoriesFromTheServer, getAllRootCategoriesFromTheServer } from '../../../src/api/common/categories.api';
import { AdminAddCategory } from '../../../src/page-components/admin/category-page/categories/AddCategory';
import { AdminAddRootCategory } from '../../../src/page-components/admin/category-page/root-categories/AddRootCategory';
import { AdminAddSubCategories } from '../../../src/page-components/admin/category-page/sub-categories/AddSubCategories';
import { ICategory, ICategoryResponse, IRootCategory, ISubCategory } from '../../../src/response-types/categories-response.types';
import { RootState } from '../../../store';
import { editRootCategory } from '../../../store/slices/categoriesSlice';
import { withAuth } from '../../../withAuth';

interface IProps {
    token: string
}

const AdminAddRootCategoryPage = ({ token }: IProps) => {
    const rootCategories = useSelector((state: RootState) => state.categories.rootCategories);
    const categories = useSelector((state: RootState) => state.categories.categories);
    const dispatch = useDispatch();

    const handleAddRootCategory = async (value: string) => {
        const response = await addRootCategoryToServer(value, token);
        if (!response.ok) {
            return toast.error(response.originalError.response?.data.message);
        }
        const data = response.data as ICategoryResponse<IRootCategory>;
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
        <AdminAddCategory handleAddCategory={handleAddCategory} rootCategories={rootCategories} />
        {/* Sub Category */}
        <AdminAddSubCategories categories={categories} rootCategories={rootCategories} handleAddSubCategory={handleAddSubCategory} />

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