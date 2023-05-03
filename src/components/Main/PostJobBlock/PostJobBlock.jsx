import React from 'react'
import css from './PostJobBlock.module.scss'
import mainImg from '../../../assets/images/recruitImgs/recruitMainImg.svg'
import file from '../../../assets/images/recruitImgs/fileImg.svg'
import i18next from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";


function PostJobBlock() {
    const { i18n,t } = useTranslation();

    return (
        <div className={css.background}>
            <div className='container'>
                <div className={css.wrapper}>
                    <div className={css.left}>
                        <p className={css.info}>{t('ForRecruiters')}</p>
                        <h1 className={css.title}>{t('doYouHAvePos')}</h1>
                        <p className={css.extra__info}>Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Morbi mattis ullamcorper velit.</p>
                        <button className={css.btn}>
                            <img src={file} alt="" />
                            <p>{t('PostAJob')}</p>
                        </button>
                    </div>
                    <img className={css.main__img } src={mainImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default PostJobBlock