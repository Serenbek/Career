import React from 'react';
import scss from './Description.module.scss'
import SideBar from '../SideBar/SideBar';
import Skills from '../Skills/Skills';
import Benefits from '../Benefits/Benefits';
import Location from '../Location/Location';
import Share from '../Share/Share';
import { useTranslation } from 'react-i18next';

function Description(props) {
    const { t } = useTranslation()
    return (
        <div className='container'>
            <div className={scss.wrap}>
                <div className={scss.wrapper}>
                    <div className={scss.text}>
                        <h1>{t("desc.title")}</h1>
                        <p>{t("desc.tt")}</p>
                    </div>
                    <div className={scss.desc1} >
                        <h1>{t("desc.p")}</h1>
                        <ul>
                            <li>{t("desc.li1")}</li>
                            <li>{t("desc.li2")}</li>
                            <li>{t("desc.li3")}</li>
                            <li>{t("desc.li4")}</li>
                            <li>{t("desc.li5")}</li>
                            <li>{t("desc.li6")}</li>
                            <li>{t("desc.li7")}</li>
                        </ul>
                    </div>
                    <div className={scss.desc1}>
                        <h1>{t("desc.here")}</h1>
                        <ul>
                            <li>{t("desc.li1")}</li>
                            <li>{t("desc.li2")}</li>
                            <li>{t("desc.li3")}</li>
                            <li>{t("desc.li4")}</li>
                            <li>{t("desc.li5")}</li>
                            <li>{t("desc.li6")}</li>
                            <li>{t("desc.li7")}</li>
                        </ul>
                        <div className={scss.blocks}>
                            <Skills />
                            <Benefits />
                            <Location />
                            <hr />
                            <Share />
                        </div>
                    </div>
                </div>
                <SideBar />
            </div>
        </div>
    );
}

export default Description;