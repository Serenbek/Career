import React from 'react';
import scss from './Hero.module.scss'
import marketing from '../../../assets/images/HeroImg/ic_baggage_claim.svg'
import eye from '../../../assets/images/HeroImg/ic_eye.svg'
import pin from '../../../assets/images/HeroImg/ic_pin.svg'
import MyButtonWide from '../../UI/Buttons/MyButtonWide'
import { useTranslation } from 'react-i18next';

function Hero(props) {
    const { t } = useTranslation();
    return (
            <div className={scss.wrapper}>
                <div className={scss.top}>
                    <ul className={scss.breadcrumb}>
                        <li className={scss.breadcrumb__breadcrumbsItem}>
                            <a className={scss.breadcrumb__breadcrumbsLink} href="/">{t("hero.home")}</a>
                        </li>
                        <li className={scss.breadcrumb__breadcrumbsItem}>
                            <a className={scss.breadcrumb__breadcrumbsLink} href="/CareerList">{t("hero.job")}</a>
                        </li>
                        <li className={scss.breadcrumb__breadcrumbsItem}>
                            <a className={scss.breadcrumb__breadcrumbsLink} href="/CareerList">{t("hero.ct")}</a>
                        </li>
                        <li className={scss.breadcrumb__breadcrumbsItem}>
                            <a className={scss.breadcrumb__breadcrumbsLink} href="/CareerDetails">{t("hero.ps")}</a>
                        </li>
                    </ul>
                </div>
                <div className={scss.bottom}>
                    <div className={scss.bottom__left}>
                        <h1>{t("hero.ps")}</h1>
                        <div>
                            <div>
                                <img src={marketing} alt="icon" />
                                <p>{t("hero.marketing")}</p>
                            </div>
                            <div>
                                <img src={eye} alt="icon" />
                                <p>{t("hero.views")}</p>
                            </div>
                            <div>
                                <img src={pin} alt="icon" />
                                <p>{t("hero.vi")}Virgin Islands, British</p>
                            </div>

                        </div>
                    </div>
                    <div className={scss.bottom__right}>
                        <div className={scss.bottom__buttons}>
                            <MyButtonWide>
                                <>
                                    <p> {t("hero.apply")}</p>
                                </>
                            </MyButtonWide>
                                                    <input type="checkbox" />

                        </div>
                        <div className={scss.bottom__text}>
                            <p>{t("hero.date")}</p>
                            <p className={scss.bottom__text_p}>{t("hero.may")} </p>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Hero;