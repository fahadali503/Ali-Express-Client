import React, { useState } from 'react';
import { MdAdd, MdEdit, MdOutlineAdd, MdOutlineClose } from 'react-icons/md';
import {
    FloatingMenu,
    MainButton, Directions,
    ChildButton,
} from 'react-floating-button-menu';
import { useRouter } from 'next/router';
import { SELLER_LINKS } from '../../../utils/Links';

export const SellerAddProduct = () => {
    const [showMenu, setShowMenu] = useState(false);
    const router = useRouter();

    return <div>
        <div className='absolute right-16 bottom-10'>
            <FloatingMenu
                slideSpeed={500}
                direction={Directions.Up}
                spacing={8}
                isOpen={showMenu}
            >
                <MainButton
                    iconResting={<MdOutlineAdd className='text-white font-bold text-3xl' style={{ fontWeight: "bold", }} />}
                    iconActive={<MdOutlineClose className='text-white font-bold text-3xl' style={{ fontWeight: "bold" }} />}
                    background="red"
                    onClick={() => setShowMenu(!showMenu)}
                    size={70}
                />
                <ChildButton
                    icon={<MdAdd style={{ fontSize: 20 }} />}
                    background="white"
                    size={40}
                    onClick={() => router.push(SELLER_LINKS.ADD_PRODUCT)}

                />
            </FloatingMenu>
        </div>
    </div>;
};
