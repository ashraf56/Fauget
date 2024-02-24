'use client'
import { UserContext } from '@/context/UserProvider';
import React, { useContext } from 'react';
import LoggedBanner from '../LoggedBanner/LoggedBanner';
import Banner from '../Banner/Banner';

const Allbanner = () => {
    let { user } = useContext(UserContext)

    return (
        <div>
            {
                user ? <LoggedBanner> </LoggedBanner> : <Banner></Banner>
            }
        </div>
    );
};

export default Allbanner;