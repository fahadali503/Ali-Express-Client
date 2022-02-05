import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { OrangeBlockButton } from '../../../components/buttons/OrangeBlockButton';
import { Input } from '../../../components/inputs/Input';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is Required'),
    password: Yup.string().min(8).required('Password is Required'),
});

interface IProps {
    handleSubmit: (values: { email: string, password: string }) => void
}
export const AdminLogin = ({ handleSubmit }: IProps) => {
    const submitHandler = (values: { email: string, password: string }) => {
        handleSubmit(values)
    }
    return <div className='w-full'>
        <Formik validationSchema={LoginSchema} initialValues={{ email: "", password: "" }} onSubmit={values => submitHandler(values)}>
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

                </form>
            )}
        </Formik>
    </div>;
};
