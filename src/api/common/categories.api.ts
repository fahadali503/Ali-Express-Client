import { AXIOS_BASE_URL, BASEURL, CATEGORIES_END_POINT, ROOT_CATEGORIES_END_POINT, SUB_CATEGORIES_END_POINT } from ".."

export const getAllRootCategoriesFromTheServer = async () => {
    const res = await AXIOS_BASE_URL.get(ROOT_CATEGORIES_END_POINT.GET_ALL_ROOT_CATEGORIES);
    return res;
}


export const getAllCategoriesFromTheServer = async () => {
    const res = await AXIOS_BASE_URL.get(CATEGORIES_END_POINT.GET_ALL_CATEGORIES);
    return res;
}

export const getAllSubCategoriesFromTheServer = async () => {
    const res = await AXIOS_BASE_URL.get(SUB_CATEGORIES_END_POINT.GET_ALL_SUB_CATEGORIES);
    return res;
}

