import { BASEURL, CATEGORIES_END_POINT, ROOT_CATEGORIES_END_POINT, SUB_CATEGORIES_END_POINT } from ".."

// Root Categories
export const addRootCategoryToServer = async (value: string, token: string) => {
    const res = await BASEURL.post(ROOT_CATEGORIES_END_POINT.CREATE_NEW_ROOT_CATEGORY, { title: value }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res;
}

export const updateRootCategoryOnServer = async (title: string, rootCategoryId: string, token: string) => {
    const res = await BASEURL.patch(ROOT_CATEGORIES_END_POINT.UPDATE_ROOT_CATEGORY, { title, rootCategoryId }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return res;
}

// Categories

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


export const updateCategoryOnServer = async (title: string, categoryId: string, token: string) => {
    const res = await BASEURL.patch(ROOT_CATEGORIES_END_POINT.UPDATE_ROOT_CATEGORY, { title, categoryId }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return res;
}

// Sub Categories

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

export const updateSubCategoryOnServer = async (title: string, subCategoryId: string, token: string) => {
    const res = await BASEURL.patch(ROOT_CATEGORIES_END_POINT.UPDATE_ROOT_CATEGORY, { title, subCategoryId }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return res;
}
