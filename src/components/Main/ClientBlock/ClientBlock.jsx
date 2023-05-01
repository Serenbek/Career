import React from 'react'
import css from './ClientBlock.module.scss'
import spotify from '../../../assets/images/clientblockIMg/spotify.svg'
import slack from '../../../assets/images/clientblockIMg/slack.svg'
import netflix from '../../../assets/images/clientblockIMg/netflix.svg'
import heroku from '../../../assets/images/clientblockIMg/heroku.svg'
import vimeo from '../../../assets/images/clientblockIMg/vimeo.svg'
import airbnb from '../../../assets/images/clientblockIMg/airbnb.svg'

function ClientBlock() {
    return (
        <div className={css.background}>
            <div className='container'>
                <div className={css.wrapper}>
                    <div className={css.headline}>
                        <h1>Our Clients</h1>
                        <p>Curabitur a felis in nunc fringilla tristique. Fusce egestas elit eget lorem. Etiam vitae tortor.</p>
                    </div>
                    <div className={css.images}>
                        <div className={css.card}>
                            <img src={spotify} alt="icon spotify" />
                        </div>
                        <div className={css.card}>
                            <img src={slack} alt="icon slack" />
                        </div>
                        <div className={css.card}>
                            <img src={netflix} alt="icon netflix" />
                        </div>
                        <div className={css.card}>
                            <img src={heroku} alt="icon heroku" />
                        </div>
                        <div className={css.card}>
                            <img src={vimeo} alt="icon vimeo" />
                        </div>
                        <div className={css.card}>
                            <img src={airbnb} alt="icon airbnb" />
                        </div>
                        <div className={css.extra}>
                            <div className={css.card__none}>
                                <img src={spotify} alt="icon vimeo" />
                            </div>
                            <div className={css.card__none}>
                                <img src={slack} alt="icon airbnb" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientBlock