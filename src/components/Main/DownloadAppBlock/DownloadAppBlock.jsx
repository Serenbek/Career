import React from 'react'
import css from './DownloadAppBlock.module.scss'
import bigPhone from '../../../assets/images/downloadApp/07.svg'
import apple from '../../../assets/images/downloadApp/apple.svg'
import googleP from '../../../assets/images/downloadApp/googleP.svg'
import { useTranslation } from "react-i18next";

function DownloadAppBlock() {
    const { t } = useTranslation();
    return (
        <div className={css.wrapper}>
                <div className={css.components}>
                    <div className={css.left}>
                        <div className={css.info}>
                            <h1 className={css.title}>{t('downloadApp')}</h1>
                            <p className={css.text}>{t('findingNewJob')}</p>
                        </div>
                        <div className={css.two__btns}>
                            <button>
                                <img src={apple} alt="" />
                                <div className={css.btn__info}>
                                    <p>{t('downloadFrom')}</p>
                                    <h1>Apple Store</h1>
                                </div>
                            </button>
                            <button>
                                <img src={googleP} alt="" />
                                <div className={css.btn__info}>
                                    <p>{t('downloadOn')}</p>
                                    <h1>Google Play</h1>
                                </div>
                            </button>
                        </div>
                    </div>
                    <img className={css.main__img} src={bigPhone} alt="" />
                </div>
            </div>
    )
}

export default DownloadAppBlock