import React from 'react';
import { Logo } from '../logo/Logo';
import { MdCategory, MdContactSupport, MdDashboard, MdOutlineProductionQuantityLimits, MdPeople, MdReportProblem, MdSettings, MdShoppingBag } from "react-icons/md";
import { AdminNavLink } from './NavLink';
import { ADMIN_LINKS } from '../../src/utils/Links';
import { Logout } from '../Logout';
export const AdminSidebar = () => {
    return <div className='h-screen fixed w-72 border'>
        <div>
            <Logo />
        </div>
        <div className='flex mt-4  px-4 flex-col  justify-between w-full'>
            <div>
                <AdminNavLink Icon={MdDashboard} href={ADMIN_LINKS.DASHBOARD} text='Dashboard' />
                <AdminNavLink Icon={MdShoppingBag} href={ADMIN_LINKS.ORDERS} text='Orders' />
                <AdminNavLink Icon={MdOutlineProductionQuantityLimits} href={ADMIN_LINKS.PRODUCTS} text='Products' />
                <AdminNavLink Icon={MdContactSupport} href={ADMIN_LINKS.SUPPORT} text='Support' />
                <AdminNavLink Icon={MdCategory} href={ADMIN_LINKS.CATEGORY} text='Category' />
                <AdminNavLink Icon={MdPeople} href={ADMIN_LINKS.USERS} text='Users' />
                <AdminNavLink Icon={MdReportProblem} href={ADMIN_LINKS.REPORTS} text='Reports' />
                <AdminNavLink Icon={MdSettings} href={ADMIN_LINKS.SETTINGS} text='Settings' />
            </div>
            <div className='mt-16'>
                <Logout />
            </div>
        </div>
    </div>;
};
