import React from 'react';
import { Card } from '.';
import { COLORS } from '../../src/utils/Colors';
import { DangerButton } from '../buttons/DangerButton';
import { SuccessButton } from '../buttons/SuccessButton';
import { LinkText } from '../link/LinkText';

export const NavAccountCard = () => {
    return <Card className='absolute bg-white'>
        <div className='w-64 px-3 py-3'>
            <h1 className='font-normal text-base opacity-90 text-black py-2 px-3'>Welcome to AliExpress!</h1>
            <div className='flex justify-center space-x-3'>
                <DangerButton text='JOIN' />
                <SuccessButton text='Login' className={`bg-[${COLORS.secondaryButtonColor}]`} />
            </div>
            <hr className='mt-2' />
            <div className='px-3 py-1'>
                <LinkText href='/' text='My Orders' />
            </div>
            <div className='px-3 py-1'>
                <LinkText href='/' text='Message Center' />
            </div>
            <div className='px-3 py-1'>
                <LinkText href='/' text='Wish List' />
            </div>
            <div className='px-3 py-1'>
                <LinkText href='/' text='My Favourite Stores' />
            </div>
            <div className='px-3 py-1'>
                <LinkText href='/' text='My Coupons' />
            </div>
        </div>
    </Card>;
};
