import React from 'react'
import Header from '../components/Header/Header'
import Description from '../components/CareerDetails/Description/Description'
import Footer from '../components/Footer/Footer';
import Hero from '../components/CareerDetails/Hero/Hero';

const CareerDetails = () => {
	return (
		<div>
			<div className='container'>
			<Header />
			</div>
			<Hero />
			<Description />
			{/* <Footer /> */}
		</div>
	)
}

export default CareerDetails
