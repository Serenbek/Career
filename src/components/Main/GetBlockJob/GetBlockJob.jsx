import React from 'react'
import css from './GetBlockJob.module.scss'

function GetBlockJob() {
  return (
    <div className={css.wrapper}>
        <div className='container'>
            <h1>Get The Right Job For You</h1>
            <p>Subscribe to get updated on latest and relevant career opportunities</p>
            <div className={css.inp}>
                <input placeholder='Enter your email' type="text"/>
                <button>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default GetBlockJob