import React from 'react';
import PodcastCard from '../reusable/PodcastCard';
import { getPodcast } from '@/util/getPodcast';

const Podcast = async () => {
    let {data}= await getPodcast()
    console.log({data});
    return (
        <div>
            <div>
                <button>For you</button>
            </div>
            <div className='grid grid-cols-5 gap-3'>
{
    data.slice(0,5).map(d=> (
        <PodcastCard key={d.id} data={d}></PodcastCard>
    ))
}
            </div>
        </div>
    );
};

export default Podcast;