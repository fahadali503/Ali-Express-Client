import { GetServerSidePropsContext } from 'next';
import React, { useEffect, useState } from 'react';
import { AdminLayout } from '../../../components/layout/AdminLayout';
import { withAuth } from '../../../withAuth';
import { getAllRootCategoriesFromTheServer } from '../../../src/api/common/categories.api';
import { ICategory, ICategoryResponse, IRootCategory } from '../../../src/response-types/categories-response.types';
import { useQuery } from 'react-query';
import { ROOT_CATEGORIES_END_POINT } from '../../../src/api';
import { AxiosError, AxiosResponse } from 'axios';
import { Spinner } from '../../../components/spinner/Spinner';
import { SuccessButton } from '../../../components/buttons/SuccessButton';
import { useRouter } from 'next/router';
import { ADMIN_LINKS } from '../../../src/utils/Links';
import { GiAmericanFootballBall, GiBabyBottle, GiFirstAidKit, GiHomeGarage, GiLaptop, GiMailShirt, GiPerson, GiPhotoCamera, GiPowerRing, GiShoppingBag, GiSittingDog, GiSmartphone, GiSteeringWheel } from 'react-icons/gi'
import { IconType } from 'react-icons';
import { RootCategoryItem } from '../../../src/page-components/admin/category-page/root-categories/RootCategoryItem';
import { MdWarningAmber } from 'react-icons/md';
import { AdminDisplayCategories } from '../../../src/page-components/admin/category-page/categories/DisplayCategories';
import { useDispatch, useSelector } from 'react-redux';
import { addRootCategoryId, editRootCategory } from '../../../store/slices/categoriesSlice';
import { updateRootCategoryOnServer } from '../../../src/api/admin/catgories.api';
import toast from 'react-hot-toast';
import { handleApiError } from '../../../src/api/error.api';
import { RootState } from '../../../store';

interface IProps {
    token: string
}

const Icons: IconType[] = [GiMailShirt, GiPerson, GiSmartphone, GiLaptop,
    GiPhotoCamera, GiPowerRing, GiSittingDog, GiShoppingBag, GiBabyBottle,
    GiAmericanFootballBall, GiFirstAidKit, GiSteeringWheel,
    GiHomeGarage
]

const AdminCategoryPage = ({ token }: IProps) => {
    const router = useRouter()
    const dispatch = useDispatch();

    const rootCategories = useSelector((state: RootState) => state.categories.rootCategories);

    const updateRootCategory = async (text: string, rootCategoryId: string) => {
        const response = await updateRootCategoryOnServer(text, rootCategoryId, token);
        handleApiError(response);
        const data = response.data as ICategoryResponse<IRootCategory>;
        dispatch(editRootCategory(data.category));
        toast.success(data.message);
    }



    return <AdminLayout title='Dashboard - ADMIN' token={token}>
        <div className='w-full mb-10  '>
            <div className='relative'>
                <SuccessButton onClick={() => router.push(ADMIN_LINKS.ADD_ROOT_CATEGORY)} text='Add Root Category' className='right-10 absolute' />
            </div>
            <h1 className='font-bold text-xl tracking-widest italic'>Root Categories</h1>
            <div className='grid grid-cols-3 gap-4'>
                <div className='w-full border rounded-md shadow-md '>
                    <div className='flex w-full text-[#747272]  flex-col px-3 py-2'>
                        {(rootCategories) ? rootCategories.map((cat, i) => {
                            return <div key={cat._id}>
                                <RootCategoryItem onClick={() => dispatch(addRootCategoryId({ rootCategoryId: cat._id }))} Icon={Icons[i]} rootCategory={cat}
                                    updateRootCategory={updateRootCategory}
                                />
                            </div>
                        }) : <RootCategoryItem Icon={MdWarningAmber} text='Something went wrong' />}
                    </div>
                </div>
                <div className='col-span-2 text-[#77818f]'>
                    <AdminDisplayCategories />
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