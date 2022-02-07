import { AUTH_END_POINTS, BASEURL } from '../../api'
export const createAccountOnServer = async (values: { email: string, password: string, role: ROLES }) => {
    const res = await BASEURL.post(AUTH_END_POINTS.REGISTER, values);
    return res;
}


export enum ROLES {
    SELLER = "seller",
    CUSTOMER = "customer"
}