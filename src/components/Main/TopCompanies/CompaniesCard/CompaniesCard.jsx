import React from 'react';
import scss from './CompaniesCard.module.scss'
import useTheme from '../../../../hooks/useTheme';
import cn from 'classnames'

function CompaniesCard({ img, disc, title }) {
     const isDark = useTheme();
    return (
        <div className={scss.cardWrap}>
            <img src={img} alt="img" />
            <div className={scss.cardWrap__title}>
                <p>{disc} jobs</p>
                <h1 className={cn({
                    dark_text: isDark
                })}>{title}</h1>
            </div>
        </div>
    );
}

export default CompaniesCard;