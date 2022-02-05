import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { IconType } from 'react-icons';


interface IProps {
    text: string;
    Icon: IconType;
    href: string;
}

export const AdminNavLink = ({ Icon, text, href }: IProps) => {
    const router = useRouter()
    return <Link href={href} passHref>
        <div className={`flex  px-3 font-medium my-2 transition delay-75 hover:scale-110 text-gray-500 space-x-3 py-2 rounded-lg items-center cursor-pointer hover:bg-[#EBEEF2] hover:text-[#9769ff] ${router.pathname === href ? "bg-[#EBEEF2] text-[#9769ff]" : ""}`}>
            <Icon className='text-3xl' />
            <h1 className='text-lg'>{text}</h1>
        </div>
    </Link>
};
