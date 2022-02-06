export interface IRootCategory {
    _id: string;
    title: string;
    user: string;
    createAt: string;
    updatedAt: string;
}

export interface ICategory extends IRootCategory {
    rootCategory: string;
}

export interface ISubCategory extends ICategory {
    category: string
}

export interface ICategoryResponse<T> {
    category: T;
    message: string;
}