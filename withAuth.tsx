import { GetServerSidePropsContext } from "next";
import { parseCookies } from "nookies";
import { COOKIE_NAME } from "./pages/api/login";

interface Context extends GetServerSidePropsContext {
    token: string | null
}

export const withAuth = (gssp: (context: Context) => { props: {} }) => {
    return async (context: Context) => {
        const cookies = parseCookies({ req: context.req }) as { [key: string]: string };
        const token = cookies[COOKIE_NAME];
        if (token) {
            return gssp({ ...context, token })
        }
        return await gssp({ ...context, token: null })
    }
}