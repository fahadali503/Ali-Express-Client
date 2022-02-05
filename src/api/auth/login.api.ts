import { BASEURL } from ".."

export const LoginApiServer = async (values: { email: string, password: string }) => {
    const res = await BASEURL.post('/auth/login', values);
    return res
}