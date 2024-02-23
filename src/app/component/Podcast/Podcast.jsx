import React from 'react';
import PodcastCard from '../reusable/PodcastCard';
import { getPodcast } from '@/util/getPodcast';
import CustomButton from '../reusable/CustomButton';

const Podcast = async () => {
    let { data } = await getPodcast()
    let bt = [
        { id: 1, name: 'For you' },
        { id: 2, name: 'Popular' },
        { id: 3, name: 'Trend' },
        { id: 4, name: 'Pop' },
        { id: 5, name: 'Edm' },
        { id: 6, name: 'Rock' },
        { id: 7, name: 'More' },
    ]
    return (
        <div>
            
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3 my-7 mx-auto '>
                {bt.map(b => (
                    
                    <CustomButton key={b.id} w={'147px'} radius={'25px'} bgc={'#3B3B3B'} name={b.name}/>
                    ))}
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mx-auto'>
                {
                    data.slice(0, 5).map(d => (
                        <PodcastCard key={d.id} data={d}></PodcastCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Podcast;