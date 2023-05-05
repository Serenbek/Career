import React from 'react'
import css from './GetBlockJob.module.scss'
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

function GetBlockJob() {
  const { t } = useTranslation();
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