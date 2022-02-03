import React from 'react';
import Select from 'react-select'
import { DangerButton } from '../../../../components/buttons/DangerButton';
import { Input } from '../../../../components/inputs/Input';
import { StepWizardChildProps } from 'react-step-wizard'
const options = [
    { value: 'China', label: 'China' },
    { value: 'USA', label: 'USA' },
    { value: 'Germany', label: 'Germany' },
    { value: 'Pakistan', label: 'Pakistan' },
    { value: 'UK', label: 'UK' },
    { value: 'Canada', label: 'Canada' },
    { value: 'Australia', label: 'Australia' },
]

interface IProps extends Partial<StepWizardChildProps> {
    handleChange: (e: React.ChangeEvent) => void;
    handleBlur: (e: React.ChangeEvent) => void;
    touched: any;
    errors: any;
    values: any;
    setFieldValue: (field: string, value: any) => void
}
export const CreateAccountSeller = ({ nextStep, handleBlur, handleChange, errors, touched, values, setFieldValue }: IProps) => {
    return <div>
        <div className='w-full text-sm'>
            <label className='font-semibold inline-block mb-2 text-gray-700' htmlFor="country">Shop tax country</label>
            <Select onChange={value => setFieldValue('shopTaxCountry', value?.value)} name="shopTaxCountry" options={options} placeholder="Select your country" />
            <p style={{ color: "orangered", paddingLeft: 5 }} >Country cannot be changed after registration</p>
            {errors.shopTaxCountry && touched.shopTaxCountry && <div className='text-red-500'>{errors.shopTaxCountry}</div>}
        </div>
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
            <DangerButton type='button' disabled={(!values.shopTaxCountry || values.email.length === 0 || values.password.length === 0)} onClick={() => nextStep!()} className='block w-full' text='Continue' />
        </div>
    </div>;
};
