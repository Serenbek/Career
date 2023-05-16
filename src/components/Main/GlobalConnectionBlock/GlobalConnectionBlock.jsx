import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import css from './GlobalConnectionBlock.module.scss'
import { useTranslation } from "react-i18next";
import backImg from '../../../assets/images/globalconnectionImg/backImg.svg'

import rightArrL from '../../../assets/images/globalconnectionImg/lightRightArr.svg'
import rightArr from '../../../assets/images/globalconnectionImg/rightArrow.svg'
import leftArr from '../../../assets/images/globalconnectionImg/leftArrow.svg'
import GlobalContent from '../../Main/GlobalConnectionBlock/globalContent'
import { GlobalConnectionCons } from '../../../constants/GlobalConnectionConst';



function GlobalConnectionBlock() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,

                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const { t } = useTranslation();

    return (

        <div className={css.wrapper}>


            <div className={css.sec}>
                <div className={css.components}>
                    <div className={css.left}>
                        <h1>{t('globalConnection')}</h1>
                        <p className={css.text}>Vestibulum fringilla pede sit amet augue. Nam adipiscing. Nulla neque dolor, sagittis eget, iaculis quis.</p>
                        <button>
                            <p>{t('browseAll')}</p>
                            <img src={rightArrL} alt="white right arrow icon" />
                        </button>
                    </div>
                    <div className={css.slider__Con}>
                        <Slider {...settings}>
                            {
                                GlobalConnectionCons.map((item, index) => (
                                    <GlobalContent key={`${item.image}_${index}`} {...item} />
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default GlobalConnectionBlock
