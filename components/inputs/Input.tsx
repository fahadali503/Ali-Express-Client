import { FormikErrors, FormikTouched } from 'formik';
import React from 'react';

interface IProps {
    label: string;
    name: string;
    handleChange: (e: React.ChangeEvent<any>) => void;
    handleBlur: (e: React.ChangeEvent<any>) => void;
    type: React.HTMLInputTypeAttribute;
    placeholder: string;
};

export const Input: React.FC<IProps> = ({ handleBlur, placeholder, handleChange, label, name, type, children }) => {
    return <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
            <label htmlFor={label} className="form-label font-semibold inline-block mb-2 text-gray-700"
            >{label}</label
            >
            <input
                type={type}
                className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                placeholder={placeholder}
                onChange={handleChange}
                onBlur={handleBlur}
                name={name}
            />
            <div className='text-red-500'>{children}</div>
        </div>
    </div>
};
