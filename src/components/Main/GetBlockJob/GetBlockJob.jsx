import React from 'react'
import css from './GetBlockJob.module.scss'
import i18next from "i18next";
import { useTranslation } from "react-i18next";

function GetBlockJob() {
  const { i18n,t } = useTranslation();
  return (
    <div className={css.wrapper}>
        <div className='container'>
            <h1>{t('getTheRightJob')}</h1>
            <p>{t('subscribeToGetUpd')}</p>
            <div className={css.inp}>
                <input placeholder={t('enterYourEmail')} type="text"/>
                <button>{t('subscribe')}</button>
            </div>
        </div>
    </div>
  )
}

export default GetBlockJob