import React from 'react';
import ForCandidates from '../components/Main/ForCandidates/ForCandidates'
import HotCategories from '../components/Main/HotCategories/HotCategories';
import PostJobBlock from '../components/Main/PostJobBlock/PostJobBlock';
import ClientBlock from "../components/Main/ClientBlock/ClientBlock";


function HomePage(props) {
    return (
        <div>
            <PostJobBlock />
            <ForCandidates/>
            <HotCategories/>
            <ClientBlock />
        </div>
    );
}

export default HomePage;