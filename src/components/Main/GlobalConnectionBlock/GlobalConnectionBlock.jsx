import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import css from './GlobalConnectionBlock.module.scss'
import { useTranslation } from "react-i18next";
import backImg from '../../../assets/images/globalconnectionImg/backImg.svg'
import mainImg1 from '../../../assets/images/globalconnectionImg/mainImg1.svg'
import mainImg2 from '../../../assets/images/globalconnectionImg/mainImg2.svg'
import mainImg3 from '../../../assets/images/globalconnectionImg/mainImg3.svg'
import rightArrL from '../../../assets/images/globalconnectionImg/lightRightArr.svg'
import rightArr from '../../../assets/images/globalconnectionImg/rightArrow.svg'
import leftArr from '../../../assets/images/globalconnectionImg/leftArrow.svg'





function GlobalConnectionBlock() {
    const { i18n, t } = useTranslation();


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div className={css.wrapper}>
            <Slider {...settings}>

                <div className='container'>
                    <div className={css.components}>
                        <div className={css.left}>
                            <h1>{t('globalConnection')}</h1>
                            <p className={css.text}>Vestibulum fringilla pede sit amet augue. Nam adipiscing. Nulla neque dolor, sagittis eget, iaculis quis.</p>
                            <button>
                                <p>{t('browseAll')}</p>
                                <img src={rightArrL} alt="white right arrow icon" />
                            </button>
                        </div>
                        <div className={css.right}>
                            <div className={css.card}>
                                <img src={mainImg1} alt="" />
                                <h1>{t('bahamas')}</h1>
                                <p>{t('jobs')}</p>
                            </div>
                            <div className={css.card}>
                                <img src={mainImg2} alt="" />
                                <h1>{t('comoros')}</h1>
                                <p>{t('jobs')}</p>
                            </div>
                            <div className={css.card}>
                                <img src={mainImg3} alt="" />
                                <h1>{t('azerbaijan')}</h1>
                                <p>{t('jobs')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div >
        
    )
}
function CustomPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
export default GlobalConnectionBlock