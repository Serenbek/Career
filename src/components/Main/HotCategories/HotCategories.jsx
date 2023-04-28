import React from 'react';
import scss from './HotCategories.module.scss'
import { HotCategoriesConst } from '../../../constants/HotCategoriesConst';
import HotCategoriesCard from './HotCategoriesCard/HotCategoriesCard';
import ClearButton from '../../UI/Buttons/ClearButton'
import arrow from '../../../assets/images/HotCategories/arrow.svg'


function HotCategories(props) {
    return (
        <div className="container">
            <div className={scss.wrapper}>
                <h1>Hot Categories</h1>
                <div className={scss.cards}>
                    {
                        HotCategoriesConst.map((item, index) => (
                            <HotCategoriesCard key={`${item.image}_${index}`} {...item} />
                        ))
                    }
                </div>
                <ClearButton>
                    <>
                    View All Categories
                    <img src={arrow} alt="icon" />
                    </>
                </ClearButton>
            </div>
        </div>
    );
}

export default HotCategories;