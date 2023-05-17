import React from 'react';
import scss from './SideBarCard.module.scss'
import { useTranslation } from 'react-i18next';


function SideBarCard({ image, title, desc}) {
    const { t } = useTranslation()

    return (
        <div className={scss.cardWrap}>
            <img src={image} alt="" />
            <div>
                <h1>{t(title)} </h1>
                <p>{t(desc)}</p>
            </div>
        </div> 
    );
}

export default SideBarCard;