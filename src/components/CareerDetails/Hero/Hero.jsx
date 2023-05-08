import React from 'react';
import scss from './Hero.module.scss'
import marketing from '../../../assets/images/HeroImg/ic_baggage_claim.svg'
import eye from '../../../assets/images/HeroImg/ic_eye.svg'
import pin from '../../../assets/images/HeroImg/ic_pin.svg'
import MyButtonWide from '../../UI/Buttons/MyButtonWide'

function Hero(props) {
    return (
            <div className={scss.wrapper}>
                <div className={scss.top}>
                    <ul className={scss.breadcrumb}>
                        <li className={scss.breadcrumb__breadcrumbsItem}>
                            <a className={scss.breadcrumb__breadcrumbsLink} href="/">Home</a>
                        </li>
                        <li className={scss.breadcrumb__breadcrumbsItem}>
                            <a className={scss.breadcrumb__breadcrumbsLink} href="/CareerList">Jobs</a>
                        </li>
                        <li className={scss.breadcrumb__breadcrumbsItem}>
                            <a className={scss.breadcrumb__breadcrumbsLink} href="/CareerList">Category</a>
                        </li>
                        <li className={scss.breadcrumb__breadcrumbsItem}>
                            <a className={scss.breadcrumb__breadcrumbsLink} href="/CareerDetails">President of Sales</a>
                        </li>
                    </ul>
                </div>
                <div className={scss.bottom}>
                    <div className={scss.bottom__left}>
                        <h1>President of Sales</h1>
                        <div>
                            <div>
                                <img src={marketing} alt="icon" />
                                <p>Marketing</p>
                            </div>
                            <div>
                                <img src={eye} alt="icon" />
                                <p>286 views</p>
                            </div>
                            <div>
                                <img src={pin} alt="icon" />
                                <p>Virgin Islands, British</p>
                            </div>

                        </div>
                    </div>
                    <div className={scss.bottom__right}>
                        <div className={scss.bottom__buttons}>
                            <MyButtonWide>
                                <>
                                    <p>Apply Now</p>
                                </>
                            </MyButtonWide>
                                                    <input type="checkbox" />

                        </div>
                        <div className={scss.bottom__text}>
                            <p>Expiration date:</p>
                            <p className={scss.bottom__text_p}> 19 May 2026</p>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Hero;