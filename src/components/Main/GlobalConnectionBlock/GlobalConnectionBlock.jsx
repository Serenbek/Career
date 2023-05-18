import { useRef } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import css from './GlobalConnectionBlock.module.scss'
import { useTranslation } from "react-i18next";
import rightArrL from '../../../assets/images/globalconnectionImg/lightRightArr.svg'
 import rightArr from '../../../assets/images/globalconnectionImg/rightArrow.svg'
 import leftArr from '../../../assets/images/globalconnectionImg/leftArrow.svg'
import GlobalContent from '../../Main/GlobalConnectionBlock/globalContent'
import { GlobalConnectionCons } from '../../../constants/GlobalConnectionConst';
import useTheme from '../../../hooks/useTheme';
import cn from 'classnames'



function GlobalConnectionBlock() {
    const isDark = useTheme
  const  arrRef =useRef(null)
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 700,
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
        <div className={css.components}>
          <div className={css.left}>
            <h1
              className={cn({
                dark_text: isDark,
              })}>
              {t("globalConnection")}
            </h1>
            <p>
              Vestibulum fringilla pede sit amet augue. Nam adipiscing. Nulla
              neque dolor, sagittis eget, iaculis quis.
            </p>
            <button>
              {t("browseAll")}
              <img src={rightArrL} alt="white right arrow icon" />
            </button>
          </div>
          <div className={css.slider__Con}>
            <Slider ref={arrRef} {...settings}>
              {GlobalConnectionCons.map((item, index) => (
                <GlobalContent key={`${item.image}_${index}`} {...item} />
              ))}
            </Slider>
            <div className={css.sec}>
              <button onClick={() => arrRef.current.slickPrev()}>
                {" "}
                <img src={leftArr} alt="" />{" "}
              </button>
              <button onClick={() => arrRef.current.slickNext()}>
                <img src={rightArr} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}
export default GlobalConnectionBlock
