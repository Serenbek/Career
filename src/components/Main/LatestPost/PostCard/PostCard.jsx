import React from 'react';
import scss from './PostCard.module.scss'

function PostCard({ image, date, min, title }) {
    return (
        <div className={scss.card}>
            <img src={image} alt="img" />
            <div className={scss.card__text}>
                <div className={scss.card__time}>
                    <p>{date}</p>
                    <div className={scss.card__text_dot}></div>
                    <p>{min}</p>
                </div>
                <h1>{title}</h1>
            </div>
        </div>
    );
}

export default PostCard;