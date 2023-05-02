import React from 'react';
import ForCandidates from '../components/Main/ForCandidates/ForCandidates'
import HotCategories from '../components/Main/HotCategories/HotCategories';
import PostJobBlock from '../components/Main/PostJobBlock/PostJobBlock';
import ClientBlock from "../components/Main/ClientBlock/ClientBlock";
import DownloadAppBlock from "../components/Main/DownloadAppBlock/DownloadAppBlock";
import GetBlockJob from "../components/Main/GetBlockJob/GetBlockJob";
import Latest from '../components/Main/LatestPost/Latest';


function HomePage(props) {
    return (
        <div>
            <PostJobBlock />
            <ForCandidates/>
            <HotCategories/>
            <ClientBlock />
            <Latest/>
            <PostJobBlock />
            <DownloadAppBlock/>
            <GetBlockJob />

        </div>
    );
}

export default HomePage;