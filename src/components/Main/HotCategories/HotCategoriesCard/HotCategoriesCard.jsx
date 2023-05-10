import React from 'react';
import scss from './HotCategoriesCard.module.scss'
import { useTranslation } from 'react-i18next';


function HotCategoriesCard({ icon, title, disc }) {
    const { t } = useTranslation()
    return (
        <div className={scss.card}>
            <div className={scss.card__img}>
                <img src={icon} alt="icon" />
            </div>
            <div className={scss.card__text}>
                <h1>{t(title)}</h1>
                <p>{t(disc)}</p>
            </div>
        </div>
    );
}

export default HotCategoriesCard;