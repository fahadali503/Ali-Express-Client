import React from 'react';

interface Iprops {
    text: string;
    type: "button" | "submit" | "reset"
}
export const OrangeBlockButton = ({ text, type }: Iprops) => {
    return <button type={type} className="mb-2 w-full inline-block px-6 py-2.5 bg-orange-600 text-white text-base font-semibold leading-normal rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out">{text}</button>
        ;
};
