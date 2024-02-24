import React from 'react';
import PodcastCard from '../reusable/PodcastCard';
import { getPodcast } from '@/util/getPodcast';

const Podcast = async ({first,second}) => {
    let { data } = await getPodcast()
   
    return (
        <div>
            
        
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mx-auto'>
                {
                    data.slice(first,second).map(d => (
                        <PodcastCard key={d.id} data={d}></PodcastCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Podcast;