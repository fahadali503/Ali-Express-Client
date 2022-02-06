import { ICategory, IRootCategory, ISubCategory } from "../../../src/response-types/categories-response.types";

export interface CategoryState {
    rootCategoryId: string | null;
    categoryId: string | null;
    subCategoryId: string | null;
    rootCategories: IRootCategory[] | [];
    categories: ICategory[] | [];
    subCategories: ISubCategory[] | [];
}