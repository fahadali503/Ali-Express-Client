export interface ICreateProduct {
    title: string | '';
    price: string | '';
    discount: string | '';
    stock: string | '';
    rootCategoryId: string | null;
    categoryId: string | null;
    subCategoryId: string | null;
}

export interface ProductState {
    newProduct: ICreateProduct;
}