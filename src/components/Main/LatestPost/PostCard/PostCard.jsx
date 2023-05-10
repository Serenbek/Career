import React from 'react';
import scss from './PostCard.module.scss'
import { useTranslation } from 'react-i18next';

function PostCard({ image, date, min, title }) {
    const { t } = useTranslation()
    return (
        <div className={scss.card}>
            <img src={image} alt="img" />
            <div className={scss.card__text}>
                <div className={scss.card__time}>
                    <p>{t(date)}</p>
                    <div className={scss.card__text_dot}></div>
                    <p>{t(min)}</p>
                </div>
                <h1>{t(title)}</h1>
            </div>
        </div>
    );
}

export default PostCard;