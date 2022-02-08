import React from 'react';

interface IProps {
    title: string;
    className?: string
}
export const Text = ({ title, className }: IProps) => {
    return <h3 className={`${className} form-label font-semibold inline-block mb-2 text-gray-700`}>{title}</h3>;
};
