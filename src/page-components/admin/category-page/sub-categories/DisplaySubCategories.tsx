import React from 'react';
import { ISubCategory } from '../../../../response-types/categories-response.types';

interface IProps {
    subCategories: ISubCategory[];
    categoryId: string;
    rootCategoryId: string;
}

export const AdminDisplaySubCategories = ({ subCategories, categoryId, rootCategoryId }: IProps) => {


    if (subCategories.length === 0) {
        return null
    }

    function filteredSubCategories(rootCategoryId: string, categoryId: string) {
        return subCategories.filter(cat => cat.category === categoryId && cat.rootCategory === rootCategoryId);
    }
    return <div className='px-10 h-full'>
        {filteredSubCategories(rootCategoryId, categoryId).map(cat => <div className='text-black font-medium cursor-pointer hover:text-red-500' key={cat._id}>
            {cat.title}
        </div>)}
    </div>;
};
