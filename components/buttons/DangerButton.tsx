import React from 'react';


interface IProps {
    text: string;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

export const DangerButton = ({ text, className, onClick, type = "button", disabled }: IProps) => {

    return <button type={type} className={`inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out ${className}`} disabled={disabled} onClick={onClick}>{text}</button>
};
