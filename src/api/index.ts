import { create } from 'apisauce'
import axios from 'axios';
export const BASEURL = create({
    baseURL: "http://localhost:5000"
});

export const AXIOS_BASE_URL = axios.create({
    baseURL: "http://localhost:5000"
})

export enum ROOT_CATEGORIES_END_POINT {
    GET_ALL_ROOT_CATEGORIES = "/category/root",
    CREATE_NEW_ROOT_CATEGORY = "/category/root/new",
    UPDATE_ROOT_CATEGORY = "/category/root",
}

export enum CATEGORIES_END_POINT {
    CREATE_NEW_CATEGORY = "/category/category/new",
    GET_ALL_CATEGORIES = "/category/category"
}

export enum SUB_CATEGORIES_END_POINT {
    CREATE_NEW_SUB_CATEGORY = "/category/subcategory/new",
    GET_ALL_SUB_CATEGORIES = "/category/subcategory",
}