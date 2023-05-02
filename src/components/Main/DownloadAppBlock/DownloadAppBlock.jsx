import React from 'react'
import css from './DownloadAppBlock.module.scss'
import bigPhone from '../../../assets/images/downloadApp/07.svg'
import apple from '../../../assets/images/downloadApp/apple.svg'
import googleP from '../../../assets/images/downloadApp/googleP.svg'


function DownloadAppBlock() {
    return (
        <div className={css.wrapper}>
            <div className='container'>
                <div className={css.left}>
                    <h1 className={css.title}>Download now</h1>
                    <p className={css.text}>Now finding the new job just got even easier with our new app!</p>
                    <div className={css.two__btns}>
                        <button>
                            <img src={apple} alt="" />
                            <div className={css.btn__info}>
                                <p>Download on the </p>
                                <h1>Apple Store</h1>
                            </div>
                        </button>
                        <button>
                            <img src={googleP} alt="" />
                            <div className={css.btn__info}>
                                <p>Download from</p>
                                <h1>Google Play</h1>
                            </div>
                        </button>
                    </div>
                </div>
                <img className={css.main__img} src={bigPhone} alt="" />
                <div className={css.components}>
                    <div className={css.left}>
                        <div className={css.info}>
                            <h1 className={css.title}>Download now</h1>
                            <p className={css.text}>Now finding the new job just got even easier with our new app!</p>
                        </div>
                        <div className={css.two__btns}>
                            <button>
                                <img src={apple} alt="" />
                                <div className={css.btn__info}>
                                    <p>Download on the </p>
                                    <h1>Apple Store</h1>
                                </div>
                            </button>
                            <button>
                                <img src={googleP} alt="" />
                                <div className={css.btn__info}>
                                    <p>Download from</p>
                                    <h1>Google Play</h1>
                                </div>
                            </button>
                        </div>
                    </div>
                    <img className={css.main__img} src={bigPhone} alt="" />
                </div>
            </div>
        </div>
    )
}

export default DownloadAppBlock