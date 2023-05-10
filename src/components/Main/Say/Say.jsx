import React, { useRef } from "react";
import scss from './Say.module.scss'
import Slider from 'react-slick';
import stars from '../../../assets/images/SayImgs/Rating.svg'
import btnPrev from '../../../assets/images/TopCompanies/prev.svg'
import btnNext from '../../../assets/images/TopCompanies/next.svg'
import { useTranslation } from "react-i18next";

function Say(props) {
    const { t } = useTranslation()
    const arrowRef = useRef(null);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    
    return (
        <div className='container'>
            <div className={scss.wrapper}>
                <h1>{t("say.what")}</h1>
            <Slider ref={arrowRef} {...settings}>
                <div className={scss.top}>
                    <img src={stars} alt="img" />
                    <p>{t("say.desc")}</p>
                    <div>
                        <h1>{t("say.rob")}</h1>
                        <p>{t("say.designer")}</p>
                    </div>
                </div>
                <div className={scss.top}>
                    <img src={stars} alt="img" />
                    <p>{t("say.p")}</p>
                    <div>
                        <h1>{t("say.rob")}Robert Fox</h1>
                        <p>{t("say.designer")}designer</p>
                    </div>
                </div>
            </Slider>
            <div className={scss.btnSay}>
                <img
                    src={btnPrev}
                    alt="icon"
                    onClick={() => arrowRef.current.slickPrev()}
                />
                <img
                    src={btnNext}
                    alt="icon"
                    onClick={() => arrowRef.current.slickNext()}
                />
            </div>

            </div>
        </div>
    );
}

export default Say;