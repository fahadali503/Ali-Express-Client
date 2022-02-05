import { Formik } from 'formik';
import React from 'react';
import { MainLayout } from '../../components/layout';
import * as Yup from 'yup';
import { Input } from '../../components/inputs/Input';
import { DangerButton } from '../../components/buttons/DangerButton';

const initialState = {
    email: "",
    password: "",
}

const SellerRegisterSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email is Required."),
    password: Yup.string().min(8).required("Password is Required."),
})

const SellerRegisterPage = () => {
    return <MainLayout title='Create Seller Account to start selling globally!'>
        <h1 className='text-center mt-10 text-6xl'>Create Account</h1>
        <Formik validationSchema={SellerRegisterSchema} onSubmit={values => console.log(values)} initialValues={initialState}>
            {({ errors, touched, handleSubmit, handleChange, handleBlur, values, }) => (
                <form className='w-1/2 border py-10 mt-16 mx-auto px-10'>
                    <div className='mt-2'>
                        <Input handleBlur={handleBlur} value={values.email} handleChange={handleChange} label='Email Address' name='email' placeholder='Email Address' type={'email'} className='w-full' >
                            {errors.email && touched.email && <div>{errors.email}</div>}
                        </Input>
                    </div>
                    <div className='mt-2'>
                        <Input handleBlur={handleBlur} value={values.password} handleChange={handleChange} label='Login Password' name='password' placeholder='Password' type={'password'} className='w-full' >
                            {errors.password && touched.password && <div>{errors.password}</div>}
                        </Input>
                    </div>
                    <div>
                        <DangerButton onClick={handleSubmit} type='submit' text='Sign Up' className='w-full text-base font-semibold' disabled={!values.email && !values.password} />
                    </div>
                </form>
            )}
        </Formik>
    </MainLayout>;
};

export default SellerRegisterPage;
