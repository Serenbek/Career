import React from 'react';
import ForCandidates from '../components/Main/ForCandidates/ForCandidates'
import HotCategories from '../components/Main/HotCategories/HotCategories';
import PostJobBlock from '../components/Main/PostJobBlock/PostJobBlock';
import ClientBlock from "../components/Main/ClientBlock/ClientBlock";
import DownloadAppBlock from "../components/Main/DownloadAppBlock/DownloadAppBlock";
import GetBlockJob from "../components/Main/GetBlockJob/GetBlockJob";
import GlobalConnectionBlock from '../components/Main/GlobalConnectionBlock/GlobalConnectionBlock';
import Latest from '../components/Main/LatestPost/Latest';
import TopCompanies from '../components/Main/TopCompanies/TopCompanies';
import Say from '../components/Main/Say/Say';
import Footer from '../components/Footer/Footer';
import FeaturedJobs from '../components/Main/FeaturedJobs/FeaturedJobs';


function HomePage(props) {
    return (
      <>
        <div className="container">
          <PostJobBlock />
          <ForCandidates />
          <FeaturedJobs />
          <TopCompanies />
          <HotCategories />
          <Say />
          <ClientBlock />
          <Latest />
          <DownloadAppBlock />
          {/*<GlobalConnectionBlock />*/}
        </div>
          <GetBlockJob />
        <Footer />
      </>
    );
}

export default HomePage;