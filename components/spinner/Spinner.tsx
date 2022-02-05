import React from 'react';

export const Spinner = () => {
    return <div className="flex items-center h-screen w-screen z-30 bg-[#8382823b] absolute justify-center">
        <div className="spinner-border animate-spin inline-block w-20 h-20 border-4 rounded-full" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
        ;
};
