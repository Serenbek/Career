import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer';
import Latest from '../components/Main/LatestPost/Latest';
import  BlogDetails  from '../components/CareerBlogDeatalis/BlogDetails';

const CareerBLogDetails = () => {
  return (<>
    <div className="container">
      <Header />
      <BlogDetails/>
    </div>
      <Latest/>
    <Footer/>
    </>
  ); 
}

export default CareerBLogDetails
