import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../store';
import { AdminDisplaySubCategories } from '../sub-categories/DisplaySubCategories';

interface IProps {
}
export const AdminDisplayCategories = ({ }: IProps) => {

    const rootCategoryId = useSelector((state: RootState) => state.categories.rootCategoryId);
    const categories = useSelector((state: RootState) => state.categories.categories);
    const subCategories = useSelector((state: RootState) => state.categories.subCategories);

    function filterCategories(rootCategoryId: string) {
        return categories.filter(cat => cat.rootCategory === rootCategoryId);
    }

    if (rootCategoryId === null) {
        return null;
    }
    return <div className='border h-full w-full  px-2 py-4'>
        <div className="grid h-full  grid-cols-2 gap-4">
            {filterCategories(rootCategoryId).map(cat => (
                <div key={cat._id} className=' transition-all  duration-75  hover:ease-in-out '>
                    <h1 className='text-center hover:text-red-500 cursor-pointer border h-auto shadow-lg my-3 rounded-full px-3 py-3 bg-[#f3f3f3] w-10/12  tracking-widest font-semibold '>
                        {cat.title}
                    </h1>
                    <div className=''>
                        <AdminDisplaySubCategories subCategories={subCategories} categoryId={cat._id} rootCategoryId={rootCategoryId} />
                    </div>
                </div>
            ))}
        </div>
    </div>;
};
