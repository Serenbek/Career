import React from 'react';
import scss from './Maps.module.scss'
import inn from '../../../assets/images/MapsImg/inn.svg'
import fc from '../../../assets/images/MapsImg/fc.svg'
import inst from '../../../assets/images/MapsImg/inst.svg'
import twitter from '../../../assets/images/MapsImg/twitter.svg'
import { useTranslation } from 'react-i18next';


function Maps(props) {
    const { t } = useTranslation()

    return (
        <div className={scss.wrapper}>
            <div className='container'>
                <div className={scss.wrap}>
                    <div className={scss.top}>
                        <h1>{t("map.get")}</h1>
                        <p>{t("map.p")}We'd love to talk about how we can help you.</p>
                    </div>
                    <div className={scss.bottom}>
                        <div>
                            <p className={scss.bottom_title}>{t("map.mail")}Email</p>
                            <p>debbie.baker@example.com</p>
                        </div>
                        <div>
                            <p className={scss.bottom_title}>{t("map.phone")}Phone</p>
                            <p>(907) 555-0101</p>
                        </div>
                        <div>
                            <p className={scss.bottom_title}>{t("map.address")}Address</p>
                            <p>3891 Ranchview Dr. Richardson, California 62639</p>
                        </div>
                        <div>
                            <p className={scss.bottom_title}>{t("map.follow")}Follow Us</p>
                            <div>
                                <img src={fc} alt="" />
                                <img src={inst} alt="" />
                                <img src={inn} alt="" />
                                <img src={twitter} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={scss.map}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.3877622247555!2d74.59295271547174!3d42.84354487915743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb620e9c75a0b%3A0x75cc9f8c5cd22e08!2zMTMzINGD0LsuINCQ0YXRg9C90LHQsNC10LLQsCwg0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1684325204050!5m2!1sru!2skg" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
        </div>
    );
}

export default Maps;