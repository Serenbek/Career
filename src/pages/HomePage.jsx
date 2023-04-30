import React from 'react';
import ForCandidates from '../components/Main/ForCandidates/ForCandidates'
import HotCategories from '../components/Main/HotCategories/HotCategories';
import PostJobBlock from '../components/Main/PostJobBlock/PostJobBlock';

function HomePage(props) {
    return (
        <div>
            <ForCandidates/>
            <HotCategories/>
            <PostJobBlock />
        </div>
    );
}

export default HomePage;