import React from 'react';
import ForCandidates from '../components/Main/ForCandidates/ForCandidates'
import HotCategories from '../components/Main/HotCategories/HotCategories';

function HomePage(props) {
    return (
        <div>
            <ForCandidates/>
            <HotCategories/>
        </div>
    );
}

export default HomePage;