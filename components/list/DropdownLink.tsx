import Link from 'next/link';
import React from 'react';
import { Card } from '../Card';
import { LinkText } from '../link/LinkText';

interface IProps {
    title: string;
    link: string;
}

export const DropdownLink = ({ link, title }: IProps) => {
    return <Card className='absolute bg-white'>
        <div className='w-64'>
            <LinkText href={link} text={title} />
        </div >
    </Card>;
};
