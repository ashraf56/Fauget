import React from 'react';
import PodcastDetail from '../component/PodcastDetail.jsx/PodcastDetail';
import CustomButton from '../component/reusable/CustomButton';
import PodcastCard from '../component/reusable/PodcastCard';
import Groupebtn from '../component/reusable/Groupebtn';
import Podcast from '../component/Podcast/Podcast';

const Podcastdetail = async({ searchParams }) => {

    let { data,info } = searchParams
   
let buttns= [
    {id:1 , name:'Related'}
]
    return (
        <div>
            <PodcastDetail data={data} info={info}/>
            <Groupebtn bt={buttns}></Groupebtn>
           <Podcast first={0} second={5}></Podcast>
        </div>
    );
};

export default Podcastdetail;