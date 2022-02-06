import React, { useState } from 'react';
import { IconType } from 'react-icons';
import { MdModeEditOutline } from 'react-icons/md';
import { EditCategoryModel } from '../../../../../components/model/EditCategoryModel';
import { IRootCategory } from '../../../../response-types/categories-response.types';
import { EditRootCategory } from './EditRootCategory';

interface IProps {
    Icon?: IconType;
    rootCategory?: IRootCategory;
    text?: string;
    onClick?: () => void;
    updateRootCategory?: (text: string, rootCategoryId: string) => void
}

export const RootCategoryItem = ({ Icon, rootCategory, text, onClick, updateRootCategory }: IProps) => {
    const [showEditCategoryModel, setShowEditCategoryModel] = useState(false);

    return <div onClick={onClick} className='space-x-3 w-full transition ease-in-out delay-75 mb-3 cursor-pointer flex items-center px-3 py-2 rounded-md hover:shadow-md  hover:text-red-500 group'>
        {Icon && <Icon className="text-3xl " />}
        <h1 className=' text-lg font-light'>{text ? text : rootCategory && rootCategory.title}</h1>
        <MdModeEditOutline className='top-0 right-0 self-end' onClick={() => setShowEditCategoryModel(true)} />
        {showEditCategoryModel && <EditCategoryModel open={showEditCategoryModel} setOpen={setShowEditCategoryModel} >
            <EditRootCategory setIsOpen={setShowEditCategoryModel} category={rootCategory!} updateRootCategory={updateRootCategory!} />
        </EditCategoryModel>
        }
    </div>
};
