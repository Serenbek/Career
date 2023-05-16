import React from 'react'
import Header from '../components/Header/Header'
import Blog from '../components/CareerBlog/Blog';
import Footer from '../components/Footer/Footer';

const CareerBlog = () => {
  return (<>
    <div className="container">
      <Header />
      <Blog/>
    </div>
    <Footer/>
    </>
  );
}

export default CareerBlog
