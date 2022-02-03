import React from 'react';
import Select from 'react-select'
import { StepWizardChildProps } from 'react-step-wizard';
import { DangerButton } from '../../../../components/buttons/DangerButton';
import { Input } from '../../../../components/inputs/Input';
import { TextArea } from '../../../../components/inputs/TextArea';

const options = [
    { value: 'private', label: 'Private Company' },
    { value: 'limitedCompany', label: 'Limited Liability Company' },
    { value: 'jointStock', label: 'Joint Stock Company' },
]

interface IProps extends Partial<StepWizardChildProps> {
    handleChange: (e: React.ChangeEvent) => void;
    handleBlur: (e: React.ChangeEvent) => void;
    touched: any;
    errors: any;
    values: any;
    setFieldValue: (field: string, value: any) => void
}
export const BusinessInformationSeller = ({ nextStep, previousStep, handleBlur, handleChange, errors, touched, values, setFieldValue }: IProps) => {
    return <div className='text-sm'>
        <div >
            <label className='font-semibold inline-block mb-2 text-gray-700' htmlFor="companyLegalForm">Company Legal Form</label>
            <Select onChange={value => setFieldValue('shopTaxCountry', value?.value)} onBlur={handleBlur} name="companyLegalForm" options={options} />
            {errors.companyLegalForm && touched.companyLegalForm && <div className='text-red-500'>{errors.companyLegalForm}</div>}
        </div>
        <div className='mt-2'>
            <Input handleBlur={handleBlur} value={values.companyName} handleChange={handleChange} label='Company Registration Name' name='companyName' placeholder='Company Registration Name' type={'text'} className='w-full' >
                {errors.companyName && touched.companyName && <div>{errors.companyName}</div>}
            </Input>
        </div>
        <div className='mt-2'>
            <TextArea handleBlur={handleBlur} value={values.companyAddress} handleChange={handleChange} label='Company Registration Address' name='companyAddress' placeholder='Street name, house number, P.O. box, etc.' className='w-full' />
            {errors.companyAddress && touched.companyAddress && <div className='text-red-500'>{errors.companyAddress}</div>}
        </div>
        <div className='mt-2'>
            <Input handleBlur={handleBlur} value={values.companyState} handleChange={handleChange} name='companyState' placeholder='State/Province/Region' type={'text'} className='w-full' >
                {errors.companyState && touched.companyState && <div className='text-red-500'>{errors.companyState}</div>}
            </Input>
        </div>
        <div className='mt-2'>
            <div className="mb-3 w-96">
                <label className="font-semibold inline-block mb-2 text-gray-700">Profile of Legal Person (passport, ID card)</label>
                <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" name='passportIdPhoto' multiple accept="image/*" onChange={e => {
                    const files = Array.from(e.target.files!)
                    setFieldValue("passportIdPhoto", files)
                }} />
            </div>
            {errors.passportIdPhoto && touched.passportIdPhoto && <div className='text-red-500'>{errors.passportIdPhoto}</div>}
        </div>

        <div className='mt-2'>
            <Input handleBlur={handleBlur} value={values.companyNumber} handleChange={handleChange} name='companyNumber' placeholder='Company contact number' label="Company contact number" type={'number'} className='w-full' >
                {errors.companyNumber && touched.companyNumber && <div className='text-red-500'>{errors.companyNumber}</div>}
            </Input>
        </div>

        <div className='mt-2'>
            <Input handleBlur={handleBlur} value={values.companyEmail} handleChange={handleChange} name='companyEmail' placeholder='Company contact email' label="Company contact email" type={'email'} className='w-full' >
                {errors.companyEmail && touched.companyEmail && <div className='text-red-500'>{errors.companyEmail}</div>}
            </Input>
        </div>
        <div className='mt-2 flex space-x-3'>
            <DangerButton type='button' text='Back' className='w-full' onClick={() => previousStep!()} />
            <DangerButton type='button' disabled={(!values.companyName || !values.companyAddress || !values.companyState || !values.passportIdPhoto || !values.companyNumber || !values.companyEmail)} text='Next' className='w-full' onClick={() => nextStep!()} />
        </div>
    </div>;
};
