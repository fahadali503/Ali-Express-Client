import Head from 'next/head';
import React from 'react';
import { Navigation } from '../nav';

interface IPROPS {
    title: string;
}
export const MainLayout: React.FC<IPROPS> = ({ children, title }) => {
    return <div>
        <Head>
            <title>{title}</title>
        </Head>
        <Navigation />
        <section>
            {children}
        </section>
    </div>;
};
