import { BASEURL, CATEGORIES_END_POINT, ROOT_CATEGORIES_END_POINT, SUB_CATEGORIES_END_POINT } from ".."

export const addRootCategoryToServer = async (value: string, token: string) => {
    const res = await BASEURL.post(ROOT_CATEGORIES_END_POINT.CREATE_NEW_ROOT_CATEGORY, { title: value }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res;
}

export const addCategoryToServer = async (value: string, rootCategoryId: string, token: string) => {
    const res = await BASEURL.post(CATEGORIES_END_POINT.CREATE_NEW_CATEGORY, { title: value }, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            rootCategoryId
        }
    });
    return res;
}

export const addSubCategoryToServer = async (title: string, rootCategoryId: string, categoryId: string, token: string) => {
    const res = await BASEURL.post(SUB_CATEGORIES_END_POINT.CREATE_NEW_SUB_CATEGORY, { title }, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            rootCategoryId,
            categoryId
        }
    });
    return res;
}