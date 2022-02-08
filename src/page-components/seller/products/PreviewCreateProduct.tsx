import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DangerButton } from '../../../../components/buttons/DangerButton';
import { RootState } from '../../../../store';
import { clearPreviewValues } from '../../../../store/slices/productSlice';

export const PreviewCreateProduct = () => {
    const product = useSelector((state: RootState) => state.product.newProduct);
    const dispatch = useDispatch();
    return <div>
        <div className='shadow-lg rounded-lg px-4 space-y-4 py-4'>
            <div className='text-center font-bold text-2xl tracking-widest underline italic'>Preview Product</div>
            <div className='font-medium text-lg italic'>Product Title:{product.title}</div>
            <div className='font-medium text-lg italic'>Price:{product.price}</div>
            <div className='font-medium text-lg italic'>Discount Price:{product.discount || 0}</div>
            <div className='font-medium text-lg italic'>Stock:{product.stock || 0} Pieces</div>
            <DangerButton text='Clear Preview Values' onClick={() => dispatch(clearPreviewValues())} />
        </div>
    </div>;
};
