import Link from 'next/link';
import React from 'react';

interface IProps {
    href: string;
    text: string;
    className?: string;
}
export const LinkText = ({ href, text, className }: IProps) => {
    return <>
        <Link href={href}>
            <a className={`block px-6 text-black py-2 w-full hover:bg-gray-100 hover:text-gray-500 transition duration-500 cursor-pointer ${className}`} >
                {text}
            </a >
        </Link >
    </>;
};
