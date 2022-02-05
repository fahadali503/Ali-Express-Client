import { IAuthResponse } from "../response-types/auth-response.types";

export const addUserToLocalStorage = (values: IAuthResponse) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(JWT_KEYS.AUTH, JSON.stringify(values));
    }
}

export const getUserFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
        const user = JSON.parse(localStorage.getItem(JWT_KEYS.AUTH) || "{}");
        if (!user || user === undefined) {
            return null
        }
        return user as IAuthResponse;
    }
}

export const removeUserfromLocalStorage = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem(JWT_KEYS.AUTH);
    }
}

export enum JWT_KEYS {
    AUTH = "auth"
}