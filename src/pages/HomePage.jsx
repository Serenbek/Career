import React from 'react';
import ForCandidates from '../components/Main/ForCandidates/ForCandidates'
import HotCategories from '../components/Main/HotCategories/HotCategories';
import PostJobBlock from '../components/Main/PostJobBlock/PostJobBlock';
import ClientBlock from "../components/Main/ClientBlock/ClientBlock";
import DownloadAppBlock from "../components/Main/DownloadAppBlock/DownloadAppBlock";
import GetBlockJob from "../components/Main/GetBlockJob/GetBlockJob";
import GlobalConnectionBlock from '../components/Main/GlobalConnectionBlock/GlobalConnectionBlock';

function HomePage(props) {
    return (
        <div>
            <ForCandidates/>
            <HotCategories/>
            <ClientBlock />
            <PostJobBlock />
            <DownloadAppBlock/>
            <GetBlockJob />
            <GlobalConnectionBlock/>
        </div>
    );
}

export default HomePage;