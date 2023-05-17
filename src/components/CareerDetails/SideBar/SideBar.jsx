import React from 'react';
import MyButton from '../../UI/Buttons/MyButton'
import adv from '../../../assets/images/SideBar/adv.svg'
import dropbox from '../../../assets/images/SideBar/dropbox.svg'
import scss from './SideBar.module.scss'
import { SideBarConst } from '../../../constants/SideBarConst';
import SideBarCard from './SideBarCard/SideBarCard';
import { useTranslation } from 'react-i18next';


function SideBar(props) {
    const { t } = useTranslation()

    return (
        <div className={scss.wrapper}>
            <div className={scss.cards}>
                {
                    SideBarConst.map((item, index) => (
                        <SideBarCard key={`${item.image}_${index}`} {...item} />
                    ))
                }

            </div>
            <div className={scss.box}>
                <div className={scss.dropbox}>
                    <img src={dropbox} alt="icon" />
                    <div>
                        <h1>{t("sideBar.drop")} </h1>
                        <p>{t("sideBar.view")}</p>
                    </div>
                </div>
                <div className={scss.company}>
                    <h1>{t("sideBar.jobs")}</h1>
                    <div className={scss.company__titles}>
                        <div className={scss.company__title}>
                            <h1>{t("sideBar.market")}</h1>
                            <p>{t("sideBar.date")}</p>
                        </div>
                        <hr />
                        <div className={scss.company__title}>
                            <h1>{t("sideBar.dog")}</h1>
                            <p>{t("sideBar.date")}</p>
                        </div>
                        <hr />
                        <div className={scss.company__title}>
                            <h1>{t("sideBar.nursing")}</h1>
                            <p>{t("sideBar.date")}</p>
                        </div>


                    </div>
                </div>
            </div>
            <div className={scss.adv}>
                <img src={adv} alt="img" />
                <div className={scss.adv__text}>
                    <div>
                        <h1>{t("sideBar.adv")}</h1>
                        <p>{t("sideBar.donec")}</p>
                    </div>
                    <MyButton>
                        <>
                        {t("sideBar.go")}
                        </>
                    </MyButton>
                </div>
            </div>
        </div>
    );
}

export default SideBar;