import React from 'react';

interface IProps {
    className?: string;
}

export const Card: React.FC<IProps> = ({ children, className }) => {
    return <div className={`border shadow-lg right-0 ${className}`}>
        {children}
    </div>;
};
