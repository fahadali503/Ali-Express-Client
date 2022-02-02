import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp, BsHeart } from "react-icons/bs";
import { NavAccountCard } from '../Card/NavAccountCard';

import { Animated } from "react-animated-css"
import { DropdownLink } from '../list/DropdownLink';
import { SellerLinks } from '../../src/utils/Links';


export const Navigation = () => {
    const [isDropDown, setIsDropDown] = useState(false);
    const [isAccountDropDown, setIsAccountDropdown] = useState(false);


    return <div className='w-full text-sm border h-10 flex items-center justify-end pr-10'>
        <div className='flex  w-1/2 justify-evenly'>
            <div className='  cursor-pointer relative' onMouseEnter={() => setIsDropDown(true)} onMouseLeave={() => setIsDropDown(false)}>
                <div>
                    <span className={`hover:text-red-500 duration-200`}>Sell on AliExpress</span> {isDropDown ? <span><BsChevronUp className='inline-block' /></span> : <span><BsChevronDown className='inline-block' /></span>}
                </div>
                {
                    isDropDown && <Animated isVisible={isDropDown} animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000}>
                        <DropdownLink link={SellerLinks.LOGIN} title='Seller Login' />
                    </Animated>
                }
            </div>
            <div className='hover:text-red-500 duration-200'>
                Wishlist <BsHeart className='inline-block' />
            </div>
            <div className='relative'>
                <div className='cursor-pointer hover:text-red-500 duration-200' onMouseEnter={() => setIsAccountDropdown(true)} onMouseLeave={() => setIsAccountDropdown(false)}>
                    <span>Account</span> {isAccountDropDown ? <BsChevronUp className='inline-block' /> : <BsChevronDown className='inline-block' />}
                    <div>
                        {isAccountDropDown && <Animated isVisible={isAccountDropDown} animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000}>
                            <NavAccountCard />
                        </Animated>}
                    </div>
                </div>
            </div>
        </div>
    </div>;
};
