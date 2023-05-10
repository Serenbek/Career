import React from 'react';
import scss from './Footer.module.scss'
import logo from '../../assets/images/footerImg/Logo.svg'
import email from '../../assets/images/footerImg/Message.svg'
import map from '../../assets/images/footerImg/Map marker.svg'
import inn from '../../assets/images/footerImg/in.svg'
import inst from '../../assets/images/footerImg/inst.svg'
import fc from '../../assets/images/footerImg/fc.svg'
import twitter from '../../assets/images/footerImg/twitter.svg'
import arrow from '../../assets/images/footerImg/arrow.svg'
import { useTranslation } from 'react-i18next';


function Footer(props) {
    const { t } = useTranslation(); 
    return (
        <div className='container'>
            <div className={scss.wrapper}>
                <img src={logo} alt="" className={scss.wrapper__logo} />
                <div className={scss.top}>
                    <p className={scss.top__p}>{t("footer.p")}</p>
                        <div className={scss.icons}>
                        <img src={fc} alt="icon" />
                        <img src={inst} alt="icon" />
                        <img src={inn} alt="icon" />
                        <img src={twitter} alt="icon" />
                    </div>

                    <div className={scss.top__center}>
                        <div>
                            <img src={email} alt="" />
                            <p>info@example.com</p>
                        </div>
                        <div>
                            <img src={map} alt="" />
                            <p>{t("footer.street")}</p>
                        </div>
                    </div>
                    <div className={scss.input}>
                        <input type="text" placeholder='Email address' />
                        <button><img src={arrow} alt="" /></button>
                    </div>
                    <div className={scss.inputP}>
                        <input type="text" placeholder="Email address" />
                        <button>
                            <img src={arrow} alt="" />
                        </button>
                    </div>

                </div>
                <div className={scss.icons}>
                    <img src={fc} alt="icon" />
                    <img src={inst} alt="icon" />
                    <img src={inn} alt="icon" />
                    <img src={twitter} alt="icon" />
                </div>
                <div className={scss.bottom}>
                    <p>{t("footer.copy")}</p>
                    <div>
                        <p>{t("footer.help")}</p>
                        <p>{t("footer.pp")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;