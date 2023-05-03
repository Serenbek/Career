// import React from 'react';
import React, { useRef } from "react";
import scss from './TopCompanies.module.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TopCompaniesConst } from '../../../constants/TopCompaniesConst'
import CompaniesCard from './CompaniesCard/CompaniesCard'

function TopCompanies(props) {
  const arrowRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };

  return (
    <div className='container'>
      <div className={scss.wrapper}>
        <h1>Top Companies</h1>
        <Slider ref={arrowRef} {...settings}>
          <div className={scss.top}>
            {
              TopCompaniesConst.map((item, index) => (
                <CompaniesCard key={`${item.image}_${index}`} {...item} />
              ))
            }
          </div>

          <div className={scss.top}>
            {
              TopCompaniesConst.map((item, index) => (
                <CompaniesCard key={`${item.image}_${index}`} {...item} />
              ))
            }
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default TopCompanies;