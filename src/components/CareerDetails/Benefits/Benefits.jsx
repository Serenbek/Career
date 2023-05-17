import React from 'react';
import scss from './Benefits.module.scss'
import car from '../../../assets/images/SideBar/ic_car_front.svg'
import fav from '../../../assets/images/Benefits/ic_person_favorite.svg'
import dev from '../../../assets/images/Benefits/ic_devices.svg'
import train from '../../../assets/images/Benefits/ic_group_presentation.svg'
import cash from '../../../assets/images/Benefits/ic_cash.svg'
import travel from '../../../assets/images/Benefits/ic_airport.svg'
import { useTranslation } from 'react-i18next';


function Benefits(props) {
    const { t } = useTranslation()
    return (
        <div className={scss.wrap}>
            <h1>{t("benefits.title")}  </h1>
            <div>
            <div className={scss.benefits}>
                <div>
                    <img src={car} alt="icon" />
                    <h1>{t("benefits.free")}</h1>
                </div>
                <div>
                    <img src={cash} alt="icon" />
                    <h1>{t("benefits.bonus")}</h1>
                </div>
                <div>
                    <img src={travel} alt="icon" />
                    <h1>{t("benefits.travel")}</h1>
                </div>
            </div>
            <div className={scss.benefits}>
                <div>
                    <img src={train} alt="icon" />
                    <h1>{t("benefits.train")}</h1>
                </div>
                <div>
                    <img src={dev} alt="icon" />
                    <h1>{t("benefits.dev")}</h1>
                </div>
                <div>
                    <img src={fav} alt="icon" />
                    <h1>{t("benefits.care")}</h1>
                </div>
            </div>
            </div>

        </div>
    );
}

export default Benefits;