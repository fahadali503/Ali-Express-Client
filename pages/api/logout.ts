// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { destroyCookie } from 'nookies';
import { COOKIE_NAME } from './login';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        destroyCookie({ res }, COOKIE_NAME, { maxAge: -1 });
        return res.status(200).json({ message: "Successfully logout." })
    } else {
        res.status(400).json({ message: 'Method not allowed' })
    }
}
