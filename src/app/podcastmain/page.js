import React from 'react';
import CustomButton from '../component/reusable/CustomButton';
import Podcast from '../component/Podcast/Podcast';

const MainpageofPodcast = () => {
    return (
        <div>
            <div className='py-5'>
                <CustomButton w={'147px'} radius={'25px'} bgc={'#3B3B3B'} name={'For you'}></CustomButton>
                <div className='py-5'>
                    <Podcast first={0} second={5}></Podcast>
                </div>
            </div>
            <div className='py-5'>
                <CustomButton w={'147px'} radius={'25px'} bgc={'#3B3B3B'} name={'Popular'}></CustomButton>
                <div className='py-5'>
                    <Podcast first={5} second={10}></Podcast>
                </div>
            </div>
            <div className='py-5'>
                <CustomButton w={'147px'} radius={'25px'} bgc={'#3B3B3B'} name={'Trend'}></CustomButton>
                <div className='py-5'>
                    <Podcast first={3} second={8}></Podcast>
                </div>
            </div>
            <div className='py-5'>
                <CustomButton w={'147px'} radius={'25px'} bgc={'#3B3B3B'} name={'Pop'}></CustomButton>
                <div className='py-5'>
                    <Podcast first={-6} second={-1}></Podcast>
                </div>
            </div>

        </div>
    );
};

export default MainpageofPodcast;