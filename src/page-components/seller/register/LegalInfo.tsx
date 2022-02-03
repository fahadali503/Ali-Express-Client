import React from 'react';
import { StepWizardChildProps } from 'react-step-wizard';
import { DangerButton } from '../../../../components/buttons/DangerButton';
import { Input } from '../../../../components/inputs/Input';

interface IProps extends Partial<StepWizardChildProps> {
    handleChange: (e: React.ChangeEvent) => void;
    handleBlur: (e: React.ChangeEvent) => void;
    touched: any;
    errors: any;
    values: any;
    handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void
}
export const LegalInfoSeller = ({ previousStep, handleBlur, handleChange, errors, touched, values, handleSubmit }: IProps) => {
    return <div className='text-sm'>
        <div className='mt-2'>
            <Input handleBlur={handleBlur} value={values.firstName} handleChange={handleChange} label='Full Name' name='firstName' placeholder='First Name' type={'text'} className='w-full'>
                {errors.firstName && touched.firstName && <div>{errors.firstName}</div>}
            </Input>
            <Input handleBlur={handleBlur} value={values.lastName} handleChange={handleChange} name='lastName' placeholder='Last Name' type={'text'} className='w-full'>
                {errors.lastName && touched.lastName && <div>{errors.lastName}</div>}
            </Input>
            <Input handleBlur={handleBlur} value={values.middleName} handleChange={handleChange} name='middleName' placeholder='Middle Name (Optional)' type={'text'} className='w-full' >
                {errors.middleName && touched.middleName && <div>{errors.middleName}</div>}
            </Input>
        </div>
        <div className='mt-2'>
            <Input handleBlur={handleBlur} value={values.nationality} handleChange={handleChange} label='Nationality' name='nationality' placeholder='Nationality' type={'text'} className='w-full'  >
                {errors.nationality && touched.nationality && <div>{errors.nationality}</div>}
            </Input>
        </div>
        <div className='mt-2'>
            <div className="datepicker relative form-floating mb-3 xl:w-96">
                <label className="form-label font-semibold inline-block mb-2 text-gray-700">Date of birth</label>
                <input type="date"
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Select a date"
                    name='birth'
                    onBlur={handleBlur} value={values.birth} onChange={handleChange}
                />
            </div>
            {errors.birth && touched.birth && <div className="text-red-500">{errors.birth}</div>}
        </div>
        <div className='mt-2'>
            <Input handleBlur={handleBlur} value={values.idOrPassport} handleChange={handleChange} label='ID or passport number' name='idOrPassport' placeholder='ID or passport number' type={'text'} className='w-full' >
                {errors.idOrPassport && touched.idOrPassport && <div>{errors.idOrPassport}</div>}

            </Input>
        </div>
        <div className='mt-2'>
            <Input handleBlur={handleBlur} value={values.mobile} handleChange={handleChange} label='Mobile Number' name='mobile' placeholder='Mobile Number' type={'number'} className='w-full' >
                {errors.mobile && touched.mobile && <div>{errors.mobile}</div>}

            </Input>
        </div>
        <div className='mt-2'>
            <Input handleBlur={handleBlur} value={values.personalEmail} handleChange={handleChange} label='Your Email Address' name='personalEmail' placeholder='Your email address' type={'email'} className='w-full' >
                {errors.personalEmail && touched.personalEmail && <div>{errors.personalEmail}</div>}

            </Input>
        </div>
        <div className='mt-2 flex space-x-3'>
            <DangerButton text='Back' type='button' className='w-full' onClick={() => previousStep!()} />
            <DangerButton text='Submit' onClick={handleSubmit} type="submit" className='w-full' />
        </div>
    </div>;
};
