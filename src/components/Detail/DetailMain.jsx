import React from 'react'
import DetailAside from './DetailAside/DetailAside'
import DetailButtons from './DetailButtons/DetailButtons'
import DetailMap from './DetailMap/DetailMap'
import DetailBenefits from './DetailBenefits/DetailBenefits'
import DetailDescription from './DetailDescription/DetailDescription'

const DetailMain = () => {
  return (
	<div className='container'>
	  <DetailButtons/>
	  <DetailMap/>
	  <DetailBenefits/>
	  <DetailDescription/>
	<DetailAside/>
	</div>
  )
}

export default DetailMain
