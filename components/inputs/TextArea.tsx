import React from 'react';

interface IProps {
    label: string;
    name: string;
    handleChange: (e: React.ChangeEvent<any>) => void;
    handleBlur: (e: React.ChangeEvent<any>) => void;
    placeholder: string;
    className?: string;
    value: string;
};

export const TextArea: React.FC<IProps> = ({ handleBlur, placeholder, handleChange, label, name, children, className, value }) => {
    return <div className="flex justify-center">
        <div className={`mb-3 ${className ? className : "xl:w-96"}`}>
            <label className="form-label font-semibold inline-block mb-2 text-gray-700"
            >{label}</label
            >
            <textarea
                className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                value={value}
                rows={3}
                placeholder={placeholder}
                name={name}
                onChange={handleChange}
                onBlur={handleBlur}
            ></textarea>
        </div>
        <div className='text-red-500'>{children}</div>
    </div>
};
