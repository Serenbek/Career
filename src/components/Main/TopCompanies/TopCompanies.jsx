import React, { useRef } from "react";
import cn from 'classnames'
import scss from './TopCompanies.module.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TopCompaniesConst } from '../../../constants/TopCompaniesConst'
import CompaniesCard from './CompaniesCard/CompaniesCard'
import useTheme from "../../../hooks/useTheme";

function TopCompanies(props) {
  const arrowRef = useRef(null);
  const isDark = useTheme();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          arrows: true

        }
      },

      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,

        }
      },

      {
        breakpoint: 912,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };

  return (
    <div className={scss.wrapper}>
      <h1
        className={cn({
          dark_text: isDark,
        })}>
        Top Companies
      </h1>
      <Slider ref={arrowRef} {...settings}>
        {TopCompaniesConst.map((item, index) => (
          <CompaniesCard
            className={cn({
              dark_card: isDark,
            })}
            key={`${item.image}_${index}`}
            {...item}
          />
        ))}
      </Slider>
    </div>
  );
}

export default TopCompanies;