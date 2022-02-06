import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { stat } from 'fs'
import { IRootCategory } from '../../src/response-types/categories-response.types'
import { SLICE_CONSTANTS } from '../constants/slices.constants'
import { CategoryState } from '../types/category/CategoryState'

const initialState: CategoryState = {
    categoryId: null,
    rootCategoryId: null,
    subCategoryId: null,
    categories: [],
    rootCategories: [],
    subCategories: []
}

export const categoriesSlice = createSlice({
    initialState,
    name: SLICE_CONSTANTS.CATEGORY,
    reducers: {
        addRootCategories(state, action: PayloadAction<Pick<CategoryState, 'rootCategories'>>) {
            state.rootCategories = action.payload.rootCategories
        },
        editRootCategory(state, action: PayloadAction<IRootCategory>) {
            const allRootCategories = [...state.rootCategories];
            const updatedCategories = allRootCategories.map(cat => cat._id === action.payload._id ? action.payload : cat);
            state.rootCategories = updatedCategories
        },
        editCategory() { },
        editSubCategory() { },
        addCategories(state, action: PayloadAction<Pick<CategoryState, 'categories'>>) {
            state.categories = action.payload.categories
        },
        addSubCategories(state, action: PayloadAction<Pick<CategoryState, 'subCategories'>>) {
            state.subCategories = action.payload.subCategories;
        },
        addRootCategoryId(state, action: PayloadAction<Pick<CategoryState, 'rootCategoryId'>>) {
            state.rootCategoryId = action.payload.rootCategoryId
        },
        addCategoryId(state, action: PayloadAction<Pick<CategoryState, 'categoryId'>>) {
            state.categoryId = action.payload.categoryId
        },
        addSubCategoryId(state, action: PayloadAction<Pick<CategoryState, 'subCategoryId'>>) {
            state.subCategoryId = action.payload.subCategoryId
        },
        removeRootCategoryId(state) {
            state.rootCategoryId = null;
        },
        removeCategoryId(state) {
            state.categoryId = null;
        },
        removeSubCategoryId(state) {
            state.subCategoryId = null;
        },

    }
})

export const { addCategoryId, addRootCategoryId, addSubCategoryId, removeRootCategoryId, removeCategoryId, removeSubCategoryId,
    addCategories,
    addRootCategories,
    addSubCategories,
    editCategory, editRootCategory, editSubCategory
} = categoriesSlice.actions;
export default categoriesSlice.reducer