import { Formik } from 'formik';
import React from 'react';
import { MainLayout } from '../../components/layout';
import { CreateAccountSeller } from '../../src/page-components/seller/register/CreateAccount';
import StepWizard from "react-step-wizard";
import { Stepper } from '../../components/stepper/Stepper';
import { BusinessInformationSeller } from '../../src/page-components/seller/register/BusinessInformation';
import { LegalInfoSeller } from '../../src/page-components/seller/register/LegalInfo';
import * as Yup from 'yup';

const initialState = {
    shopTaxCountry: "",
    email: "",
    password: "",
    companyLegalForm: "",
    companyName: "",
    companyAddress: "",
    companyState: "",
    passportIdPhoto: [],
    companyNumber: "",
    companyEmail: "",
    firstName: "",
    lastName: "",
    middleName: "",
    nationality: "",
    birth: "",
    idOrPassport: "",
    mobile: "",
    personalEmail: ""
}

const SellerRegisterSchema = Yup.object().shape({
    shopTaxCountry: Yup.string(),
    email: Yup.string().email("Invalid Email").required("Email is Required."),
    password: Yup.string().min(8).required("Password is Required."),
    companyLegalForm: Yup.string(),
    companyName: Yup.string().required("Company Name is Required."),
    companyAddress: Yup.string().required("Company Address is Required."),
    companyState: Yup.string().required("State is Required."),
    passportIdPhoto: Yup.array().min(1, "select at least 1 file").required("State is Required."),
    companyNumber: Yup.string().min(8).required("Company Number is Required."),
    companyEmail: Yup.string().email("Invalid Email").required("Company Email is Required."),
    firstName: Yup.string().required("First Name is Required."),
    lastName: Yup.string().required("Last Name is Required."),
    middleName: Yup.string(),
    nationality: Yup.string().required("Nationality is Required."),
    birth: Yup.string().required("Birth is Required."),
    idOrPassport: Yup.string().required("ID Or Passport No is Required."),
    mobile: Yup.string().required("Mobile Number is Required."),
    personalEmail: Yup.string().email("Invalid Email").required("Personal Email is Required."),
})

const SellerRegisterPage = () => {
    return <MainLayout title='Create Seller Account to start selling globally!'>
        <h1 className='text-center mt-10 text-6xl'>Create Account</h1>
        <Formik validationSchema={SellerRegisterSchema} onSubmit={values => console.log(values)} initialValues={initialState}>
            {({ errors, touched, handleSubmit, handleChange, handleBlur, values, setFieldValue }) => (
                <form className='w-1/2 border py-10 mt-16 mx-auto px-10'>
                    <StepWizard nav={<Stepper />}>
                        <CreateAccountSeller values={values} errors={errors} touched={touched} setFieldValue={setFieldValue} handleBlur={handleBlur} handleChange={handleChange} />
                        <BusinessInformationSeller values={values} errors={errors} touched={touched} setFieldValue={setFieldValue} handleBlur={handleBlur} handleChange={handleChange} />
                        <LegalInfoSeller handleSubmit={handleSubmit} values={values} errors={errors} touched={touched} handleBlur={handleBlur} handleChange={handleChange} />
                    </StepWizard>
                </form>
            )}
        </Formik>
    </MainLayout>;
};

export default SellerRegisterPage;
