import { AxiosError, AxiosResponse } from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { CATEGORIES_END_POINT, ROOT_CATEGORIES_END_POINT, SUB_CATEGORIES_END_POINT } from '../../src/api';
import { getAllCategoriesFromTheServer, getAllRootCategoriesFromTheServer, getAllSubCategoriesFromTheServer } from '../../src/api/common/categories.api';
import { ICategory, IRootCategory, ISubCategory } from '../../src/response-types/categories-response.types';
import { addCategories, addRootCategories, addSubCategories } from '../../store/slices/categoriesSlice';

export const AppLayout: React.FC = ({ children }) => {
    const dispatch = useDispatch()
    const { data: rootCategories, error: rootCategoriesError, isLoading: isRootCategoriesLoading } = useQuery<any, AxiosError, AxiosResponse<IRootCategory[]>>(ROOT_CATEGORIES_END_POINT.GET_ALL_ROOT_CATEGORIES, getAllRootCategoriesFromTheServer)

    const { data: categories, error: categoriesError, isLoading: isCategoriesLoading } = useQuery<any, AxiosError, AxiosResponse<ICategory[]>>(CATEGORIES_END_POINT.GET_ALL_CATEGORIES, getAllCategoriesFromTheServer)

    const { data: subCategories, error: subCategoriesError, isLoading: isSubCategoriesLoading } = useQuery<any, AxiosError, AxiosResponse<ISubCategory[]>>(SUB_CATEGORIES_END_POINT.GET_ALL_SUB_CATEGORIES, getAllSubCategoriesFromTheServer)

    React.useEffect(() => {
        if (rootCategories?.data) {
            dispatch(addRootCategories({ rootCategories: rootCategories.data }))
        }
        if (categories?.data) {
            dispatch(addCategories({ categories: categories.data }))
        }
        if (subCategories?.data) {
            dispatch(addSubCategories({ subCategories: subCategories.data }))
        }
    }, [categories?.data, dispatch, rootCategories?.data, subCategories?.data])
    return <div>
        {children}
    </div>;
};
