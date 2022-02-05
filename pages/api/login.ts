// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from 'nookies';
import { LoginApiServer } from '../../src/api/auth/login.api';
import { IAuthResponse } from '../../src/response-types/auth-response.types';

export const COOKIE_NAME = "authToken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const body = req.body;
    const response = await LoginApiServer(body);
    const data = response.data as IAuthResponse;
    if (!response.ok) {
      return res.status(response.originalError.response?.status!).json(response.originalError.response?.data)
    } else {
      setCookie({ res }, COOKIE_NAME, data.token, {
        maxAge: 36 * 36 * 24 * 7,
        path: '/',
      })
      return res.status(200).json(response.data);
    }
  } else {
    res.status(400).json({ message: 'Method not allowed' })
  }
}
