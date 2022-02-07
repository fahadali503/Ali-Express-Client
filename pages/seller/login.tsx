import React from 'react';
import { MainLayout } from '../../components/layout';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Input } from '../../components/inputs/Input';
import { OrangeBlockButton } from '../../components/buttons/OrangeBlockButton';
import Link from 'next/link';
import { SellerLinks, SELLER_LINKS } from '../../src/utils/Links';
import { LoginApiServer } from '../../src/api/auth/login.api';
import { handleApiError } from '../../src/api/error.api';
import { IAuthResponse } from '../../src/response-types/auth-response.types'
import { useDispatch } from 'react-redux';
import { addUser } from '../../store/slices/userSlice';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { addUserToLocalStorage } from '../../src/utils/jwt';
import toast from 'react-hot-toast';
import { ROLES } from '../../src/api/auth/register.api';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is Required'),
    password: Yup.string().min(8).required('Password is Required'),
});

const SellerLoginPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const redirect = router.query.redirect as string;

    const onHandlerSubmit = async (values: { email: string, password: string }) => {
        try {
            const response = await axios.post('/api/login', values);
            const data = response.data as IAuthResponse;
            if (data.user.role === ROLES.SELLER) {
                addUserToLocalStorage(data)
                dispatch(addUser(data))
                if (redirect) return router.push(decodeURIComponent(redirect))
                return router.push(SELLER_LINKS.DASHBOARD);
            }
            return toast.error("Please Login if your account is registered as Seller");
        } catch (error) {
            const err = error as AxiosError;
            toast.error(err.response?.data.message);
        }
    }

    return <MainLayout title='Login into your Seller Account!'>
        <Formik validationSchema={LoginSchema} initialValues={{ email: "", password: "" }} onSubmit={values => onHandlerSubmit(values)}>
            {({ handleSubmit, handleBlur, handleChange, errors, touched }) => (
                <form onSubmit={handleSubmit} className='w-1/3 shadow-lg border-t shadow-orange-300 mx-auto mt-28 py-16'>
                    <div>
                        <Input handleBlur={handleBlur} handleChange={handleChange} label='Email Address:'
                            name='email'
                            placeholder='Please enter valid email address'
                            type={'email'}
                        >
                            {errors.email && touched.email && <div>{errors.email}</div>}
                        </Input>
                    </div>
                    <div>
                        <Input handleBlur={handleBlur} handleChange={handleChange} label='Password:'
                            name='password'
                            placeholder='*************'
                            type={'password'}
                        >
                            {errors.password && touched.password && <div>{errors.password}</div>}
                        </Input>
                    </div>
                    <div className='px-9'>
                        <OrangeBlockButton text='Sign in' type={'submit'} />
                    </div>
                    <div className='flex text-blue-500 justify-between px-9'>
                        <div className=''>Forget Password?</div>
                        <div className=' text-right'>
                            <Link href={SellerLinks.REGISTER}>
                                <a>Join & sell global today!</a>
                            </Link>
                        </div>
                    </div>
                    <div>

                    </div>
                </form>
            )}
        </Formik>
    </MainLayout>;
};

export default SellerLoginPage;
