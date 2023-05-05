import React from 'react';
import scss from './CompaniesCard.module.scss'

function CompaniesCard({ img, disc, title }) {
    return (
        <div className={scss.cardWrap}>
            <img src={img} alt="" />
            <div className={scss.cardWrap__title}>
                <p>{disc} jobs</p>
                <h1>{title}</h1>
            </div>
        </div>
    );
}

export default CompaniesCard;