import React from 'react';
import scss from './HotCategoriesCard.module.scss'

function HotCategoriesCard({icon, title, disc}) {
    return (
        <div className={scss.card}>
            <div className={scss.card__img}>
            <img src={icon} alt="icon" />
            </div>
            <div className={scss.card__text}>
                <h1>{title}</h1>
                <p>{disc}</p>
            </div>
        </div>
    );
}

export default HotCategoriesCard;