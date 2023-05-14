import React from 'react'
import css from './GetBlockJob.module.scss'
import { useTranslation } from "react-i18next";

function GetBlockJob() {
  const { t } = useTranslation();
  return (
    <div className={css.wrapper}>
            <h1>{t('getTheRightJob')}</h1>
            <p>{t('subscribeToGetUpd')}</p>
            <div className={css.inp}>
                <input placeholder={t('enterYourEmail')} type="text"/>
                <button>{t('subscribe')}</button>
            </div>
        </div>
  )
}

export default GetBlockJob