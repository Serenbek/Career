import React from 'react'
import css from './globalContent.module.scss'

function globalContent({ img, job, title }) {
    return (
            <div className={css.card}>
                <div className={css.card__top}>
                    <img src={img} alt={title} />
                </div>
                <div className={css.card__bottom}>
                    <h1>{title}</h1>
                    <p>{job}</p>
                </div>
            </div>
    )
}

export default globalContent