import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer';
import CardInputs from '../components/CardList/CardInputs/CardInputs';
import CardListMain from '../components/CardList/CardListMain/CardListMain';






const CareerList = () => {
  return (
    <>
      <div className="container">
        <Header />
        <CardInputs/>
        <CardListMain/>
      </div>
        <Footer/>
    </>
  );
}

export default CareerList
