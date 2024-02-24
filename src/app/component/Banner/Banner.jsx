import React from 'react';
import Groupebtn from '../reusable/Groupebtn';

const Banner = () => {
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
              <Groupebtn bt={bt}></Groupebtn>
        </div>
    );
};

export default Banner;