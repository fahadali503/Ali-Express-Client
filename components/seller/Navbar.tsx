import React from 'react';
import { Logo } from '../logo/Logo';
import { MdChat, MdDashboard, MdOutlineProductionQuantityLimits, MdShoppingBag } from "react-icons/md";
import { AdminNavLink } from '../admin/NavLink';
import { SELLER_LINKS } from '../../src/utils/Links';
import { Logout } from '../Logout';

export const SellerSidebar = () => {
    return <div className='h-screen fixed w-72 border'>
        <div>
            <Logo />
        </div>
        <div className='flex mt-4  px-4 flex-col  justify-between w-full'>
            <div>
                <AdminNavLink Icon={MdDashboard} href={SELLER_LINKS.DASHBOARD} text='Dashboard' />
                <AdminNavLink Icon={MdShoppingBag} href={SELLER_LINKS.ORDERS} text='Orders' />
                <AdminNavLink Icon={MdOutlineProductionQuantityLimits} href={SELLER_LINKS.PRODUCTS} text='Products' />
                <AdminNavLink Icon={MdChat} href={SELLER_LINKS.SUPPORT} text='Support' />
            </div>
            <div className='mt-16'>
                <Logout logoutLink={SELLER_LINKS.LOGIN} />
            </div>
        </div>
    </div>;
};
