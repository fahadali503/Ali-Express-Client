import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SLICE_CONSTANTS } from '../constants/slices.constants';
import { ICreateProduct, ProductState } from '../types/product/ProductState';

const initialState: ProductState = {
    newProduct: {
        categoryId: '',
        discount: '',
        price: '',
        rootCategoryId: '',
        stock: '',
        subCategoryId: '',
        title: ''
    }
}
export const productSlice = createSlice({
    initialState,
    name: SLICE_CONSTANTS.PRODUCT,
    reducers: {
        createNewProduct(state, action: PayloadAction<ICreateProduct>) {
            state.newProduct = { ...action.payload }
        },
        clearPreviewValues(state) {
            state.newProduct = { ...initialState.newProduct };
        }
    }
});

export const { createNewProduct, clearPreviewValues } = productSlice.actions;
export default productSlice.reducer;