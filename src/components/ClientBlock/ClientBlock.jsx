import React from 'react'
import css from './ClientBlock.module.scss'
import spotify from '../../assets/images/clientblockIMg/spotify.svg'
import slack from '../../assets/images/clientblockIMg/slack.svg'
import netflix from '../../assets/images/clientblockIMg/netflix.svg'
import heroku from '../../assets/images/clientblockIMg/heroku.svg'
import vimeo from '../../assets/images/clientblockIMg/vimeo.svg'
import airbnb from '../../assets/images/clientblockIMg/airbnb.svg'


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
                <div className={css.card }>
                    <img src={spotify} alt="" />
                </div>
                <div className={css.card}>
                    <img src={slack} alt="" />
                </div>
                <div className={css.card__leave}>
                    <img src={netflix} alt="" />
                </div>
                <div className={css.card__leave}>
                    <img src={heroku} alt="" />
                </div>
                <div className={css.card__leave}>
                    <img src={vimeo} alt="" />
                </div>
                <div className={css.card__leave}>
                    <img src={airbnb} alt="" />
                </div>
            </div>
        </div>
        </div> 
    </div>
  )
}

export default ClientBlock