import React, { useRef } from "react";
import scss from './Say.module.scss'
import Slider from 'react-slick';
import stars from '../../../assets/images/SayImgs/Rating.svg'
import btnPrev from '../../../assets/images/TopCompanies/prev.svg'
import btnNext from '../../../assets/images/TopCompanies/next.svg'

function Say(props) {
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
                <h1>What Our Customer Say</h1>
            <Slider ref={arrowRef} {...settings}>
                <div className={scss.top}>
                    <img src={stars} alt="img" />
                    <p>Amazing experience i love it a lot. Thanks to the team
                         that dreams come true, great! I appreciate     there 
                          attitude and approach.</p>
                    <div>
                        <h1>Robert Fox</h1>
                        <p>designer</p>
                    </div>
                </div>
                <div className={scss.top}>
                    <img src={stars} alt="img" />
                    <p>Amazing experience i love it a lot. Thanks to the team <br />
                         that dreams come true, great! I appreciate there <br />
                          attitude and approach.</p>
                    <div>
                        <h1>Robert Fox</h1>
                        <p>designer</p>
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