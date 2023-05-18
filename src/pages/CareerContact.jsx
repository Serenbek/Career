import React from 'react'
import Header from '../components/Header/Header'
import Maps from '../components/CareerContact/Maps/Maps';
import Form from '../components/CareerContact/Form/Form';
import Footer from '../components/Footer/Footer'

const CareerContact = () => {
  return (
    <div>
      <div className="container">
        <Header/>
      </div>
      <Maps/>
      <Footer/>
      <Form/>

    </div>
  );
}

export default CareerContact
